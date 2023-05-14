import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { SlSocialVkontakte } from 'react-icons/sl'

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
            <div className='flex items-center gap-5'>
                <a href="https://www.instagram.com" >
                    <BsInstagram className='text-white text-2xl hover:text-fuchsia-400 cursor-pointer' />
                </a>
                <a href="https://www.vk.com">
                    <SlSocialVkontakte className='text-white text-3xl cursor-pointer hover:text-blue-300' />
                </a>
            </div>
        </div>
    )
}
