import React from 'react';

import './stylesheets/App.scss';


// import Banner300x250 from './components/Banner300x250';
// import Banner300x600 from './components/Banner300x600';

import EAAR_18951 from './banners/CR_18951_ALWAYS_RED_DIGITAL_PLAN_1H15_300x600/EAAR_18951';
import NMPF_04852 from './banners/CR_4852_NMPF_US_Walmart_300x250/NMPF_04852';
import NMMN_11155 from './banners/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600/NMMN_11155';
import JCNR_07074 from './banners/CR_7074_JC_VNOIR_2013_AU_300x600/JCNR_07074';
import BSPS_26897 from './banners/26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250/BSPS_26897';
import NMTG_26903 from './banners/26903_NM_TRINI_GIRL_GWP_PR_Walgreens_300x250/NMTG_26903';
import JCVR_26963 from './banners/26963_JC_VIVA_ROSE_GWP_PR_Walgreens_300x250/JCVR_26963';

function App() {
    return (
        <div className="App">

        {/* 
            <Banner300x250 />
            <Banner300x600 />
        */}

            <EAAR_18951 />
            <NMPF_04852 />
            <NMMN_11155 />
            <JCNR_07074 />
            <BSPS_26897 />
            <NMTG_26903 />
            <JCVR_26963 />

        </div>
    );
}

export default App;
