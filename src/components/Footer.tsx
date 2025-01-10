import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Investments',
      links: [
        'Mutual Funds',
        'ETFs',
        'Private Assets',
        'Sustainable Investing',
        'Investment Solutions',
        'Fund Center'
      ]
    },
    {
      title: 'Insights',
      links: [
        'Market Views',
        'Economic Outlook',
        'Investment Research',
        'Sustainability',
        'Thought Leadership',
        'Webinars & Events'
      ]
    },
    {
      title: 'About Us',
      links: [
        'Our Story',
        'Leadership Team',
        'Careers',
        'Press Center',
        'Corporate Responsibility',
        'Contact Us'
      ]
    },
    {
      title: 'Legal',
      links: [
        'Terms & Conditions',
        'Privacy Policy',
        'Cookie Policy',
        'Modern Slavery Statement',
        'Regulatory Information',
        'Site Map'
      ]
    }
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, label: 'LinkedIn' },
    { icon: <Twitter size={20} />, label: 'Twitter' },
    { icon: <Facebook size={20} />, label: 'Facebook' },
    { icon: <Youtube size={20} />, label: 'YouTube' },
    { icon: <Instagram size={20} />, label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mazadzicz. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;