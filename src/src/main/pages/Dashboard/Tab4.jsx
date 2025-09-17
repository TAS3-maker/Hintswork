import React, { useState } from 'react';
import ReusableTable from './ReusableTable';
import AddSponsorModal from './AddSponsorModal';

const Tab4 = () => {
  const [data, setData] = useState([
    { sponsorId: 1, tier: 'Gold', websiteUrl: 'sponsor.com', associatedBrands: 'Brand A', status: 'Active', id: 1 },
    { sponsorId: 2, tier: 'Silver', websiteUrl: 'sponsor.com', associatedBrands: 'Brand B', status: 'Inactive', id: 2 },
    { sponsorId: 3, tier: 'Platinum', websiteUrl: 'sponsor.com', associatedBrands: 'Brand A, Brand B', status: 'Active', id: 3 },
    { sponsorId: 4, tier: 'Bronze', websiteUrl: 'sponsor.com', associatedBrands: 'Brand C', status: 'Inactive', id: 4 },
    { sponsorId: 5, tier: 'Gold', websiteUrl: 'sponsor.com', associatedBrands: 'Brand A, Brand C', status: 'Active', id: 5 },
    { sponsorId: 6, tier: 'Silver', websiteUrl: 'sponsor.com', associatedBrands: 'Brand B', status: 'Inactive', id: 6 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { header: 'Sponsor Id', accessor: 'sponsorId' },
    { header: 'Tier', accessor: 'tier' },
    { header: 'Website Url', accessor: 'websiteUrl' },
    { header: 'Associated Brand', accessor: 'associatedBrands' },
    { header: 'Status', accessor: 'status' },
  ];

  const handleEdit = (index) => {
    console.log('Edit clicked for index: ', index);
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
    console.log('Delete clicked for index: ', index);
  };

  const handleAddSponsorClick = () => {
    setIsModalOpen(true); 
  };

  const handleSaveSponsor = (newSponsor) => {
    const sponsorToAdd = {
      sponsorId: data.length + 1,
      tier: 'Gold',
      websiteUrl: newSponsor.sponsorWebsite,
      associatedBrands: newSponsor.selectedBrands,
      status: 'Active',
      id: data.length + 1,
    };
    setData([...data, sponsorToAdd]); 
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl md:text-3xl font-semibold text-[#645200]">List of Sponsors</div>
        <div
          onClick={handleAddSponsorClick}
          className="px-4 py-2 md:px-6 md:py-3 font-semibold bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-white text-[16px] md:text-xl rounded cursor-pointer hover:bg-gradient-to-b hover:from-[#E3B512] hover:to-[#FFE074] hover:border-[#786A08] transition-all duration-200 ease-in-out"
        >
          Add Sponsor
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

     
      <AddSponsorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveSponsor}
      />
    </div>
  );
};

export default Tab4;
