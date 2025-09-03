import React, { useState } from 'react';
import ReusableTable from './ReusableTable';

const Tab4 = () => {
  const [data, setData] = useState([
    { userId: 'User0129', name: 'Jane Doe', email: 'jane.doe@example.com', rewards: 23, status: 'Active', id: 1 },
    { userId: 'User04883', name: 'John Sarha', email: 'john.sarha@example.com', rewards: 456, status: 'Inactive', id: 2 },
    { userId: 'User584', name: 'Sarah Lee', email: 'sarah.lee@example.com', rewards: 3456, status: 'Active', id: 3 },
    { userId: 'User668', name: 'David Smith', email: 'david.smith@example.com', rewards: 56, status: 'Inactive', id: 4 },
    { userId: 'User1024', name: 'Mary Johnson', email: 'mary.johnson@example.com', rewards: 765, status: 'Active', id: 5 },
    { userId: 'User3045', name: 'Michael Brown', email: 'michael.brown@example.com', rewards: 120, status: 'Inactive', id: 6 },
  ]);

  const columns = [
    { header: 'UserId', accessor: 'userId' },
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Rewards', accessor: 'rewards' },
    { header: 'Status', accessor: 'status' },
    { header: 'Action', accessor: 'action' },  
  ];

  const handleEdit = (index) => {
    console.log('Edit clicked for index: ', index);
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
    console.log('Delete clicked for index: ', index);
  };

  const handleAddUser = () => {
    const newUser = {
      userId: `User${Math.floor(Math.random() * 10000)}`,  // Random UserId generation
      name: ['Jane Doe', 'John Sarha', 'Sarah Lee', 'David Smith', 'Mary Johnson', 'Michael Brown'][Math.floor(Math.random() * 6)],
      email: `user${Math.floor(Math.random() * 10000)}@example.com`,  // Random email generation
      rewards: Math.floor(Math.random() * 5000),  // Random rewards
      status: Math.random() > 0.5 ? 'Active' : 'Inactive',
      id: data.length + 1,
    };

    setData([...data, newUser]);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <div className="text-4xl md:text-5xl font-semibold text-[#645200]">User</div>
        <div
          onClick={handleAddUser}
          className="px-6 py-3 font-semibold bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-white text-xl rounded cursor-pointer hover:bg-gradient-to-b hover:from-[#E3B512] hover:to-[#FFE074] hover:border-[#786A08] transition-all duration-200 ease-in-out"
        >
          Add User
        </div>
      </div>

      <div className="overflow-x-auto rounded-[11px] shadow-md">
        <ReusableTable
          columns={columns}
          data={data}
          onEdit={handleEdit}
          onDelete={handleDelete}
          enablePagination={true}
          rowsPerPage={4}
          hasStatusColumn={true} // Show the Status column
        />
      </div>
    </div>
  );
};

export default Tab4;
