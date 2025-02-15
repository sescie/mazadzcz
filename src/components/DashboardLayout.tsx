import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { 
  Users, 
  TrendingUp, 
  BarChart2, 
  Settings, 
  Bell, 
  Search,
  Menu,
  X,
  CreditCard,
  FileText,
  MessageSquare,
  HelpCircle,
  LogOut
} from 'lucide-react';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [notifications] = useState(3); // Example notification count

  const menuItems = [
    { icon: <BarChart2 size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Users size={20} />, label: 'Manage Users', path: '/dashboard/users' },
    { icon: <TrendingUp size={20} />, label: 'Investments', path: '/dashboard/investments' },
    { icon: <CreditCard size={20} />, label: 'Transactions', path: '/dashboard/transactions' },
    { icon: <FileText size={20} />, label: 'Reports', path: '/dashboard/reports' },
    { icon: <MessageSquare size={20} />, label: 'Messages', path: '/dashboard/messages' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/dashboard/settings' },
    { icon: <HelpCircle size={20} />, label: 'Help Center', path: '/dashboard/help' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-[rgb(30,58,138)] text-white w-64 p-4`}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-2xl font-bold">Mazadzicz</span>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 text-gray-100 rounded-lg hover:bg-blue-800 transition-colors"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button 
            className="flex items-center gap-3 px-4 py-3 text-gray-100 rounded-lg hover:bg-blue-800 transition-colors w-full"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`${isSidebarOpen ? 'lg:ml-64' : ''}`}>
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <Menu size={24} />
              </button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg hover:bg-gray-100">
                <Bell size={24} />
                {notifications > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <div className="hidden md:block">
                  <div className="text-sm font-semibold">John Doe</div>
                  <div className="text-xs text-gray-500">Administrator</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;