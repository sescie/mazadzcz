import React from 'react';
import { Search, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Careers = () => {
  const opportunities = [
    {
      title: 'Investment Analyst',
      department: 'Investment Management',
      location: 'New York',
      type: 'Full-time'
    },
    {
      title: 'Portfolio Manager',
      department: 'Asset Management',
      location: 'London',
      type: 'Full-time'
    },
    {
      title: 'ESG Specialist',
      department: 'Sustainable Investing',
      location: 'Singapore',
      type: 'Full-time'
    }
  ];

  const programs = [
    {
      title: 'Graduate Program',
      icon: <GraduationCap size={32} className="text-blue-900" />,
      description: 'Launch your career in investment management through our structured graduate program.'
    },
    {
      title: 'Summer Internship',
      icon: <Briefcase size={32} className="text-blue-900" />,
      description: 'Gain hands-on experience and insights into the asset management industry.'
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
          <h1 className="text-5xl font-bold mb-6">Careers at Mazadzicz</h1>
          <p className="text-xl max-w-2xl mb-8">
            Join a team of innovative professionals shaping the future of investment management
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search opportunities..."
                className="w-full px-4 py-3 pl-12 rounded-lg text-gray-900"
              />
              <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Why Join Us */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Join Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a global team that's driving innovation in investment management
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Growth & Development</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Continuous learning opportunities</li>
              <li>Mentorship programs</li>
              <li>Global mobility</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Benefits & Wellbeing</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Competitive compensation</li>
              <li>Comprehensive healthcare</li>
              <li>Work-life balance</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Culture & Values</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Inclusive environment</li>
              <li>Innovation-driven</li>
              <li>Collaborative teams</li>
            </ul>
          </div>
        </div>

        {/* Early Careers */}
        <h2 className="text-2xl font-bold mb-8">Early Careers</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program) => (
            <div key={program.title} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <button className="text-blue-900 font-medium hover:text-blue-700">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* Current Opportunities */}
        <h2 className="text-2xl font-bold mb-8">Current Opportunities</h2>
        <div className="grid gap-6">
          {opportunities.map((job) => (
            <div key={job.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Briefcase size={16} className="mr-2" />
                      {job.department}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {job.location}
                    </div>
                    <div>{job.type}</div>
                  </div>
                </div>
                <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;