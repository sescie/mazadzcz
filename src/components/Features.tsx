import React from 'react';
import { TrendingUp, Shield, Globe, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-900" />,
      title: 'Active Investment',
      description: 'Dynamic portfolio management focused on delivering superior returns across market cycles.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-900" />,
      title: 'Risk Management',
      description: 'Sophisticated risk analysis and management strategies to protect and grow your wealth.'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-900" />,
      title: 'Global Presence',
      description: 'Access to worldwide investment opportunities through our extensive global network.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-900" />,
      title: 'Expert Team',
      description: 'Seasoned professionals with deep industry knowledge and proven track records.'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Mazadzicz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine innovation with tradition to deliver exceptional investment solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;