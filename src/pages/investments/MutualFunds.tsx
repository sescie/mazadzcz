import React from 'react';
import { ArrowRight, Filter, Download } from 'lucide-react';

const MutualFunds = () => {
  const funds = [
    {
      name: 'Mazadzicz Global Growth Fund',
      type: 'Equity',
      risk: 'High',
      performance: '+12.5%',
      rating: 5
    },
    {
      name: 'Mazadzicz Income Fund',
      type: 'Fixed Income',
      risk: 'Medium',
      performance: '+5.8%',
      rating: 4
    },
    {
      name: 'Mazadzicz Balanced Portfolio',
      type: 'Multi-Asset',
      risk: 'Medium',
      performance: '+8.2%',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Mutual Funds</h1>
          <p className="text-xl mb-8">Discover our range of actively managed mutual funds</p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 flex items-center">
              View Fund Range <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10">
              Download Fund List
            </button>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            <Filter size={20} className="text-blue-900" />
            <select className="border rounded px-4 py-2">
              <option>Fund Type</option>
              <option>Equity</option>
              <option>Fixed Income</option>
              <option>Multi-Asset</option>
            </select>
            <select className="border rounded px-4 py-2">
              <option>Risk Level</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
            <button className="ml-auto bg-blue-900 text-white px-4 py-2 rounded">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Fund List */}
        <div className="grid gap-6">
          {funds.map((fund) => (
            <div key={fund.name} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{fund.name}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Type:</span> {fund.type}
                    </div>
                    <div>
                      <span className="font-medium">Risk Level:</span> {fund.risk}
                    </div>
                    <div>
                      <span className="font-medium">YTD Performance:</span>{' '}
                      <span className="text-green-600">{fund.performance}</span>
                    </div>
                    <div>
                      <span className="font-medium">Rating:</span>{' '}
                      {'★'.repeat(fund.rating)}{'☆'.repeat(5-fund.rating)}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-900 hover:text-blue-700">
                    <Download size={20} />
                  </button>
                  <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MutualFunds;