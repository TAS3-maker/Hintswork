import React from 'react';
import avatarImage from '../assets/profile.png';
import Editicon from '../assets/edit.svg';

const Profile = () => {
  const adminInfo = {
    name: 'Hi Mike',
    email: 'mike123@gmail.com',
    avatar: avatarImage,
    phone: '+1 9873356789',
    firstName: 'Mike',
  };

  return (
<>

    <div className="profile-page p-6 w-full h-full overflow-y-auto mb-11">
      
      <h1 className="text-4xl md:text-5xl text-[#786A08] font-semibold mb-11">My Profile</h1>

      <div className="profile-info flex flex-col justify-center gap-4 items-center mb-8 w-full max-w-[480px] mx-auto rounded-[12px] border-2 border-[#FEDC63] bg-[#FFFBED] py-[59px]">
        <img
          src={adminInfo.avatar}
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
        <div>
          <p className="text-2xl text-[#6C5D00] font-semibold">{adminInfo.name}</p>
        </div>
      </div>

      <div className="personal-info w-full max-w-[1090px] mx-auto border-2 border-[#FEDC63] rounded-[13px] bg-[#FFFBED] pt-[48px] pl-[39px] pr-[30px] pb-[63px]">
        <div className="flex justify-between items-center mb-10">
          <p className="text-3xl text-[#786A08] font-semibold">My Personal Information</p>
          <div className="flex gap-2.5 h-[53px] items-center px-6 rounded-sm shadow-md bg-gradient-to-b from-[#FFE074] to-[#E3B512] cursor-pointer">
            <p className='font-bold text-[22.93px] text-[#786A08]'>Edit</p>
            <img className='size-6' src={Editicon} alt='editicon'/>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <div className="w-1/2 flex flex-col gap-7 ">
            <p className="text-3xl font-medium text-[#9B8F36]">First Name</p>
            <p className="text-3xl font-medium text-[#604E00]">{adminInfo.firstName}</p>
          </div>
        </div>

        
        <div className="flex gap-10 justify-start">
          <div className=" ">
            <p className="text-3xl text-[#9B8F36] font-medium mb-5">Email</p>
            <p className="text-3xl font-medium text-[#604E00]">{adminInfo.email}</p>
          </div>
          <div className="">
            <p className="text-3xl text-[#9B8F36] font-medium mb-5">Phone Number</p>
            <p className="text-3xl font-medium text-[#604E00]">{adminInfo.phone}</p>
          </div>
           
        </div>
      </div>
    </div>
</>
  );
};

export default Profile;
