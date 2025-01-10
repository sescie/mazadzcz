import React from 'react';
import { Calendar, Tag, Clock } from 'lucide-react';

const MarketViews = () => {
  const articles = [
    {
      title: 'Global Market Outlook 2024',
      category: 'Market Analysis',
      date: 'March 15, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      excerpt: 'Our comprehensive analysis of global markets and investment opportunities for the year ahead.'
    },
    {
      title: 'Emerging Markets: A New Dawn',
      category: 'Regional Focus',
      date: 'March 12, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      excerpt: 'Exploring the evolving landscape of emerging markets and their growth potential.'
    },
    {
      title: 'The Future of Sustainable Investing',
      category: 'ESG',
      date: 'March 10, 2024',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      excerpt: 'How ESG factors are reshaping investment decisions and market dynamics.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Market Views</h1>
          <p className="text-xl">
            Expert insights and analysis from our global investment teams
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Article */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Featured Article"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Tag size={16} className="mr-2" />
                <span>Featured Analysis</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                The Changing Landscape of Global Markets
              </h2>
              <p className="text-gray-600 mb-6">
                An in-depth analysis of current market trends, challenges, and opportunities
                in the evolving global economic landscape.
              </p>
              <div className="flex items-center text-sm text-gray-600 mb-6">
                <Calendar size={16} className="mr-2" />
                <span className="mr-4">March 18, 2024</span>
                <Clock size={16} className="mr-2" />
                <span>15 min read</span>
              </div>
              <button className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.title} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Tag size={16} className="mr-2" />
                  <span>{article.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{article.date}</span>
                  <Clock size={16} className="mr-2" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketViews;