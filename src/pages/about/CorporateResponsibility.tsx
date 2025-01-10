import React from 'react';
import { Heart, Globe, Users, Shield } from 'lucide-react';

const CorporateResponsibility = () => {
  const initiatives = [
    {
      title: 'Environmental Stewardship',
      icon: <Globe size={32} className="text-blue-900" />,
      description: 'Committed to reducing our environmental impact and supporting the transition to a low-carbon economy.'
    },
    {
      title: 'Social Impact',
      icon: <Heart size={32} className="text-blue-900" />,
      description: 'Supporting communities through education, financial literacy, and social development programs.'
    },
    {
      title: 'Diversity & Inclusion',
      icon: <Users size={32} className="text-blue-900" />,
      description: 'Fostering an inclusive workplace that celebrates diversity and promotes equal opportunities.'
    },
    {
      title: 'Governance & Ethics',
      icon: <Shield size={32} className="text-blue-900" />,
      description: 'Maintaining the highest standards of corporate governance and ethical business practices.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-6">Corporate Responsibility</h1>
          <p className="text-xl max-w-2xl">
            Creating positive impact through responsible business practices and community engagement
          </p>
        </div>
      </div>

      {/* Initiatives */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Commitments</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in creating sustainable value for all stakeholders through responsible business practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {initiatives.map((initiative) => (
            <div key={initiative.title} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{initiative.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
              <p className="text-gray-600">{initiative.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8">Our Impact</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">40%</div>
              <p className="text-gray-600">Carbon Reduction Since 2019</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">$10M+</div>
              <p className="text-gray-600">Community Investment</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">45%</div>
              <p className="text-gray-600">Women in Leadership</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">100K+</div>
              <p className="text-gray-600">Volunteer Hours</p>
            </div>
          </div>
        </div>

        {/* Latest Report */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold mb-4">
                Corporate Responsibility Report 2024
              </h3>
              <p className="text-gray-600 mb-6">
                Learn more about our environmental, social, and governance initiatives
                and the impact we're making globally.
              </p>
              <button className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800">
                Download Report
              </button>
            </div>
            <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-12">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Corporate Responsibility"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateResponsibility;