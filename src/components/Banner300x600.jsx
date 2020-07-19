import React from 'react';

import '../stylesheets/banners.scss';

import NM_MINAJESTY_11155 from '../banners/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600/NM_MINAJESTY_11155';


export default function Banner300x600() {
    return (

        // <div className='banner300x600'>
        //     <h1>Banner300x600 Component</h1>
        // </div>

        <div className='bannerContainer'>
            <NM_MINAJESTY_11155 />
        </div>

    );
}