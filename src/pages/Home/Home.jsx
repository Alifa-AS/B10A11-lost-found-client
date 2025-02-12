import React from 'react';
import Banner from './Banner';
import Motion from './Motion';
import LatestItems from './LatestItems';
import ItemsCounter from './Items Counter/ItemsCounter';

const Home = () => {
    return (
        <div>
            <Banner />
            <LatestItems />
            <Motion />
            <ItemsCounter />
        </div>
    );
};

export default Home;