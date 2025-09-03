import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import ReusableTable from './ReusableTable';

const HintDetailsPage = ({
  title,
  onBack,
  tableData,
  onAddHint,
  onEditHint,
  onDeleteHint,
}) => {
  const columns = [
    
    {
      header: 'Brand',
      accessor: 'brand',
    },
    {
      header: 'Hint',
      accessor: 'hint',
    },
    {
      header: 'Sponsor',
      accessor: 'sponsor',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div onClick={onBack} className="text-[#786A08] hover:text-[#bca719]">
            <FaArrowLeft size={22} />
          </div>
          <h2 className="text-3xl font-semibold text-[#786A08]">{title}</h2>
        </div>

        <div
          onClick={onAddHint}
          className="px-6 py-3 font-semibold bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] text-xl rounded cursor-pointer hover:bg-gradient-to-b hover:from-[#E3B512] hover:to-[#FFE074] hover:border-[#786A08] transition-all duration-200 ease-in-out"
        >
          Create Hint
        </div>
      </div>

      <ReusableTable
        columns={columns}
        data={tableData}
        onEdit={onEditHint}
        onDelete={onDeleteHint}
        enablePagination={false}
        paginationThreshold={4}
        rowsPerPage={4}
        hasSerialNumberColumn={true}
      />
    </div>
  );
};

export default HintDetailsPage;
