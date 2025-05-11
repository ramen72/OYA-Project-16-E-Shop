import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import NavBar from '../common/NavBar';

const MasterLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <NavBar/>
            {
                children
            }
            <Footer/>
        </div>
    );
};

export default MasterLayout;