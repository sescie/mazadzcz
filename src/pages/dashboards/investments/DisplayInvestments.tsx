import React from 'react';
import { MoreVertical, Trash2 } from 'lucide-react';
import { Investment } from './Investments';

type DisplayInvestmentsProps = {
  Investments: Investment[];
  onDeleteInvestment: (InvestmentId: string) => void;
  onUpdateStatus: (InvestmentId: string, status: 'active' | 'inactive') => void;
};

const DisplayInvestments: React.FC<DisplayInvestmentsProps> = ({
  Investments,
  onDeleteInvestment,
  onUpdateStatus,
}) => {
  if (Investments.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 text-center text-gray-500">
        No Investments found. Add a new Investment to get started.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Join Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Investments.map((Investment) => (
              <tr key={Investment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {Investment.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{Investment.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{Investment.role}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={Investment.status}
                    onChange={(e) => onUpdateStatus(Investment.id, e.target.value as 'active' | 'inactive')}
                    className={`text-sm rounded-full px-3 py-1 font-medium ${
                      Investment.status === 'active'
                        ? 'text-green-800 bg-green-100'
                        : 'text-red-800 bg-red-100'
                    }`}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {new Date(Investment.joinDate).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onDeleteInvestment(Investment.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 size={18} />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayInvestments;