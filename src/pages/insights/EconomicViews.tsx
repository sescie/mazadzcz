import React from 'react';
import { Calendar, Tag, Clock, Download } from 'lucide-react';

const EconomicViews = () => {
  const reports = [
    {
      title: 'Global Economic Outlook Q2 2024',
      category: 'Economic Analysis',
      date: 'March 20, 2024',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      excerpt: 'Our comprehensive analysis of global economic trends and forecasts for the coming quarter.'
    },
    {
      title: 'Central Bank Policy Impact',
      category: 'Monetary Policy',
      date: 'March 18, 2024',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      excerpt: 'Analysis of central bank policies and their implications for global markets.'
    },
    {
      title: 'Emerging Markets Economic Review',
      category: 'Regional Analysis',
      date: 'March 15, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      excerpt: 'In-depth review of economic developments in key emerging markets.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Economic Views</h1>
          <p className="text-xl">
            Insights and analysis on global economic trends
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Report */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Featured Report"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Tag size={16} className="mr-2" />
                <span>Featured Report</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                2024 Global Economic Outlook
              </h2>
              <p className="text-gray-600 mb-6">
                Our comprehensive analysis of global economic trends, growth forecasts,
                and policy implications for the year ahead.
              </p>
              <div className="flex items-center text-sm text-gray-600 mb-6">
                <Calendar size={16} className="mr-2" />
                <span className="mr-4">March 22, 2024</span>
                <Clock size={16} className="mr-2" />
                <span>20 min read</span>
              </div>
              <div className="flex space-x-4">
                <button className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800">
                  Read More
                </button>
                <button className="flex items-center text-blue-900 hover:text-blue-700">
                  <Download size={20} className="mr-2" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reports.map((report) => (
            <div key={report.title} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={report.image}
                alt={report.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Tag size={16} className="mr-2" />
                  <span>{report.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{report.title}</h3>
                <p className="text-gray-600 mb-4">{report.excerpt}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{report.date}</span>
                  <Clock size={16} className="mr-2" />
                  <span>{report.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EconomicViews;