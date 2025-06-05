import React from 'react';
import Container from '../commonLayouts/Container'
import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import VisaIcon from '../../assets/icons/VisaIcon';
import MasterCardIcon from '../../assets/icons/MasterCardIcon';
import ApplePayIcon from '../../assets/icons/ApplePayIcon';
import PayPleIcon from '../../assets/icons/PayPleIcon';
import { FaPhone } from 'react-icons/fa';

const FooterBottom = () => {
    return (
        <>
            <div className="mt-[100px]">
                <Container>
                    <div className="flex justify-between border-b border-[#30303040] pb-20">
                        <div className="">
                            <Link to={"/"}>
                                <img src="images/logo.svg" alt="logo" />
                            </Link>
                                <ul className='mt-[158px] flex flex-col gap-y-3'>
                                    <li>
                                        <Link to="tel:11234567" className='relative pl-4'>
                                            <FaPhone className='absolute left-0 top-1/2 -translate-1/2 rotate-y-180'/>
                                            +15551234567
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="mailto:information@eshop.com" className='relative pl-4'>
                                            <IoIosMail className='absolute left-0 top-1/2 -translate-1/2'/>
                                            information@eshop.com
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://maps.app.goo.gl/2SjFb6hPT9c5pebh9" target='_blank' className='relative pl-4'>
                                            <IoLocationOutline className='absolute left-0 top-1/2 -translate-1/2'/>
                                            123 Main Street, Suite 105, Anytown USA
                                        </Link>
                                    </li>
                                </ul>
                            
                        </div>
                        <div className="w-[1000px] flex justify-between">
                            <div className="mr-[96px]">
                                <h4 className='font-["Poppins"] font-semibold  text-xl'>Links</h4>
                                <ul className='mt-6 flex flex-col gap-y-3'>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'>Products List</Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'>Order Tracking</Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'>Products Guide</Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'>Shopping Cart</Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'>Tech Blog</Link>
                                </ul>
                            </div>
                            <div className="mr-[96px]">
                                <h4 className='font-["Poppins"] font-semibold  text-xl'>Supports</h4>
                                <ul className='mt-6 flex flex-col gap-y-3'>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'>About Us</Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'>Privacy Policy</Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'>Return Policy</Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'>Help Centre</Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'>Store Locations</Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'>Careers</Link>
                                </ul>
                            </div>
                            <div className="mr-[80px]">
                                <h4 className='font-["Poppins"] font-semibold  text-xl'>Categories</h4>
                                <ul className='mt-6 flex flex-col gap-y-3'>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'> Computers & Tablets</Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'> Mobile Phones & Accessories</Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'> TV & Home Theater</Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'> Audio & Headphones</Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'> Cameras & Camcorders</Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'> Gaming Equipment</Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'> Home Appliances</Link>
                                </ul>
                            </div>
                            <div className="">
                                <h4 className='font-["Poppins"] font-semibold text-xl'>Payments</h4>
                                <div className="flex gap-x-8 mt-8">
                                    <Link to={"/"} className='transition-all duration-300 hover:scale-x-110'><VisaIcon/></Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:scale-x-110'><MasterCardIcon/></Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:scale-x-110'><ApplePayIcon/></Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:scale-x-110'><PayPleIcon/></Link>
                                </div>
                                <h4 className='font-["Poppins"] font-semibold text-xl mt-[73px]'>Follow Us</h4>
                                <ul className='mt-6 flex flex-col gap-y-3'>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'>Twitter</Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'>Instagram</Link>
                                    <Link to={"/"} className='transition-all duration-300 hover:text-[#FF624C]'>Facebook</Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-2 mb-20 text-base text-[#303030] font-['Montserrat'] font-normal">
                        <span>Copyright © 2023 E-Shop. All Rights Reserved. </span>
                        <div className="flex justify-end gap-x-6">
                            <Link to={"/"} >Privacy Policy</Link>
                            <Link to={"/"} className='relative before:content[""] before:w-[1px] before:h-[90%] before:bg-[#303030bf] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 after:content[""] after:w-[1px] after:h-[90%] after:bg-[#303030bf] after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2'>Terms & Condition</Link>
                            <Link to={"/"}>Sitemap</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default FooterBottom;