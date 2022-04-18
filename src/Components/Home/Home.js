import React from 'react';
import MyWorks from '../MyWorks/MyWorks';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div style={{ minHeight: "80vh" }}>
            <Banner></Banner>
            <Services></Services>
            <MyWorks></MyWorks>
        </div>
    );
};

export default Home;