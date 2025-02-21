import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AddUserProps {
  onCancel: () => void;
}

const AddUser: React.FC<AddUserProps> = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'investor',
  });
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/auth/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to register user');
      }
      alert('User registered successfully');
      setFormData({ fullName: '', email: '', password: '', role: 'investor' });
    } catch (error) {
      console.error('Error:', error);
      alert('Error registering user');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 w-3/4 md:w-1/2 lg:w-1/2">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Add New User</h2>
        <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="investor">Investor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="bg-[rgb(30,58,138)] text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Register User
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
