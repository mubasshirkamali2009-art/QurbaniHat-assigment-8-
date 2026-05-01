import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Hero';
import Navbar from '@/components/shared/Navbar';
import Animalcards from '@/components/shared/Feturecards';
import React from 'react';
import TopBreeds from '@/components/shared/Topbreeds';
import QurbaniTips from '@/components/shared/Tips';
import QurbaniTools from '@/components/shared/Qurbanitools';

const Mainlayout = ({children}) => {
    return (
        <div>
           
            <Navbar/>
             <Header/>
             <Animalcards/>
             <TopBreeds/>
             <QurbaniTools/>
             <QurbaniTips/>
            {children}
            <Footer/>
        </div>
    );
};

export default Mainlayout;