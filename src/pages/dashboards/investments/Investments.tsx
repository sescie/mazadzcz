import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddInvestment from './AddInvestment';
import DisplayInvestments from './DisplayInvestments';

export type Investment = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
};

const Investments = () => {
  const [Investments, setInvestments] = useState<Investment[]>([]);
  const [isAddingInvestment, setIsAddingInvestment] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch Investments from API
  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/investments/');
        const formattedInvestments = response.data.map(Investment => ({
          ...Investment,
          status: Investment.status || 'active', // Default status
          joinDate: Investment.created_at || new Date().toISOString()
        }));
        setInvestments(formattedInvestments);
      } catch (err) {
        setError('Failed to fetch Investments');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestments();
  }, []);

  const handleAddInvestment = async (Investment: Omit<Investment, 'id' | 'joinDate'>) => {
    try {
      const response = await axios.post('/api/investments/', {
        name: Investment.name,
        email: Investment.email,
        password: 'defaultPassword', // You should handle password properly
        role: Investment.role
      });

      const newInvestment: Investment = {
        ...response.data,
        id: response.data.id.toString(),
        status: 'active',
        joinDate: new Date().toISOString()
      };

      setInvestments([...Investments, newInvestment]);
      setIsAddingInvestment(false);
    } catch (err) {
      setError('Failed to add Investment');
      console.error(err);
    }
  };

  const handleDeleteInvestment = async (InvestmentId: string) => {
    try {
      await axios.delete(`/api/Investments/delete/${InvestmentId}`);
      setInvestments(Investments.filter(Investment => Investment.id !== InvestmentId));
    } catch (err) {
      setError('Failed to delete Investment');
      console.error(err);
    }
  };

  const handleUpdateStatus = async (InvestmentId: string, status: 'active' | 'inactive') => {
    try {
      // Assuming you have an endpoint to update Investment status
      await axios.put(`/api/Investments/${InvestmentId}/status`, { status });
      setInvestments(Investments.map(Investment => 
        Investment.id === InvestmentId ? { ...Investment, status } : Investment
      ));
    } catch (err) {
      setError('Failed to update Investment status');
      console.error(err);
    }
  };

  if (loading) return <div>Loading Investments...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Investment Management</h1>
        <button
          onClick={() => setIsAddingInvestment(true)}
          className="bg-[rgb(30,58,138)] text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          Add New Investment
        </button>
      </div>

        <AddInvestment
          onAdd={handleAddInvestment}
          onCancel={() => setIsAddingInvestment(false)}
        />
      

      <DisplayInvestments
        Investments={Investments}
        onDeleteInvestment={handleDeleteInvestment}
        onUpdateStatus={handleUpdateStatus}
      />
    </div>
  );
}

export default Investments;