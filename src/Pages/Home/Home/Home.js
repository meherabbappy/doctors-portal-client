import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ExpectionBanner from '../ExpectionBanner/ExpectionBanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ExpectionBanner></ExpectionBanner>
            <AppointmentBanner></AppointmentBanner>

        </div>
    );
};

export default Home;