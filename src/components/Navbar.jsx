import React from 'react'
import { BsInstagram } from "react-icons/bs";
import {SlSocialVkontakte} from 'react-icons/sl'
export const Navbar = () => {
    return (
        <div className='bg-black/90 justify-around flex items-center gap-4 px-2 py-2'>
            <div>
                <img className=' h-[62px]' src="logo.png" alt="logo" />
            </div>
            <ul className='flex gap-10 text-[#B6D5E1] uppercase text-xl'>
                <li className='hover:text-[#e6f6fd] cursor-pointer'>
                    Home
                </li>
                <li className='hover:text-[#e6f6fd] cursor-pointer'>
                    Hobbies & interests
                </li>
                <li className='hover:text-[#e6f6fd] cursor-pointer'>
                    Random Facts
                </li>
                <li className='hover:text-[#e6f6fd] cursor-pointer'>
                    Skills
                </li>
                <li className='hover:text-[#e6f6fd] cursor-pointer'>
                    Contacts
                </li>
            </ul>
            <div className='flex items-center gap-3'>
                <BsInstagram className='text-white text-xl hover:text-fuchsia-400 cursor-pointer' />
                <SlSocialVkontakte className='text-white text-2xl cursor-pointer hover:text-blue-300'/>
            </div>
        </div>
    )
}
