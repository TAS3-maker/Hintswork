
import React, { useState, useEffect } from 'react';
import { RxCrossCircled } from "react-icons/rx";

const AddSponsorModal = ({ isOpen, onClose, onSave }) => {
  const [sponsorName, setSponsorName] = useState('');
  const [sponsorWebsite, setSponsorWebsite] = useState('');
  const [sponsorDescription, setSponsorDescription] = useState('');
  const [selectedBrands, setSelectedBrands] = useState('');

  useEffect(() => {
      if (isOpen) {
        setSponsorName('');
        setSponsorWebsite('');
        setSponsorDescription('');
        setSelectedBrands('');
      }
    }, [isOpen]);

  const handleSave = () => {
    const newSponsor = {
      sponsorName,
      sponsorWebsite,
      sponsorDescription,
      selectedBrands,
    };
    onSave(newSponsor);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-40 bg-[#fffbefa6] bg-opacity-30 flex justify-center items-center">
      <div className="bg-[#FFFAF4] w-full max-w-[690px] rounded-[14px] px-11 py-12 shadow-md relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-[#786A08]">Add Sponsors</h2>
          <div onClick={onClose} className="text-3xl font-bold text-[#786A08] cursor-pointer">
            <RxCrossCircled />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-semibold text-[18.35px] text-[#786A08] mb-1.5">Sponsor Name</label>
              <input
                type="text"
                className="w-full border border-[#786A08] bg-white rounded-[10px] p-2 mt-1"
                value={sponsorName}
                onChange={(e) => setSponsorName(e.target.value)}
              />
            </div>

            <div className="w-1/2">
              <label className="block font-semibold text-[18.35px] text-[#786A08] mb-1.5">Sponsor Website</label>
              <input
                type="text"
                className="w-full border border-[#786A08] bg-white rounded-[10px] p-2 mt-1"
                value={sponsorWebsite}
                onChange={(e) => setSponsorWebsite(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[18.35px] text-[#786A08] mb-1.5">Sponsor Description</label>
            <textarea
              className="w-full border border-[#786A08] bg-white rounded-[10px] p-2 mt-1"
              value={sponsorDescription}
              onChange={(e) => setSponsorDescription(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold text-[18.35px] text-[#786A08] mb-1.5">Select Brands</label>
            <input
              type="text" 
              className="w-full border border-[#786A08] bg-white rounded-[10px] p-2 mt-1"
              value={selectedBrands}
              onChange={(e) => setSelectedBrands(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <div
            onClick={handleSave}
            className="px-12 py-2 rounded-sm bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] text-[22.93px] font-bold cursor-pointer"
          >
            Save
          </div>
          <div
            onClick={onClose}
            className="px-12 py-2 rounded-sm bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] text-[22.93px] font-bold cursor-pointer"
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSponsorModal;
