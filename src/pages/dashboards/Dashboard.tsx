import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Activity, Clock } from 'lucide-react';
import axios from 'axios';

interface Stat {
  title: string;
  value: string;
  change: string;
  icon: JSX.Element;
}

interface Activity {
  type: string;
  id: number;
  title: string;
  date: Date;
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stat[]>([]);
  const [recentActivity, setRecentActivity] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error("No token found");
          setLoading(false);
          return;
        }
    
        // Define the headers
        const headers = {
          Authorization: `Bearer ${token}`, // Include the token in the request
        };
        // Fetch all required data
        const [usersResponse, investmentsResponse, userInvestmentsResponse] = await Promise.all([
          axios.get('http://147.93.121.22:4000/api/users/', { headers }),
          axios.get('http://147.93.121.22:4000/api/investments', { headers }),
          axios.get('http://147.93.121.22:4000/api/user-investments/', { headers })
        ]);

        // Calculate stats
        const totalUsers = usersResponse.data.length;
        const totalInvestments = investmentsResponse.data.length;
        const totalRevenue = userInvestmentsResponse.data.reduce((sum: number, item: any) => sum + parseFloat(item.amount_invested), 0);
        const activeUsers = new Set(userInvestmentsResponse.data.map((item: any) => item.user_id)).size;

        // Calculate percentage changes (example values, replace with your actual logic)
        const userChange = ((totalUsers - 20000) / 20000 * 100).toFixed(1);
        const investmentChange = ((totalInvestments - 1000) / 1000 * 100).toFixed(1);
        const revenueChange = ((totalRevenue - 800000) / 800000 * 100).toFixed(1);
        const activeUserChange = ((activeUsers - 1000) / 1000 * 100).toFixed(1);

        setStats([
          {
            title: 'Total Users',
            value: totalUsers.toLocaleString(),
            change: `+${userChange}%`,
            icon: <Users size={24} className="text-blue-600" />
          },
          {
            title: 'Total Investments',
            value: totalInvestments.toLocaleString(),
            change: `+${investmentChange}%`,
            icon: <TrendingUp size={24} className="text-green-600" />
          },
          {
            title: 'Total Revenue',
            value: `$${totalRevenue.toLocaleString()}`,
            change: `+${revenueChange}%`,
            icon: <DollarSign size={24} className="text-yellow-600" />
          },
          {
            title: 'Active Users',
            value: activeUsers.toLocaleString(),
            change: `+${activeUserChange}%`,
            icon: <Activity size={24} className="text-purple-600" />
          }
        ]);

        // Get recent activity
        const userActivities = usersResponse.data
          .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .map((user: any) => ({
            type: 'user',
            id: user.id,
            title: 'New user registered',
            date: new Date(user.created_at)
          }));

        const investmentActivities = investmentsResponse.data
          .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((investment: any) => ({
            type: 'investment',
            id: investment.id,
            title: `New investment: ${investment.name}`,
            date: new Date(investment.date)
          }));

        setRecentActivity(
          [...userActivities, ...investmentActivities]
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .slice(0, 5)
        );

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading dashboard...</div>;

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
          {recentActivity.map((activity) => (
            <div key={`${activity.type}-${activity.id}`} className="flex items-center justify-between py-3 border-b last:border-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Clock size={20} className="text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-gray-500">
                    {activity.date.toLocaleDateString()} at {activity.date.toLocaleTimeString()}
                  </p>
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