import React from 'react';
import { Leaf, Globe, Target, Shield } from 'lucide-react';

const SustainableInvesting = () => {
  const strategies = [
    {
      title: 'Climate Transition',
      icon: <Leaf size={32} className="text-blue-900" />,
      description: 'Supporting companies leading the transition to a low-carbon economy'
    },
    {
      title: 'ESG Integration',
      icon: <Globe size={32} className="text-blue-900" />,
      description: 'Incorporating environmental, social, and governance factors into investment decisions'
    },
    {
      title: 'Impact Investing',
      icon: <Target size={32} className="text-blue-900" />,
      description: 'Generating measurable positive social and environmental impact alongside financial returns'
    },
    {
      title: 'Sustainable Solutions',
      icon: <Shield size={32} className="text-blue-900" />,
      description: 'Products designed to meet specific sustainability objectives'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-6">Sustainable Investing</h1>
          <p className="text-xl max-w-2xl">
            Driving positive change through innovative investment solutions that deliver both financial returns and sustainable impact.
          </p>
        </div>
      </div>

      {/* Strategy Overview */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We integrate sustainability across our investment platform, combining rigorous financial analysis with ESG insights.
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

        {/* Impact Metrics */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold mb-8">Our Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">$50B+</div>
              <p className="text-gray-600">Sustainable AUM</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">20+</div>
              <p className="text-gray-600">Years of ESG Integration</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">100+</div>
              <p className="text-gray-600">ESG Specialists</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainableInvesting;