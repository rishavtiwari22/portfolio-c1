import { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Home, FileText, LogOut } from 'lucide-react';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogout = () => {
    // In a real app, you'd clear auth tokens/cookies here
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {/* Sidebar for larger screens and overlay for mobile */}
      <div 
        className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-auto md:h-auto
        `}
      >
        {/* Admin Logo */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-2">
              <span className="font-bold text-white">A</span>
            </div>
            <span className="font-bold text-lg text-gray-800 dark:text-white">Admin Panel</span>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="p-4 space-y-2">
          <Link 
            to="/admin"
            className={`
              flex items-center space-x-3 p-3 rounded-lg transition-colors
              ${location.pathname === '/admin' ? 
                'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400' : 
                'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }
            `}
          >
            <Home size={18} />
            <span>Dashboard</span>
          </Link>
          
          <Link 
            to="/admin/content"
            className={`
              flex items-center space-x-3 p-3 rounded-lg transition-colors
              ${location.pathname === '/admin/content' ? 
                'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400' : 
                'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }
            `}
          >
            <FileText size={18} />
            <span>Content Editor</span>
          </Link>
          
          <button
            onClick={handleLogout}
            className="flex w-full items-center space-x-3 p-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
          <div className="px-4 py-3 flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            >
              <Menu size={24} />
            </button>
            
            <div className="ml-auto flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full h-8 w-8 flex items-center justify-center text-white font-medium">
                A
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Admin</span>
            </div>
          </div>
        </header>
        
        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50 dark:bg-gray-900">
          <Outlet />
        </main>
      </div>
      
      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}