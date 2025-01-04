import React from 'react';
import Banner from './Banner';
import Motion from './Motion';
import LatestItems from './LatestItems';

const Home = () => {
    return (
        <div>
            <Banner />
            <LatestItems />
            <Motion />
        </div>
    );
};

export default Home;