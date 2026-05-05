import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4'])
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default AuthLayout;