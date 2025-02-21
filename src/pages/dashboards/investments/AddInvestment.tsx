import React, { useState } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';

interface AddInvestmentProps {
  onAdd: (data: any) => void;
  onCancel: () => void;
}

const AddInvestment: React.FC<AddInvestmentProps> = ({ onAdd, onCancel }) => {
  const [formData, setFormData] = useState({
    investmentName: '',
    type: 'stock',
    description: '',
    riskLevel: 'medium',
    marketValue: '',
  });
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/investments/`, formData);
      onAdd(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 ml-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Add New Investment</h2>
        <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Investment Name</label>
          <input
            type="text"
            required
            value={formData.investmentName}
            onChange={(e) => setFormData({ ...formData, investmentName: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Investment Type</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="stock">Stock</option>
            <option value="bond">Bond</option>
            <option value="mutual_fund">Mutual Fund</option>
            <option value="real_estate">Real Estate</option>
            <option value="cryptocurrency">Cryptocurrency</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Risk Level</label>
          <select
            value={formData.riskLevel}
            onChange={(e) => setFormData({ ...formData, riskLevel: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Market Value</label>
          <input
            type="number"
            value={formData.marketValue}
            onChange={(e) => setFormData({ ...formData, marketValue: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

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