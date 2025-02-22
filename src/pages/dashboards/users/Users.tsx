import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddUser from './AddUser';
import DisplayUsers from './DisplayUsers';

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://147.93.121.22:4000/api/users/');
        const formattedUsers = response.data.map(user => ({
          ...user,
          status: user.status || 'active', // Default status
          joinDate: user.created_at || new Date().toISOString()
        }));
        setUsers(formattedUsers);
      } catch (err) {
        setError('Failed to fetch users');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async (user: Omit<User, 'id' | 'joinDate'>) => {
    try {
      const response = await axios.post('http://147.93.121.22:4000/api/auth/register', {
        name: user.name,
        email: user.email,
        password: 'defaultPassword', // You should handle password properly
        role: user.role
      });

      const newUser: User = {
        ...response.data,
        id: response.data.id.toString(),
        status: 'active',
        joinDate: new Date().toISOString()
      };

      setUsers([...users, newUser]);
      setIsAddingUser(false);
    } catch (err) {
      setError('Failed to add user');
      console.error(err);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      await axios.delete(`/api/users/delete/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (err) {
      setError('Failed to delete user');
      console.error(err);
    }
  };

  const handleUpdateStatus = async (userId: string, status: 'active' | 'inactive') => {
    try {
      // Assuming you have an endpoint to update user status
      await axios.put(`/api/users/${userId}/status`, { status });
      setUsers(users.map(user => 
        user.id === userId ? { ...user, status } : user
      ));
    } catch (err) {
      setError('Failed to update user status');
      console.error(err);
    }
  };

  if (loading) return <div>Loading users...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Management</h1>
        <button
          onClick={() => setIsAddingUser(true)}
          className="bg-[rgb(30,58,138)] text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          Add New User
        </button>
      </div>

        <AddUser
          onAdd={handleAddUser}
          onCancel={() => setIsAddingUser(false)}
        />
      

      <DisplayUsers
        users={users}
        onDeleteUser={handleDeleteUser}
        onUpdateStatus={handleUpdateStatus}
      />
    </div>
  );
}

export default Users;