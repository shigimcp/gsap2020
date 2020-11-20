import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

// import { gsap } from 'gsap';

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
import BCBG_02342 from './banners/BCBG_MAXAZRIA_CR00002342_AU_Digital_Plan/BCBG_02342';
import BCBG_05500 from './banners/CR_5500_BCBG_BC_AU_Digital_Plan_2013/BCBG_05500';
import JBJA_10263 from './banners/CR_10263_J_by_JENNIFER_ANISTON_Kohls_300x250/JBJA_10263';
// import JBJA_10263 from './banners/CR_10263_J_by_JENNIFER_ANISTON_Kohls_300x250/JBJA_10263_simplified';

function App() {

    //#region -------------------- AVAILABLE GSAP BANNERS --------------------

    const banners = {
        EAAR_18951: EAAR_18951,
        NMPF_04852: NMPF_04852,
        NMMN_11155: NMMN_11155,
        JCNR_07074: JCNR_07074,
        BSPS_26897: BSPS_26897,
        NMTG_26903: NMTG_26903,
        JCVR_26963: JCVR_26963,
        BCBG_02342: BCBG_02342,
        BCBG_05500: BCBG_05500,
        JBJA_10263: JBJA_10263,
    };

    const bannerList = [
        'EAAR_18951',
        'NMPF_04852',
        'NMMN_11155',
        'JCNR_07074',
        'BSPS_26897',
        'NMTG_26903',
        'JCVR_26963',
        'BCBG_02342',
        'BCBG_05500',
        'JBJA_10263',
    ]

    //#endregion -------------------- AVAILABLE GSAP BANNERS --------------------



    //#region -------------------- ASSETS Ref --------------------

    const importContainerRef = useRef(null);
    // const importedContentRef = useRef(null);

    //#endregion -------------------- ASSETS Ref --------------------



    //#region ==================== useState ====================

    // const [bannerShow, setBannerShow] = useState();

    // const [bannerShow, setBannerShow] = useState(<EAAR_18951 />);
    // const [bannerShow, setBannerShow] = useState(<NMPF_04852 />);
    // const [bannerShow, setBannerShow] = useState(<NMMN_11155 />);
    const [bannerShow, setBannerShow] = useState(<JBJA_10263 />);

    //#endregion ==================== useState ====================



    //#region ==================== FUNCTION: handleClick(newBanner) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks - switch/case ====================

    function handleClick(newBanner) {

        console.log('');
        console.log('------------------------- GSAP 2020: handleClick(newBanner) -------------------------');

        console.log('newBanner = ' + newBanner);

        //#region - - - - - - - - - - - - - ASSIGN NEW BANNER - - - - - - - - - - - - -

        const thisBanner = React.createElement(banners[newBanner]);

        // console.log('');
        console.log('thisBanner = ' + thisBanner);

        setBannerShow(thisBanner);

        document.getElementById('importContainerID').key = banners[thisBanner];

        //#endregion - - - - - - - - - - - - - ASSIGN NEW BANNER - - - - - - - - - - - - -
    }

    //#endregion ==================== FUNCTION: handleClick(newBanner) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks - switch/case ====================


    return (
        <div className="App">
            <h1>GSAP 2020</h1>

            <div className='nav'>

                {bannerList.map((banner) =>
                    <div 
                        className='navItem' 
                        key={banner} 
                        onClick={() => handleClick(banner)}>
                            &nbsp;&nbsp;&nbsp;{banner}&nbsp;&nbsp;&nbsp;
                    </div>
                )}

            </div>

        {/* 
            <Banner300x250 />
            <Banner300x600 />


            <EAAR_18951 />
            <NMPF_04852 />
            <NMMN_11155 />
            <JCNR_07074 />
            <BSPS_26897 />
            <NMTG_26903 />
            <JCVR_26963 />
            <BCBG_02342 />
        */}

            <div className='importContainer' id='importContainerID' ref={importContainerRef}>
                {bannerShow}
            </div>

        </div>
    );
}

export default App;
