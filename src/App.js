import React from 'react';

import './stylesheets/App.scss';


// import Banner300x250 from './components/Banner300x250';
// import Banner300x600 from './components/Banner300x600';

import BSPS_26897 from './banners/26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250/BSPS_26897';
import NM_MINAJESTY_11155 from './banners/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600/NM_MINAJESTY_11155';
import NMTG_26903 from './banners/26903_NM_TRINI_GIRL_GWP_PR_Walgreens_300x250/NMTG_26903'

function App() {
    return (
        <div className="App">

        {/* 
            <Banner300x250 />
            <Banner300x600 />
        */}

            <BSPS_26897 />
            <NM_MINAJESTY_11155 />
            <NMTG_26903 />

        </div>
    );
}

export default App;
