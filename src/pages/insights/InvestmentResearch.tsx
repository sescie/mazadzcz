import React from 'react';
import { Search, Filter, Download, ArrowRight } from 'lucide-react';

const InvestmentResearch = () => {
  const researchPapers = [
    {
      title: 'The Evolution of Digital Assets',
      category: 'Thematic Research',
      date: 'March 2024',
      type: 'White Paper',
      excerpt: 'Exploring the transformation of digital assets and their role in modern portfolios.'
    },
    {
      title: 'ESG Integration in Fixed Income',
      category: 'ESG Research',
      date: 'March 2024',
      type: 'Research Paper',
      excerpt: 'A comprehensive framework for incorporating ESG factors in fixed income investments.'
    },
    {
      title: 'Alternative Data in Investment',
      category: 'Quantitative Research',
      date: 'February 2024',
      type: 'White Paper',
      excerpt: 'Leveraging alternative data sources for investment insights and alpha generation.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Investment Research</h1>
          <p className="text-xl mb-8">
            Cutting-edge research and analysis from our global research team
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search research papers..."
                className="w-full px-4 py-3 pl-12 rounded-lg text-gray-900"
              />
              <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
          <div className="flex flex-wrap gap-4 items-center">
            <Filter size={20} className="text-blue-900" />
            <select className="border rounded px-4 py-2">
              <option>All Categories</option>
              <option>Thematic Research</option>
              <option>ESG Research</option>
              <option>Quantitative Research</option>
            </select>
            <select className="border rounded px-4 py-2">
              <option>All Types</option>
              <option>White Papers</option>
              <option>Research Papers</option>
              <option>Case Studies</option>
            </select>
            <select className="border rounded px-4 py-2">
              <option>All Dates</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Last Year</option>
            </select>
          </div>
        </div>

        {/* Featured Research */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <span className="inline-block bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured Research
              </span>
              <h2 className="text-3xl font-bold mb-4">
                The Future of Asset Management: 2024 and Beyond
              </h2>
              <p className="text-gray-600 mb-6">
                A comprehensive analysis of emerging trends, technological disruption,
                and evolving investor preferences shaping the future of asset management.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 flex items-center">
                  Read Paper <ArrowRight size={20} className="ml-2" />
                </button>
                <button className="flex items-center text-blue-900 hover:text-blue-700">
                  <Download size={20} className="mr-2" />
                  Download PDF
                </button>
              </div>
            </div>
            <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
                <p className="text-gray-600">Pages of Analysis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Papers Grid */}
        <div className="grid gap-6">
          {researchPapers.map((paper) => (
            <div key={paper.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-gray-600">{paper.category}</span>
                    <span className="text-sm text-gray-600">•</span>
                    <span className="text-sm text-gray-600">{paper.type}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{paper.title}</h3>
                  <p className="text-gray-600 mb-4">{paper.excerpt}</p>
                  <div className="text-sm text-gray-600">{paper.date}</div>
                </div>
                <button className="flex items-center text-blue-900 hover:text-blue-700">
                  <Download size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentResearch;