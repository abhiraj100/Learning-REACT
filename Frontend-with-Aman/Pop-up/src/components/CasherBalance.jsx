// CasherBalance.jsx

import React, { useState } from 'react';

const CasherBalance = () => {
  const [isBuyChipsModalOpen, setBuyChipsModalOpen] = useState(false);
  const [isCashoutModalOpen, setCashoutModalOpen] = useState(false);

  const handleOpenBuyChipsModal = () => {
    setBuyChipsModalOpen(true);
  };

  const handleCloseBuyChipsModal = () => {
    setBuyChipsModalOpen(false);
  };

  const handleOpenCashoutModal = () => {
    setCashoutModalOpen(true);
  };

  const handleCloseCashoutModal = () => {
    setCashoutModalOpen(false);
  };

  const handleConfirmPurchase = () => {
    console.log('Chips purchased!');
    handleCloseBuyChipsModal();
  };

  const handleConfirmCashout = () => {
    console.log('Cashout confirmed!');
    handleCloseCashoutModal();
  };

  return (
    <div className="mt-6">
      <div className="w-full lg:w-[803px] rounded-md h-10 p-6 text-center bg-[#1D1D1D] flex justify-between items-center">
        <p className="text-[13px] lg:text-[15px]">CRYPTO</p>
        <p className="text-[13px] lg:text-[15px]">100.99 ICP</p>
      </div>
      <div className="w-full lg:w-[803px] rounded-md mt-4 h-10 p-6 text-center bg-[#1D1D1D] flex justify-between items-center">
        <p className="text-[13px] lg:text-[15px]">CHIPS</p>
        <p className="text-[13px] lg:text-[15px]">500.82 CHIPS</p>
      </div>
      <div className="flex lg:justify-end  lg:w-[803px] md:justify-end justify-between pr-[20px] lg:pr-0 mt-6 space-x-2">
        <button
          onClick={handleOpenBuyChipsModal}
          className="border flex items-center justify-center border-[rgb(52,170,210)] text-[13px] text-[#34AAD2] hover:text-black hover:bg-[#34AAD2] font-bold p-2 rounded-[5px] shadow w-[90px] h-[30px] transition-all duration-200 hover:border-2 hover:border-[#34AAD2] ml-5 lg:ml-0"
        >
          BUY CHIPS
        </button>
        <button
          onClick={handleOpenCashoutModal}
          className="border flex items-center justify-center border-[rgb(52,170,210)] text-[13px] text-[#34AAD2] p-2 rounded-[5px] hover:text-black hover:bg-[#34AAD2] font-bold shadow w-[90px] h-[30px] transition-all duration-200 hover:border-2 hover:border-[#34AAD2] mr-[-20px] lg:mr-0"
        >
          CASH OUT
        </button>
      </div>

      {isBuyChipsModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className=" w-[302px] h-[275px] lg:w-[527px] rounded-2xl flex flex-col justify-center items-center lg:h-[360px] bg-[#1D1D1D] relative">
            <div className="flex justify-between items-center w-full px-4">
              <h1 className="text-md font-semibold flex-grow text-center tracking-wide lg:text-[22px]">
                BUY CHIPS
              </h1>
              <button
                onClick={handleCloseBuyChipsModal}
                className="text-[#34AAD2] bg-black hover:text-[#34AAD2] w-[25px] h-[25px] rounded-[5.5px] border border-[#34AAD2] transition duration-200"
                aria-label="Close"
              >
                &times; {/ Close icon /}
              </button>
            </div>

            <div className="bg-gradient-to-r mt-2 flex flex-col items-center justify-center bg-black p-4 rounded-lg shadow-lg  lg:w-[500px] lg:h-[288px] h-[224px] w-[285px]">
              <div className="flex flex-col">
                <p className="text-left font-medium text-gray-200 text-[14px] mt-2 text-[12px]">
                  AMOUNT TO BUY
                </p>
                <div className="relative lg:mt-2">
                  <input
                    type="text"
                    className="p-2 lg:h-[42px] lg:w-[460px] w-[262px] h-[38px] bg-[#1D1D1D] rounded-md text-white pr-24" // Added pr-24 for right padding
                    placeholder="100$"
                  />
                  <span className="absolute font-medium right-4 top-2 text-gray-200 lg:text-[14px] text-[12px]">
                    CHIP
                  </span>{' '}
                  {/ Fixed placeholder /}
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-left text-gray-200 text-[14px] mt-2">COST</p>
                <div className="relative lg:mt-2">
                  <input
                    type="text"
                    className="p-2 lg:h-[42px] lg:w-[460px] w-[262px] h-[38px] bg-[#1D1D1D] rounded-md text-white pr-24" // Added pr-24 for right padding
                    placeholder="500"
                  />
                  <span className="absolute right-4 top-2 text-gray-200 text-[14px]">
                    ICP
                  </span>{' '}
                  {/ Fixed placeholder /}
                </div>
              </div>
              <div className="flex justify-between gap-10 mt-6">
                <button
                  onClick={handleConfirmPurchase}
                  className="border flex items-center justify-center border-[rgb(52,170,210)] text-[13px] text-[#34AAD2] p-2 rounded-[5px] hover:text-black hover:bg-[#34AAD2] font-bold shadow w-[90px] h-[30px] transition-all duration-200 hover:border-2 hover:border-[#34AAD2]"
                >
                  BUY CHIPS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isCashoutModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="lg:w-[527px] w-[302px] h-[275px] rounded-2xl flex flex-col justify-center items-center lg:h-[360px] bg-[#1D1D1D] relative">
            <div className="flex justify-between items-center w-full px-4">
              <h1 className="text-md  font-bold flex-grow text-center tracking-wide  lg:text-[22px]">
                CASH OUT
              </h1>
              <button
                onClick={handleCloseCashoutModal}
                className="text-[#34AAD2] bg-black hover:text-[#34AAD2] w-[25px] h-[25px] rounded-[5.5px] border border-[#34AAD2] transition duration-200"
                aria-label="Close"
              >
                &times; {/ Close icon /}
              </button>
            </div>

            <div className="bg-gradient-to-r mt-2 flex flex-col items-center justify-center bg-black p-4 rounded-lg shadow-lg lg:w-[500px] lg:h-[288px] h-[224px] w-[285px]">
              <div className="flex flex-col">
                <p className="text-left font-medium text-gray-200 lg:text-[14px] mt-2 text-[12px]">
                  AMOUNT TO CASH OUT:
                </p>
                <div className="relative lg:mt-2">
                  <input
                    type="text"
                    className="p-2 lg:h-[42px] lg:w-[460px] w-[262px] h-[38px] bg-[#1D1D1D] rounded-md text-white pr-24" // Added pr-24 for right padding
                    placeholder="100$"
                  />
                  <span className="absolute right-4 top-2 text-gray-200 text-[14px]">
                    CHIPS
                  </span>{' '}
                  {/ Fixed placeholder /}
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-left font-medium text-gray-200 lg:text-[14px] mt-2 text-[12px]">
                  RECIEVE:
                </p>
                <div className="relative lg:mt-2">
                  <input
                    type="text"
                    className="p-2 lg:h-[42px] lg:w-[460px] w-[262px] h-[38px] bg-[#1D1D1D] rounded-md text-white pr-24" // Added pr-24 for right padding
                    placeholder="100$"
                  />
                  <span className="absolute right-4 top-2 text-gray-200 text-[14px]">
                    ICP
                  </span>{' '}
                  {/ Fixed placeholder /}
                </div>
              </div>
              <div className="flex justify-between gap-10 mt-6">
                <button
                  onClick={handleConfirmCashout}
                  className="border flex items-center justify-center border-[rgb(52,170,210)] text-[13px] text-[#34AAD2]  p-2 hover:text-black hover:bg-[#34AAD2] font-bold rounded-[5px] shadow w-[90px] h-[30px] transition-all duration-200 hover:border-2 hover:border-[#34AAD2]"
                >
                  CASH OUT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CasherBalance;