import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
<div className="relative h-[50rem]">

      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/50" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Shaping the future of global investments
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Navigate the complexities of today's markets with our innovative investment solutions and expert insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 flex items-center justify-center">
                Explore Our Solutions
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10">
                Latest Market Insights
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;