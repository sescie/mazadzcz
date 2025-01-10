import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Leadership = () => {
  const executives = [
    {
      name: 'Sarah Chen',
      title: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Over 25 years of experience in global asset management. Previously held senior positions at leading financial institutions.'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Chief Investment Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Renowned investment strategist with expertise in global markets and multi-asset solutions.'
    },
    {
      name: 'Emily Thompson',
      title: 'Head of Sustainable Investing',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Pioneer in ESG integration and sustainable investment strategies. PhD in Environmental Economics.'
    }
  ];

  const directors = [
    {
      name: 'David Park',
      title: 'Head of Asia Pacific',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Expert in Asian markets with extensive experience in regional investment strategies.'
    },
    {
      name: 'Lisa Weber',
      title: 'Head of Private Assets',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Specialist in private equity and real estate investments with a strong track record in deal execution.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Leadership</h1>
          <p className="text-xl">
            Meet the experienced team driving our global investment strategy
          </p>
        </div>
      </div>

      {/* Executive Team */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">Executive Committee</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {executives.map((executive) => (
            <div key={executive.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={executive.image}
                alt={executive.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{executive.name}</h3>
                <p className="text-blue-900 font-medium mb-4">{executive.title}</p>
                <p className="text-gray-600 mb-6">{executive.bio}</p>
                <div className="flex space-x-4">
                  <button className="text-gray-600 hover:text-blue-900">
                    <Mail size={20} />
                  </button>
                  <button className="text-gray-600 hover:text-blue-900">
                    <Linkedin size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Directors */}
        <h2 className="text-3xl font-bold mb-12">Regional Directors</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {directors.map((director) => (
            <div key={director.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-1">{director.name}</h3>
                  <p className="text-blue-900 font-medium mb-4">{director.title}</p>
                  <p className="text-gray-600 mb-6">{director.bio}</p>
                  <div className="flex space-x-4">
                    <button className="text-gray-600 hover:text-blue-900">
                      <Mail size={20} />
                    </button>
                    <button className="text-gray-600 hover:text-blue-900">
                      <Linkedin size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;