import React, { useState } from 'react';
import './layout.css';
import Hamburger from 'hamburger-react';

const Header = () => {
  const navbarData = [
    {
      id: 1,
      name: 'File with experts',
      svg: '<svg aria-hidden="true" focusable="false" viewBox="0 0 20 20" class=" css-1c7h7t5" width="16px" height="16px" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.041 14.959L0 5.918 1.918 4 10 12.082 18.082 4 20 5.918l-9.041 9.04c-.53.53-1.388.53-1.918 0z"></path></svg>',
      subMenu: [],
    },
    {
      id: 2,
      name: 'File myself',
      svg: '<svg aria-hidden="true" focusable="false" viewBox="0 0 20 20" class=" css-1c7h7t5" width="16px" height="16px" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.041 14.959L0 5.918 1.918 4 10 12.082 18.082 4 20 5.918l-9.041 9.04c-.53.53-1.388.53-1.918 0z"></path></svg>',

      subMenu: [],
    },
    {
      id: 3,
      name: 'Tax situations',
      svg: '<svg aria-hidden="true" focusable="false" viewBox="0 0 20 20" class=" css-1c7h7t5" width="16px" height="16px" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.041 14.959L0 5.918 1.918 4 10 12.082 18.082 4 20 5.918l-9.041 9.04c-.53.53-1.388.53-1.918 0z"></path></svg>',

      subMenu: [],
    },
    {
      id: 4,
      name: 'Tools & resources',
      svg: '<svg aria-hidden="true" focusable="false" viewBox="0 0 20 20" class=" css-1c7h7t5" width="16px" height="16px" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.041 14.959L0 5.918 1.918 4 10 12.082 18.082 4 20 5.918l-9.041 9.04c-.53.53-1.388.53-1.918 0z"></path></svg>',

      subMenu: [],
    },
    {
      id: 5,
      name: 'Pricing',
    },
  ];
  return (
    <div
      className="fixed w-full z-40 left-0 top-0 border-b border-[#eceef1] bg-white "
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 4px 10px',
      }}
    >
      <div className="container mx-auto px-[24px]">
        <div className="flex justify-between">
          <div className="flex gap-[20px] items-center">
            <div className="logo py-[12px]">
              <img src="/assets/images/turbotax_logo_no_intuit.svg" alt="" />
            </div>
            <div className="menu-items hidden md:block">
              <ul className="list-none flex items-center p-0 m-0">
                {navbarData.map((item) => (
                  <li className="text-[14px] relative items-center flex gap-2 pb-[12px] pt-[24px] font-medium px-[12px] cursor-pointer transition-all text-black hover:text-[#037c8f]">
                    {item.name}
                    {!item.subMenu ? (
                      ''
                    ) : (
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 20 20"
                        class=" css-1c7h7t5"
                        width="10px"
                        height="10px"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.041 14.959L0 5.918 1.918 4 10 12.082 18.082 4 20 5.918l-9.041 9.04c-.53.53-1.388.53-1.918 0z"
                        ></path>
                      </svg>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="block md:hidden">
            <Hamburger size={20} color="#000" />
          </div>
          <div className=" gap-[20px] items-center hidden md:flex">
            <div className="flex items-center gap-2 rounded-[6px] hover:bg-[#d52b1e33] transition-all">
              <img src="/assets/images/svgexport-17.svg" alt="" />
              <p className="text-[14px] text-[#393a3d]">Fr</p>
            </div>
            <button className="rounded-[4px] px-[12px] py-[6px] text-[#037c8f] font-medium text-[16px] hover:bg-[#037e9126] transition-all">
              Sign in
            </button>
            <button className="rounded-[4px] px-[12px] py-[6px] bg-[#037c8f] text-white font-medium text-[16px] hover:bg-[#0493a3] transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
