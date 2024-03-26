import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import './layout.css';

export const MobileMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarData = [
    {
      id: 1,
      name: 'File with experts',
      subMenu: [
        {
          id: 11,
          name: 'TurboTax ',
          name2: ' Full Service',
          img: '/assets/images/icon-difm.svg',
          live: '/assets/images/logo-live.svg',
          desc: 'A tax expert files your taxes',
        },

        {
          id: 12,
          name: 'TurboTax Assist & Review ',

          img: '/assets/images/icon-diwm.svg',
          desc: 'File your taxes with expert help',
        },

        {
          id: 13,
          name: 'TurboTax Self-Employed ',

          img: '/assets/images/icon-self-employed.svg',

          desc: 'Expert reviews your self-employed taxes, or does it for you',
        },
      ],
    },
    {
      id: 2,
      name: 'File myself',
      subMenu: [
        {
          id: 13,
          name: 'TurboTax Online ',

          img: '/assets/images/icon-tto.svg',

          desc: 'File your taxes by yourself',
        },

        {
          id: 14,
          name: 'TurboTax Download ',

          img: '/assets/images/icon-t4-import.svg',
          desc: 'File your taxes with desktop software',
        },

        {
          id: 15,
          name: 'TurboTax Self-Employed ',

          img: '/assets/images/icon-self-employed.svg',

          desc: 'File your own self-employed taxes online',
        },
      ],
    },
    {
      id: 3,
      name: 'Tax situations',
      subMenu: [
        {
          id: 16,
          name: 'For investors ',

          img: '/assets/images/icon-stocks-and-bonds.svg',

          desc: 'Accurately report investment tax, from stock sales to rental income',
        },

        {
          id: 17,
          name: 'For students',

          img: '/assets/images/icon-student.svg',
          desc: 'Claim credits and deductions for going to school',
        },

        {
          id: 18,
          name: 'For self-employed ',

          img: '/assets/images/icon-self-employed.svg',

          desc: 'File accurately and find deductions for your industry',
        },
        {
          id: 19,
          name: 'For new to Canada',

          img: '/assets/images/icon-ca-flag.svg',

          desc: 'We know Canadian taxes. We’ll get yours done right.',
        },
      ],
    },
    {
      id: 4,
      name: 'Tools & resources',
      subMenu: [
        {
          id: 19,
          name: 'Personal income tax calculator ',

          img: '/assets/images/icon-tax-calculator.svg',

          desc: 'Free Canadian income tax calculator to quickly estimate your federal and provincial taxes',
        },

        {
          id: 20,
          name: 'RRSP savings calculator ',

          img: '/assets/images/icon-rrsp-calculator.svg',
          desc: 'Estimate how much your RRSP will be worth at retirement',
        },

        {
          id: 21,
          name: 'Self-employed tax calculator ',

          img: '/assets/images/icon-se-calculator.svg',

          desc: 'Calculate your self-employment tax and maximize your tax savings by estimating your business expenses',
        },
        {
          id: 22,
          name: 'Learning hub',

          img: '/assets/images/icon-blog.svg',

          desc: 'See TurboTax news, updates, articles, tax guides, and more',
        },
        {
          id: 23,
          name: 'TurboTax support (FAQ)',

          img: '/assets/images/icon-question-mark.svg',

          desc: 'Find TurboTax help, how-to videos, and more',
        },
        {
          id: 24,
          name: 'TurboTax community',

          img: '/assets/images/icon-community.svg',

          desc: 'Discuss taxes and get answers from other TurboTax users',
        },
      ],
    },
    {
      id: 5,
      name: 'Pricing',
    },
  ];
  const handleSubMenuToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="block md:hidden" onClick={toggleMenu}>
        <Hamburger size={20} color="#000" />
      </div>
      <div
        className={`mobile-menu2 left-0 fixed z-50 bg-white w-full   h-[95vh] p-3 flex flex-col justify-between ${
          isMenuOpen ? 'open' : ''
        }`}
      >
        <div>
          <ul className="list-none items-center p-0 m-0">
            {navbarData.map((item, index) => (
              <li
                key={item.id}
                className="text-[14px] border-b border-[#eceef1] relative items-center  flex justify-between pb-[12px] pt-[24px] font-medium px-[12px] cursor-pointer transition-all text-black hover:text-[#037c8f]"
                onClick={() => handleSubMenuToggle(index)} // Changed to onClick
              >
                {item.name}
                {item.subMenu && (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 20 20"
                    className="css-1c7h7t5"
                    width="10px"
                    height="10px"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.041 14.959L0 5.918 1.918 4 10 12.082 18.082 4 20 5.918l-9.041 9.04c-.53.53-1.388.53-1.918 0z"
                    ></path>
                  </svg>
                )}
                {openIndex === index && item.subMenu && (
                  <div
                    className="submenu bg-white rounded-[6px] p-4 min-w-full absolute  z-50 transition-all top-[45px] left-0 mt-1"
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 7px 20px, rgba(0, 0, 0, 0.1) 0px 14px 40px' }}
                  >
                    {item.subMenu.map((sub) => (
                      <div className="mm-dropdown-item-wrapper css-r27krc flex p-2 gap-3 items-center transition-all hover:bg-[#ebf9ff]">
                        <img alt="" src={sub.img} width="40" height="40" className="css-1xrpoo7" />
                        <div className="css-1pysja1">
                          <p className="css-8tevtg flex gap-2 items-center text-[#393a3d] text-[16px] font-semibold">
                            {sub.name}
                            {!sub.live ? '' : <img src={sub.live} className="css-1gsj6m5 w-[20px] h-[16px]" />}
                            {sub.name2}
                          </p>
                          <p className="text-[#393a3d] text-[14px]">{sub.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 p-3  rounded-[6px] hover:bg-[#d52b1e33] transition-all">
            <img src="/assets/images/svgexport-17.svg" alt="" />
            <p className="text-[14px] text-[#393a3d]">Fr</p>
          </div>
        </div>
        <div className="pb-[40px]">
          <button className="rounded-[4px] border border-[#0077c5] w-full my-3 px-[12px] py-[6px] text-[#0077c5] font-medium text-[16px] hover:bg-[#037e9126] transition-all flex gap-2 justify-center items-center">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              class="undefined css-1a5m7n3"
              width="16px"
              height="16px"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 7.19c0-2.012 1.33-3.738 3.162-4.105 1.229-.247 2.426.045 3.371.82A3.985 3.985 0 0116 7.001v2h2v-2a5.984 5.984 0 00-2.199-4.643 6.03 6.03 0 00-5.031-1.234C8.006 1.677 6 4.228 6 7.19v1.812h2V7.19zM20 10H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V11a1 1 0 00-1-1z"
              ></path>
            </svg>
            Sign in
          </button>
          <button className="rounded-[4px] w-full px-[12px] py-[6px] bg-[#037c8f] text-white font-medium text-[16px] hover:bg-[#0493a3] transition-all">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};
