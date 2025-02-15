import React, { useState } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';
import { Investment } from './Investments';

type AddInvestmentProps = {
  onAdd: (Investment: Omit<Investment, 'id' | 'joinDate'>) => void;
  onCancel: () => void;
};

const AddInvestment: React.FC<AddInvestmentProps> = ({ onAdd, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'stock', // default investment type
    email: '',
    company_name: '',
    ticker: '',
    current_price: '',
    dividend_yield: '',
    coupon_rate: '',
    maturity_date: '',
    nav: '',
    property_value: '',
    market_cap: '',
    status: 'active' as const,
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/investments/add', formData);
      onAdd(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 ml-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Add New Investment</h2>
        <button
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Investment Type and Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Investment Type</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="stock">Stock</option>
              <option value="bond">Bond</option>
              <option value="mutual_fund">Mutual Fund</option>
              <option value="real_estate">Real Estate</option>
              <option value="cryptocurrency">Cryptocurrency</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Investment Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email and Company Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input
              type="text"
              value={formData.company_name}
              onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Ticker (only for stocks and cryptocurrencies) */}
        {(formData.type === 'stock' || formData.type === 'cryptocurrency') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ticker</label>
            <input
              type="text"
              value={formData.ticker}
              onChange={(e) => setFormData({ ...formData, ticker: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {/* Additional fields for different investment types */}
        {formData.type === 'stock' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Dividend Yield</label>
            <input
              type="number"
              value={formData.dividend_yield}
              onChange={(e) => setFormData({ ...formData, dividend_yield: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {formData.type === 'bond' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Coupon Rate</label>
              <input
                type="number"
                value={formData.coupon_rate}
                onChange={(e) => setFormData({ ...formData, coupon_rate: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Maturity Date</label>
              <input
                type="date"
                value={formData.maturity_date}
                onChange={(e) => setFormData({ ...formData, maturity_date: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {formData.type === 'mutual_fund' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Net Asset Value (NAV)</label>
            <input
              type="number"
              value={formData.nav}
              onChange={(e) => setFormData({ ...formData, nav: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {formData.type === 'real_estate' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Property Value</label>
            <input
              type="number"
              value={formData.property_value}
              onChange={(e) => setFormData({ ...formData, property_value: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {formData.type === 'cryptocurrency' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Market Cap</label>
            <input
              type="text"
              value={formData.market_cap}
              onChange={(e) => setFormData({ ...formData, market_cap: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Submit and Cancel Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Add Investment
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInvestment;