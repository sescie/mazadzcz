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
    <div className=" bg-gray-50">
      {/* Hero Section */}
      

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filters */}
        

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
      </div>
    </div>
  );
};

export default InvestmentResearch;