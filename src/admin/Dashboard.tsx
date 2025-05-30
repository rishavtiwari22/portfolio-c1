import { useState, useEffect } from 'react';
import { ClockIcon as Clock, UsersIcon as Users, BarChartIcon as BarChart, EditIcon as Edit } from '../components/Icons';

export default function Dashboard() {
  const [stats, setStats] = useState({
    visitors: 0,
    pageViews: 0,
    avgTime: 0,
    contentItems: 0
  });

  // Simulate loading stats
  useEffect(() => {
    // Mock API call - would be a real API call in a production app
    setTimeout(() => {
      setStats({
        visitors: 1245,
        pageViews: 5432,
        avgTime: 127,
        contentItems: 18
      });
    }, 800);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Welcome to your admin dashboard</p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition shadow-md flex items-center">
            <Edit size={16} className="mr-2" />
            Edit Site Settings
          </button>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">Unique Visitors</h2>
            <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-lg">
              <Users size={18} className="text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">{stats.visitors.toLocaleString()}</span>
            <span className="ml-2 text-xs text-green-600 dark:text-green-400 font-medium">+12.5%</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Compared to last month</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Page Views</h2>
            <div className="bg-orange-100 dark:bg-orange-900/40 p-2 rounded-lg">
              <BarChart size={18} className="text-orange-600 dark:text-orange-400" />
            </div>
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">{stats.pageViews.toLocaleString()}</span>
            <span className="ml-2 text-xs text-green-600 dark:text-green-400 font-medium">+8.2%</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Compared to last month</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Session Duration</h2>
            <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-lg">
              <Clock size={18} className="text-green-600 dark:text-green-400" />
            </div>
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">{Math.floor(stats.avgTime / 60)}m {stats.avgTime % 60}s</span>
            <span className="ml-2 text-xs text-red-600 dark:text-red-400 font-medium">-3.1%</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Compared to last month</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">Content Items</h2>
            <div className="bg-purple-100 dark:bg-purple-900/40 p-2 rounded-lg">
              <Edit size={18} className="text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">{stats.contentItems}</span>
            <span className="ml-2 text-xs text-green-600 dark:text-green-400 font-medium">+2</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Since last login</p>
        </div>
      </div>
      
      {/* Recent Activity Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-700">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Recent Activity</h2>
        
        <div className="space-y-4">
          {/* Example activity items */}
          <div className="border-b border-gray-100 dark:border-gray-700 pb-3">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-800 dark:text-white">Content Updated: Hero Section</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">You updated the main heading and call-to-action button text.</p>
          </div>
          
          <div className="border-b border-gray-100 dark:border-gray-700 pb-3">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-800 dark:text-white">New Blog Post Added</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Yesterday</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">You published "Design Trends for 2023" to the blog section.</p>
          </div>
          
          <div className="border-b border-gray-100 dark:border-gray-700 pb-3">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-800 dark:text-white">Portfolio Project Added</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">3 days ago</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">You added "E-commerce Website Redesign" to your portfolio.</p>
          </div>
          
          <div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-800 dark:text-white">Contact Form Submission</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">5 days ago</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">A potential client reached out regarding a new project.</p>
          </div>
        </div>
      </div>
    </div>
  );
}