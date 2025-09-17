import React, { useState } from 'react';
import ReusableTable from './ReusableTable';
import AddBrandModal from './AddBrandModal'; 

const Tab3 = () => {
  const [data, setData] = useState([
    { brandName: 'Brand 1', description: 'This is Brand 1', status: 'Active', id: 1 },
    { brandName: 'Brand 2', description: 'This is Brand 2', status: 'Inactive', id: 2 },
    { brandName: 'Brand 3', description: 'This is Brand 3', status: 'Active', id: 3 },
    { brandName: 'Brand 4', description: 'This is Brand 4', status: 'Inactive', id: 4 },
    { brandName: 'Brand 5', description: 'This is Brand 5', status: 'Active', id: 5 },
    { brandName: 'Brand 6', description: 'This is Brand 6', status: 'Inactive', id: 6 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false); 

  const columns = [
    { header: 'Brand Name', accessor: 'brandName' },
    { header: 'Description', accessor: 'description' },
    { header: 'Status', accessor: 'status' }, 
  ];

  const handleEdit = (index) => {
    console.log('Edit clicked for index: ', index);
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
    console.log('Delete clicked for index: ', index);
  };

  const handleAddBrand = () => {
    setIsModalOpen(true); 
  };

  const handleSaveBrand = (newBrand) => {
    const updatedBrand = {
      brandName: newBrand.brandName,
      description: newBrand.description,
      status: Math.random() > 0.5 ? 'Active' : 'Inactive',
      id: data.length + 1,
    };
    setData([...data, updatedBrand]);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl md:text-3xl font-semibold text-[#645200]">Brand</div>
        <div
          onClick={handleAddBrand}
          className="px-4 py-2 md:px-6 md:py-3 font-semibold bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-white text-[16px] md:text-xl rounded cursor-pointer hover:bg-gradient-to-b hover:from-[#E3B512] hover:to-[#FFE074] hover:border-[#786A08] transition-all duration-200 ease-in-out"
        >
          Add Brand
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
          hasStatusColumn={true} 
        />
      </div>

      
      <AddBrandModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveBrand}
      />
    </div>
  );
};

export default Tab3;
