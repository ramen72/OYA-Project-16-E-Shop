import React from 'react';
import { Outlet } from 'react-router-dom';

const CommonLayout = () => {
    return (
        <>
            <h1>head</h1>
            <Outlet/>
            <h1>footer</h1>
        </>
    );
};

export default CommonLayout;