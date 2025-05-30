import React from 'react';
import { BlogPosts } from '../components/BlogPosts';

export const BlogPage: React.FC = () => {
  return (
    <main className="w-full max-w-[100vw] overflow-x-hidden">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <BlogPosts />
      </div>
    </main>
  );
};
