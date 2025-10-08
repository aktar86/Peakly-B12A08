import React from 'react';
import { NavLink } from 'react-router';
import PlayStore from '../../assets/app.png'
import AppStore from '../../assets/app-store.png'
import Hero from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='px-10 mt-10 '>

            <h1 className='font-extrabold text-6xl text-center text-[#001931]'>We Build <br /> 
             <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
             <p className='text-center text-xl text-[#627382] mt-5 '>
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
             </p>

             {/* buttons */}
             <div className='space-x-5 text-center mt-5 flex justify-center'>
                
                <a href="https://play.google.com/store/apps?hl=en" target='blank'>
                    <button className='w-40 border-2 border-[#D2D2D2] py-2 px-3 flex items-center justify-center gap-2 cursor-pointer font-bold rounded-sm' > <span><img src={PlayStore} alt="Play Store Icon" /></span>Google Play</button>
                </a>

                <a href="https://www.apple.com/app-store/" target='blank'>
                    <button className='w-40 border-2 border-[#D2D2D2] py-2 px-3 flex items-center justify-center gap-2 cursor-pointer font-bold rounded-sm' > <span><img src={AppStore} alt="Play Store Icon" /></span>App Store</button>
                </a>
                
             </div>

             {/* img  */}
             <div className='flex justify-center items-center mt-5'>
                <img src={Hero} alt="Hero Banner Image" />
             </div>
        </div>
    );
};

export default Banner;