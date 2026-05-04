"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { FaHome, FaPaw, FaClipboardList, FaUser, FaDoorOpen, FaChevronDown, FaBars } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { authClient } from "@/lib/auth-client"
import { LuLogIn } from "react-icons/lu";
import {Avatar, Button} from "@heroui/react";
import { MdLogout } from "react-icons/md";



const Navbar = () => {
  
const userData = authClient.useSession();
const user = userData.data?.user;
  console.log(user ,"user")
 const handleSingOut =async() =>await authClient.signOut()

 const pathname = usePathname();
  const navLinkClass = (href) => {
    const isActive = pathname === href;
    return `btn btn-ghost btn-sm font-medium gap-2 transition-colors
      ${isActive
        ? "text-[#f5e6c0] bg-white/10 border-b-2 border-[#c8a03a]"
        : "text-[#c5d9c8] hover:text-[#f5e6c0] hover:bg-white/10"
      }`;
  };

  const mobileNavLinkClass = (href) => {
    const isActive = pathname === href;
    return `flex items-center gap-2 transition-colors
      ${isActive
        ? "text-[#c8a03a] bg-white/10 font-semibold"
        : "text-[#c5d9c8]"
      }`;
  };

  return (
    <div className="navbar bg-[#1a3c2e] border-b border-[#2d5c43] px-4 md:px-8 min-h-[64px]">

      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#c8a03a] flex items-center justify-center shrink-0">
            <FaPaw className="text-[#1a3c2e] text-base sm:text-lg" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-[#f5e6c0] text-base sm:text-lg font-bold tracking-wide">
              QurbaniHat
            </span>
            <span className="text-[#8fbc9a] text-[9px] sm:text-[10px] uppercase tracking-widest font-medium mt-0.5">
              Livestock Booking
            </span>
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex gap-1">
        <Link href="/" className={navLinkClass("/")}>
          <FaHome className="text-sm" /> Home
        </Link>
        <Link href="/animals" className={navLinkClass("/animals")}>
          <FaPaw className="text-sm" /> All Animals
        </Link>
      </div>

      <div className="navbar-end gap-1 sm:gap-2">

       { !user && <div className='hidden md:flex lg:flex space-x-6 '>
  <Link className='btn btn-warning text-black md:w-30 lg:w-30' href="/login">
   <LuLogIn /> Login
  </Link>
  <Link className='btn btn-base text-black md:w-30 lg:w-30' href="/register">
  <GiArchiveRegister />  Register
  </Link>
</div>}

{
  user && ( 
   <> <Link href="/my-profile">
  <div className='flex items-center gap-5 bg-white/5 rounded-2xl px-3 py-1 backdrop-blur-lg border border-white/20'>
    <h1 className='text-warning text-xl hidden sm:hidden md:block'>My Profile</h1>
    <Avatar>
      <Avatar.Image alt="user img" src={user?.image} referrerPolicy='no-referrer' />
      <Avatar.Fallback>{user?.name?.slice(0, 2).toUpperCase()}</Avatar.Fallback>
    </Avatar>
  </div>
</Link>

<Button onClick={handleSingOut } className='hidden md:flex' variant='danger'><MdLogout /> Sign Out</Button>
 </> )
}
        
        <div className="dropdown dropdown-end lg:hidden ml-0.5 sm:ml-1">
          <label tabIndex={0} className="btn btn-ghost btn-sm text-[#c5d9c8]">
            <FaBars className="text-base" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-[#1e4534] border border-[#2d5c43] rounded-xl shadow-xl z-50 mt-2 w-44 p-1 text-sm"
          >
            <li >
              <Link href="/" className={mobileNavLinkClass("/")}>
                <FaHome /> Home
              </Link>
            </li>
             
     { !user && ( <> <li>
            <Link className=' text-green-500 sm:w-20 md:w-30 lg:w-30' href="/login">
         <LuLogIn /> Login</Link>
        </li> 
          <li>
            <Link className=' text-white sm:w-20 md:w-30 lg:w-30' href="/register">
       <GiArchiveRegister />   Register</Link>
          </li> </> )}

     { user && ( <li className='md:hidden'>
  <button onClick={handleSingOut } className='text-red-500' href="/login">
    <MdLogout /> Sign Out
  </button>
</li>
           ) }
        
            <li>
              <Link href="/animals" className={mobileNavLinkClass("/animals")}>
                <FaPaw /> All Animals
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;