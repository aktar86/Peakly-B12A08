import React from 'react';
import Banner from '../components/Banner/Banner';
import Trust from '../components/Trust/Trust';
import TrendingApps from '../components/TrendingApps/TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trust></Trust>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;