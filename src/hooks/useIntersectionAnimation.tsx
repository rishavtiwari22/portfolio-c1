import { useEffect, useRef, useCallback } from 'react';

interface UseIntersectionAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  delay?: number;
}

export const useIntersectionAnimation = ({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  animationClass = 'animate-fade-in-right',
  delay = 0
}: UseIntersectionAnimationOptions = {}) => {
  const elementsRef = useRef<Set<Element>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observe = useCallback((element: Element) => {
    if (element && !elementsRef.current.has(element)) {
      elementsRef.current.add(element);
      // Set initial state
      (element as HTMLElement).style.opacity = '0';
      (element as HTMLElement).style.transform = 'translateX(30px)';
      (element as HTMLElement).style.willChange = 'transform, opacity';
      observerRef.current?.observe(element);
    }
  }, []);

  const unobserve = useCallback((element: Element) => {
    elementsRef.current.delete(element);
    observerRef.current?.unobserve(element);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            setTimeout(() => {
              element.classList.add(animationClass);
              element.style.opacity = '1';
              element.style.transform = 'translateX(0)';
              
              // Clean up will-change after animation
              setTimeout(() => {
                element.style.willChange = 'auto';
              }, 600);
            }, delay);
            
            // Unobserve after animation starts
            observerRef.current?.unobserve(element);
            elementsRef.current.delete(element);
          }
        });
      },
      { threshold, rootMargin }
    );

    return () => {
      observerRef.current?.disconnect();
      elementsRef.current.clear();
    };
  }, [threshold, rootMargin, animationClass, delay]);

  return { observe, unobserve };
};

// Optimized scroll performance hook
export const useOptimizedScroll = (callback: (scrollY: number) => void, delay = 16) => {
  const timeoutRef = useRef<number>();
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) {
        cancelAnimationFrame(timeoutRef.current);
      }

      timeoutRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        // Only call callback if scroll difference is significant
        if (Math.abs(scrollY - lastScrollRef.current) > 5) {
          callback(scrollY);
          lastScrollRef.current = scrollY;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        cancelAnimationFrame(timeoutRef.current);
      }
    };
  }, [callback, delay]);
};