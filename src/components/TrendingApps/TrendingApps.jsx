import React from 'react';
import useAppsData from '../../Hooks/useAppData';
import AppCard from '../AppCard/AppCard';
import { Link } from 'react-router';


const TrendingApps = () => {
    const appData = useAppsData()
    const {apps} = appData;
    const trim = apps.slice(0, 8)

    return (
        <div className='py-10'>
            <h1 className=' text-center font-bold text-3xl text-[#001931]'>Trending Apps</h1>
            <p className='text-[#627382] text-center text-xl'>Explore All Trending Apps on the Market developed by us</p>

            <div className='px-5 md:px-25 lg:px-25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                {
                    trim.map(app => <AppCard 
                    key={app.id}
                    app={app}
                    ></AppCard> )
                }
            </div>
           <div className='text-center mt-10'>
             <Link to='/apps' className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-10 py-3 rounded-sm text-white font-bold '>Show All</Link>
           </div>


        </div>
    );
};

export default TrendingApps;