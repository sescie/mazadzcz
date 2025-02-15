import React from 'react';
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '24,532',
      change: '+12.5%',
      icon: <Users size={24} className="text-blue-600" />
    },
    {
      title: 'Total Investments',
      value: '$2.4M',
      change: '+8.2%',
      icon: <TrendingUp size={24} className="text-green-600" />
    },
    {
      title: 'Revenue',
      value: '$850K',
      change: '+15.3%',
      icon: <DollarSign size={24} className="text-yellow-600" />
    },
    {
      title: 'Active Users',
      value: '1,203',
      change: '+4.7%',
      icon: <Activity size={24} className="text-purple-600" />
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-gray-100 rounded-lg p-3">
                {stat.icon}
              </div>
              <span className="text-sm text-green-600 font-medium">
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center justify-between py-3 border-b last:border-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Users size={20} className="text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">New user registered</p>
                  <p className="text-sm text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <button className="text-blue-600 text-sm hover:underline">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;