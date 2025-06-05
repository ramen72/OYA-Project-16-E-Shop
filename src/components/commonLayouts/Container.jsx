import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[1520px] mx-auto  border-gray-300'>
            {
                children
            }
        </div>
    );
};

export default Container;