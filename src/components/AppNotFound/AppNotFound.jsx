import React from 'react';
import NotFoundImg from '../../assets/App-Error.png'
import { Link, useNavigate } from 'react-router';


const AppNotFound = () => {
    const navigate = useNavigate()

    return (
        <div className='col-span-4 flex flex-col justify-center items-center p-20'>
            <img className='w-64' src={NotFoundImg} alt="" />
            <h1 className='font-bold text-5xl mt-10'>OPPS!! APP NOT FOUND</h1>
            <p className='text-lg text-[#627382] '>The App you are requesting is not found on our system.  please try another apps</p>

            <Link onClick={() => navigate('/')}  className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-10 py-3 text-xl text-white font-bold mt-5'>
            Go Back!
            </Link>
        </div>
    );
};

export default AppNotFound;