import React from 'react';
import Banner from './Banner';
import Motion from './Motion';
import LatestItems from './LatestItems';
import ItemsCounter from './Items Counter/ItemsCounter';
import Faq from './Faq/Faq';
import Review from './Review/Review';
import Sponsor from './Sponsor/Sponsor';

const Home = () => {
    return (
        <div>
            <Banner />
            <LatestItems />
            <Motion />
            <ItemsCounter />
            <Faq />
            <Review />
            <Sponsor />
        </div>
    );
};

export default Home;