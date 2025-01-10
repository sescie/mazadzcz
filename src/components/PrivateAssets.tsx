import React from 'react';
import { Building2, Briefcase, LineChart, Users, DollarSign, TrendingUp } from 'lucide-react';

const PrivateAssets = () => {
  const strategies = [
    {
      title: 'Real Estate',
      icon: <Building2 size={32} className="text-blue-900" />,
      description: 'Direct investments in commercial and residential properties globally'
    },
    {
      title: 'Private Equity',
      icon: <Briefcase size={32} className="text-blue-900" />,
      description: 'Growth capital and buyout opportunities across sectors'
    },
    {
      title: 'Infrastructure',
      icon: <LineChart size={32} className="text-blue-900" />,
      description: 'Essential infrastructure assets with stable long-term returns'
    },
    {
      title: 'Private Debt',
      icon: <Users size={32} className="text-blue-900" />,
      description: 'Direct lending and structured credit solutions'
    },
    {
      title: 'CrptoCurrency',
      icon: <DollarSign size={32} className="text-blue-900" />,
      description: 'Direct lending and structured credit solutions'
    },
    {
      title: 'Stock Exchange',
      icon: <TrendingUp size={32} className="text-blue-900" />,
      description: 'Direct lending and structured credit solutions'
    }
  ];

  return (
    <div className=" bg-gray-50">
      {/* Hero Section */}
      

      {/* Strategy Overview */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Investment Strategies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diversified private market solutions tailored to institutional and qualified investors
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {strategies.map((strategy) => (
            <div key={strategy.title} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{strategy.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
              <p className="text-gray-600">{strategy.description}</p>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold mb-8">Key Benefits</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Portfolio Diversification</h4>
              <p className="text-gray-600">
                Low correlation to public markets providing true portfolio diversification
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Enhanced Returns</h4>
              <p className="text-gray-600">
                Potential for higher returns through active management and value creation
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Income Generation</h4>
              <p className="text-gray-600">
                Stable income streams from long-term contracted assets
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateAssets;