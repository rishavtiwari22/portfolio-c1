import { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
// Import from our custom Icons file to avoid ad blocker issues
import { MenuIcon as Menu, XIcon as X, HomeIcon as Home, FileTextIcon as FileText, LogOutIcon as LogOut } from '../components/Icons';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogout = () => {
    // In a real app, you'd clear auth tokens/cookies here
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar for larger screens and overlay for mobile */}
      <div 
        className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-auto md:h-auto
        `}
      >
        {/* Admin Logo */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-2">
              <span className="font-bold text-white">A</span>
            </div>
            <span className="font-bold text-lg text-gray-800">Admin Panel</span>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-gray-500 hover:text-gray-800"
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
                'bg-orange-50 text-orange-600' : 
                'text-gray-700 hover:bg-gray-100'
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
                'bg-orange-50 text-orange-600' : 
                'text-gray-700 hover:bg-gray-100'
              }
            `}
          >
            <FileText size={18} />
            <span>Content Editor</span>
          </Link>
          
          <button
            onClick={handleLogout}
            className="flex w-full items-center space-x-3 p-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 py-3 flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-gray-500 hover:text-gray-800"
            >
              <Menu size={24} />
            </button>
            
            <div className="ml-auto flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full h-8 w-8 flex items-center justify-center text-white font-medium">
                A
              </div>
              <span className="text-sm font-medium text-gray-700">Admin</span>
            </div>
          </div>
        </header>
        
        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
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