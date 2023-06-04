import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Light from './icons/Light.svg';
import Image from 'next/image';
import { useTheme } from 'next-themes';
// import { Brightness6SharpIcon } from '@mui/icons-material/Brightness6Sharp';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className='absolute right-0'>
      <div className='p-[10px] flex justify-end items-center bg-white dark:bg-[#000927]'>
        <button
          className='mr-[10px] dark:bg-white'
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <Light className='w-[32px] h-[32px] bg-white fill-[#000927] dark:fill-white dark:bg-[#000927]' />
        </button>
        <Link
          className={` text-[#000] bg-[#FFEA7B] m-[10px] rounded-md py-[8px] px-[18px]`}
          href='/login'
        >
          Login
        </Link>
        <Link
          className=' text-[#000] bg-[#FFEA7B] m-[10px] rounded-md py-[8px] px-[18px]'
          href='/register'
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
