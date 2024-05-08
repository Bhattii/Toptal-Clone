import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/img/logo.png';
import { useState } from 'react';

export function Header() {
  const [hover, setHover] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleDropdown = () => {
    setHover(!hover);
  };
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAnchorClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/*-----------------------  Header Side Bar ---------------- */}
      <div
        className={`fixed z-50 top-[66px] left-0 h-screen bg-gray-200 ${
          isSidebarOpen ? 'w-64' : 'w-0'
        } transition-all duration-300 overflow-hidden`}
      >
        {/* Sidebar content */}
        <div className='flex flex-col '>
          <button
            onClick={handleSidebarToggle}
            className='text-2xl absolute right-1'
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <a
            href='#'
            className='py-2 px-4 my-2 hover:text-blue-500'
            onClick={() => handleAnchorClick('Top 3%')}
          >
            Top 3%
          </a>

          <a href='#' className=' hover:text-blue-500'>
            <button
              className='px-3 hover:border-b-2'
              onMouseEnter={handleDropdown}
              onMouseLeave={handleDropdown}
            >
              <div
                key={2}
                className={`py-5 ${
                  activeIndex !== null && activeIndex !== 2 ? 'opacity-50' : ''
                }`}
                onMouseEnter={() => setActiveIndex(2)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                Hire Talent
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className={`size-2 mx-1 ${hover ? 'rotate-180' : 'rotate-0'}`}
                />
              </div>

              <div
                className={`shadow-custom absolute flex-col left-0 z-1 bg-bgGray ${
                  hover ? 'flex' : 'hidden'
                }`}
              >
                <div className='flex flex-col items-start bg-white'>
                  <a
                    href=''
                    className=' px-4 py-3 hover:text-blue-700'
                    onClick={() => handleAnchorClick('Anchor 2')}
                  >
                    Developers
                  </a>
                  <a
                    href=''
                    className='  px-4 py-3 hover:text-blue-700'
                    onClick={() => handleAnchorClick('Anchor 2')}
                  >
                    Designers
                  </a>
                  <a
                    href=''
                    className=' whitespace-nowrap px-4 py-3 hover:text-blue-700'
                    onClick={() => handleAnchorClick('Anchor 2')}
                  >
                    Marketing Experts
                  </a>
                  <a
                    href=''
                    className='whitespace-nowrap px-4 py-3 hover:text-blue-700 '
                    onClick={() => handleAnchorClick('Anchor 2')}
                  >
                    Product Managers
                  </a>
                  <a
                    href=''
                    className='whitespace-nowrap px-4 py-3 hover:text-blue-700 '
                    onClick={() => handleAnchorClick('Anchor 2')}
                  >
                    Project Managers
                  </a>
                  <a
                    href=''
                    className='whitespace-nowrap px-4 py-3 hover:text-blue-700 '
                    onClick={() => handleAnchorClick('Anchor 2')}
                  >
                    Finance Experts
                  </a>
                </div>
              </div>
            </button>
          </a>

          <a
            href='#'
            className='py-2 px-4 my-2 hover:text-blue-500 '
            onClick={() => handleAnchorClick('Clients')}
          >
            Clients
          </a>
          <a
            href='#'
            className='py-2 px-4 my-2 hover:text-blue-500 '
            onClick={() => handleAnchorClick('Blogs')}
          >
            Blogs{' '}
          </a>
          <a
            href='#'
            className='py-2 px-4 my-2 hover:text-blue-500 '
            onClick={() => handleAnchorClick('About')}
          >
            About
          </a>
          <a
            href='#'
            className='py-2 px-4 my-2 hover:text-blue-500 '
            onClick={() => handleAnchorClick('Anchor 3')}
          >
            Why
          </a>
        </div>
      </div>

      {/* ------------------------- Header ---------------------------- */}

      <div className=' bg-bgGray fixed z-50 w-full'>
        <div className='mx-[5%] flex items-center justify-between 2xl:justify-center'>
          <FontAwesomeIcon
            icon={faBars}
            onClick={handleSidebarToggle}
            className='px-3 py-5 size-6 mr-2 md:mr-2 sm:block md:block mdx:block lg:hidden  xl:hidden 2xl:hidden'
          />
          <div className=' font-small flex items-center justify-between sm:justify-between'>
            <img
              src={logo}
              className='py-5 smaller:mr-0'
              alt='logo'
              width='110px'
            />

            <nav className=' hidden sm:hidden md:hidden mdx:hidden lg:block xl:block 2xl:block 2xl:mr-28'>
              <div id='nav-links' className=' mx-3'>
                <a
                  key={1}
                  href=''
                  className={`py-5 mx-3 hover:border-b-2 hover:border-blue-700 ${
                    activeIndex !== null && activeIndex !== 1
                      ? 'opacity-50'
                      : ''
                  }`}
                  onMouseEnter={() => setActiveIndex(1)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  Top 3%
                </a>

                <button
                  className='mx-3 py-5  relative '
                  onMouseEnter={handleDropdown}
                  onMouseLeave={handleDropdown}
                >
                  <div
                    key={2}
                    className={` ${
                      activeIndex !== null && activeIndex !== 2
                        ? 'opacity-50'
                        : ''
                    }`}
                    onMouseEnter={() => setActiveIndex(2)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    Hire Talent
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className={`size-2 mx-1 ${
                        hover ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                    <div
                      className={`shadow-custom absolute bg-bgGray mt-5 flex flex-col items-start justify-normal ${
                        hover ? 'flex' : 'hidden'
                      }`}
                    >
                      <a href='' className='px-4 py-3 hover:text-blue-700'>
                        Developers
                      </a>

                      <a href='' className='px-4 py-3 hover:text-blue-700'>
                        Designers
                      </a>

                      <a
                        href=''
                        className='px-4 py-3 hover:text-blue-700 whitespace-nowrap'
                      >
                        Marketing Experts
                      </a>

                      <a
                        href=''
                        className=' px-4 py-3 hover:text-blue-700 whitespace-nowrap'
                      >
                        Product Managers
                      </a>

                      <a
                        href=''
                        className='whitespace-nowrap px-4 py-3 hover:text-blue-700 '
                      >
                        Project Managers
                      </a>

                      <a
                        href=''
                        className='whitespace-nowrap px-4 py-3 hover:text-blue-700 '
                      >
                        Finance Experts
                      </a>
                    </div>
                  </div>
                </button>

                <a
                  key={3}
                  href=''
                  className={` mx-3 py-5 hover:border-b-2 hover:border-blue-700 ${
                    activeIndex !== null && activeIndex !== 3
                      ? 'opacity-50'
                      : ''
                  }`}
                  onMouseEnter={() => setActiveIndex(3)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  Why
                </a>
                <a
                  key={4}
                  href=''
                  className={`mx-3 py-5 hover:border-b-2 hover:border-blue-700 ${
                    activeIndex !== null && activeIndex !== 4
                      ? 'opacity-50'
                      : ''
                  }`}
                  onMouseEnter={() => setActiveIndex(4)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  Clients
                </a>
                <a
                  key={5}
                  href=''
                  className={`mx-3  py-5 hover:border-b-2 hover:border-blue-700 ${
                    activeIndex !== null && activeIndex !== 5
                      ? 'opacity-50'
                      : ''
                  }`}
                  onMouseEnter={() => setActiveIndex(5)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  Blog
                </a>
                <a
                  key={6}
                  href=''
                  className={`mx-3 py-5 hover:border-b-2 hover:border-blue-700 ${
                    activeIndex !== null && activeIndex !== 6
                      ? 'opacity-50'
                      : ''
                  }`}
                  onMouseEnter={() => setActiveIndex(6)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  About
                </a>
              </div>
            </nav>
          </div>

          <div className='hidden sm:hidden md:hidden mdx:hidden lg:block 2xl:block'>
            <a href='' className='py-5 hover:text-blue-500'>
              Apply as a Freelance
            </a>

            <span className='px-3 py-3'>
              <a
                href=''
                className='bg-green-400 py-2 px-4 rounded-md text-white hover:bg-green-300'
              >
                Hire Top Talent
              </a>
            </span>

            <a href='' className='px-3 py-5 hover:text-blue-500'>
              Log In
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
