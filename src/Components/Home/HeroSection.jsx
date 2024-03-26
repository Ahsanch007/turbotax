import React from 'react';

export const HeroSection = () => {
  return (
    <div className="pt-[80px] pb-[40px] text-black bg-[#F4F5F8]">
      <div className="container mx-auto px-[24px]">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-4">
            <div className="">
              <h2 className="lg:text-[40px] md:leading-[52px] font-bold text-[#393a3d] text-[28px] leading-[44px] pb-[24px]">
                Switch to TurboTax <br /> and get 50% off Full Service!
              </h2>
              <p className="text-[20px] pb-[24px]">
                Make the switch from a non-TurboTax tax professional to get 50% off any Full Service product.
              </p>
              <span class="text-[14px] pb-[24px]">
                <div>
                  <p>
                    <i>This offer is valid through April 7, 2024.</i>
                    <a href="#" className="text-blue-500">
                      <i>See offer details</i>
                    </a>
                    <i>.</i>
                  </p>
                </div>
              </span>
              <div className="block mt-[40px]">
                <a class=" block font-medium text-white bg-[#393a3d]   py-[10px]  w-[240px] text-[20px]   hover:bg-[#2b2c2e]    rounded-[5px]">
                  <span class="flex  items-center justify-center">Switch to Full Service</span>
                </a>
              </div>
              <div className="block mt-[20px]">
                <a
                  class=" block font-medium text-[#393a3d] bg-white     py-[10px]  w-[240px] text-[20px]  hover:bg-[#393a3d1a]      rounded-[5px]"
                  style={{ border: '2px solid #393a3d' }}
                >
                  <span class="flex  items-center justify-center">File on your own</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <img src="/assets/images/-Desktop-_HP_Zone_A_-_Maria.webp" alt="" />
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="card">
              <div class="rounded-sm shadow-sm text-gray-400 bg-white p-5 text-left">
                <div className=" flex justify-center py-3">
                  <img src="/assets/images/intuit-logo-super-blue-a0061415.svg" alt="" />
                </div>
                <div className="flex justify-between items-center py-3">
                  <img src="/assets/images/turbotax-icon-and-text-67fb01c1.svg" alt="" />
                  <img src="/assets/images/creditkarma-icon-and-text-61c521b7.svg" alt="" />
                  <img src="/assets/images/quickbooks-icon-and-text-cacbccfe.svg" alt="" />
                </div>
                <div className="pt-2 pb-4 text-center border-b border-[#d4d7dc]">
                  <h2 className="font-semibold text-[#393a3d]">
                    Use your Intuit Account to sign in to <span class="">TurboTax</span>.
                  </h2>
                  <a href="" className="text-[#0077c5] text-[12px] ">
                    Learn more
                  </a>
                </div>
                <div className="py-3 flex flex-col">
                  <label for="ius-userid" class="UserId__Label-sc-1ghbw2x-1 jxDOOK text-[#6b6c72] mb-2">
                    Phone number, email or user ID
                  </label>
                  <input
                    aria-label="Email"
                    aria-required="true"
                    data-valid="valid"
                    id="ius-userid"
                    name="Email"
                    placeholder=""
                    required=""
                    type="email"
                    aria-invalid="false"
                    class="Input-input-0155835 border border-[#8d9096] rounded-[4px] bg-white h-[36px] px-3 focus:outline-[#0077c5]"
                  />
                </div>
                <div className="my-3">
                  <button className="bg-[#0077c5] text-white w-full h-[36px] text-[16px] rounded-[4px]  flex items-center justify-center gap-2 hover:bg-[#0e68a3]">
                    <img src="/assets/images/icon-whitelock-cc3627ae.svg" alt="" />
                    Sign In
                  </button>
                </div>
                <div className="my-4 text-center text-[12px] leading-[16px] text-[#6b6c72]">
                  By clicking Sign In, you accept the{' '}
                  <a className="text-[#0077c5]">
                    Terms of <br /> service
                  </a>
                  .
                </div>
                <div className="mt-4 flex gap-3 justify-center">
                  <div className="   font-normal leading-[16px] text-[#6b6c72]">New to Intuit?</div>
                  <a className="text-[#0077c5] text-[12px]">Create an account</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
