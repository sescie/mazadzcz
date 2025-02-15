import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Globe, ChevronDown, UserCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);

  const navItems = [
    {
      title: 'Investments',
      submenu: [
        {
          category: 'Investment Solutions',
          items: [
            { name: 'Mutual Funds', path: '/investments/mutual-funds' },
            { name: 'Exchange Traded Funds', path: '/investments/etfs' },
            { name: 'Private Assets', path: '/investments/private-assets' },
            { name: 'Sustainable Investing', path: '/investments/sustainable-investing' }
          ]
        },
        {
          category: 'Investment Capabilities',
          items: [
            { name: 'Equities', path: '/investments/equities' },
            { name: 'Fixed Income', path: '/investments/fixed-income' },
            { name: 'Multi-Asset', path: '/investments/multi-asset' },
            { name: 'Alternatives', path: '/investments/alternatives' }
          ]
        }
      ]
    },
    {
      title: 'Insights',
      submenu: [
        {
          category: 'Market Analysis',
          items: [
            { name: 'Market Views', path: '/insights/market-views' },
            { name: 'Economic Views', path: '/insights/economic-views' },
            { name: 'Investment Research', path: '/insights/investment-research' }
          ]
        },
        {
          category: 'Research & Analysis',
          items: [
            { name: 'Thought Leadership', path: '/insights/thought-leadership' },
            { name: 'Market Reports', path: '/insights/market-reports' },
            { name: 'Sustainability Insights', path: '/insights/sustainability' }
          ]
        }
      ]
    },
    {
      title: 'About Us',
      submenu: [
        {
          category: 'Company',
          items: [
            { name: 'Leadership Team', path: '/about/leadership' },
            { name: 'Corporate Responsibility', path: '/about/corporate-responsibility' },
            { name: 'Careers', path: '/about/careers' }
          ]
        },
        {
          category: 'Expertise',
          items: [
            { name: 'Investment Philosophy', path: '/about/investment-philosophy' },
            { name: 'Global Network', path: '/about/global-network' },
            { name: 'Innovation', path: '/about/innovation' }
          ]
        }
      ]
    }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-gray-600 hover:text-blue-900">Individual Investor</a>
              <a href="#" className="text-gray-600 hover:text-blue-900">Institutional</a>
              <a href="#" className="text-gray-600 hover:text-blue-900">Financial Advisors</a>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <button className="flex items-center space-x-1 text-gray-600">
                <Globe size={16} />
                <span>Location: Global</span>
              </button>             
            </div>           
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 font-bold text-2xl text-blue-900">
              Mazadzicz
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div 
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => setActiveSubmenu(item.title)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-900 py-8">
                    <span>{item.title}</span>
                    <ChevronDown size={16} />
                  </button>
                  {activeSubmenu === item.title && (
                    <div className="absolute rounded-xl left-0 w-[550px] bg-white shadow-lg py-8 mt-0 -ml-4">
                      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-8">
                        {item.submenu.map((section) => (
                          <div key={section.category}>
                            <h3 className="font-semibold text-gray-900 mb-4">{section.category}</h3>
                            <ul className="space-y-2">
                              {section.items.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link 
                                    to={subItem.path}
                                    className="text-gray-600 hover:text-blue-900"
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side items */}
            <div className="hidden lg:flex items-center space-x-6">
              <button className="text-gray-700 hover:text-blue-900">
                <Search size={20} />
              </button>
              <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
                Contact Us
              </button>
              <div className="relative">
                <button
                  className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
                  onClick={() => setIsAuthDropdownOpen(!isAuthDropdownOpen)}
                >
                  <UserCircle size={24} />
                  
                </button>
                {isAuthDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-1">
                      <Link
                        to="auth/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsAuthDropdownOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        to="auth/register"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsAuthDropdownOpen(false)}
                      >
                        Create Account
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <div key={item.title} className="py-2">
                  <button 
                    className="flex items-center justify-between w-full text-left font-medium text-gray-700"
                    onClick={() => setActiveSubmenu(activeSubmenu === item.title ? null : item.title)}
                  >
                    <span>{item.title}</span>
                    <ChevronDown 
                      size={16}
                      className={`transform transition-transform ${
                        activeSubmenu === item.title ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeSubmenu === item.title && (
                    <div className="mt-2 space-y-4 pl-4">
                      {item.submenu.map((section) => (
                        <div key={section.category} className="py-2">
                          <h3 className="font-medium text-gray-900 mb-2">{section.category}</h3>
                          <ul className="space-y-2">
                            {section.items.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  to={subItem.path}
                                  className="block text-gray-600"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="py-4 border-t">
                <button className="w-full bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
                  Contact Us
                </button>
              </div>
              
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;