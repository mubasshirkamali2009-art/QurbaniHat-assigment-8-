import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4'])
import Footer from '@/components/shared/Footer';

import Navbar from '@/components/shared/Navbar';

import React from 'react';


const Mainlayout = ({children}) => {
    return (
        <div>
           
            <Navbar/>
             
            {children}
            <Footer/>
        </div>
    );
};

export default Mainlayout;