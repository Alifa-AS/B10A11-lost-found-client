import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ItemDetails = () => {
    const {title} = useLoaderData();
    return (
        <div>
            <h2 className='text-2xl font-bold'>Title: {title}</h2>
        </div>
    );
};

export default ItemDetails;