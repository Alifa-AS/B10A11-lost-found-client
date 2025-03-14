import React from 'react';
import Banner from './Banner';
import Motion from './Motion';
import LatestItems from './LatestItems';
import ItemsCounter from './Items Counter/ItemsCounter';
import Faq from './Faq/Faq';

const Home = () => {
    return (
        <div>
            <Banner />
            <LatestItems />
            <Motion />
            <ItemsCounter />
            <Faq />
        </div>
    );
};

export default Home;