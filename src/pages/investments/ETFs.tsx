import React from 'react';
import { ArrowRight, TrendingUp, DollarSign, BarChart } from 'lucide-react';

const ETFs = () => {
  const etfs = [
    {
      name: 'Mazadzicz S&P 500 ETF',
      ticker: 'MZSP',
      aum: '$2.5B',
      expense: '0.03%',
      performance: '+15.2%'
    },
    {
      name: 'Mazadzicz Global Bond ETF',
      ticker: 'MZGB',
      aum: '$1.8B',
      expense: '0.06%',
      performance: '+4.2%'
    },
    {
      name: 'Mazadzicz ESG Leaders ETF',
      ticker: 'MZES',
      aum: '$950M',
      expense: '0.08%',
      performance: '+11.8%'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Exchange-Traded Funds</h1>
          <p className="text-xl mb-8">Low-cost, transparent investment solutions</p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 flex items-center">
              Explore ETFs <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10">
              Compare ETFs
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <TrendingUp size={32} className="text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Market Access</h3>
            <p className="text-gray-600">Efficient exposure to global markets with transparent pricing</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <DollarSign size={32} className="text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
            <p className="text-gray-600">Low expense ratios and competitive pricing</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <BarChart size={32} className="text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Performance</h3>
            <p className="text-gray-600">Track indices with minimal tracking error</p>
          </div>
        </div>

        {/* ETF List */}
        <h2 className="text-2xl font-bold mb-8">Featured ETFs</h2>
        <div className="grid gap-6">
          {etfs.map((etf) => (
            <div key={etf.name} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{etf.name}</h3>
                  <p className="text-lg font-medium text-gray-700 mb-4">{etf.ticker}</p>
                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">AUM:</span> {etf.aum}
                    </div>
                    <div>
                      <span className="font-medium">Expense Ratio:</span> {etf.expense}
                    </div>
                    <div>
                      <span className="font-medium">YTD:</span>{' '}
                      <span className="text-green-600">{etf.performance}</span>
                    </div>
                  </div>
                </div>
                <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ETFs;