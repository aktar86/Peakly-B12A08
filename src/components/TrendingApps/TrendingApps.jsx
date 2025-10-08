import React from 'react';
import useAppsData from '../../Hooks/useAppData';
import AppCard from '../AppCard/AppCard';


const TrendingApps = () => {
    const appData = useAppsData()
    const {apps} = appData;

    console.log(apps);
    // console.log(loading);
    // console.log(error);

    return (
        <div className='py-10'>
            <h1 className=' text-center font-bold text-3xl text-[#001931]'>Trending Apps</h1>
            <p className='text-[#627382] text-center text-xl'>Explore All Trending Apps on the Market developed by us</p>

            <div className='px-5 md:px-25 lg:px-25 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>
                {
                    apps.map(app => <AppCard 
                    key={app.id}
                    app={app}
                    ></AppCard> )
                }
            </div>


        </div>
    );
};

export default TrendingApps;