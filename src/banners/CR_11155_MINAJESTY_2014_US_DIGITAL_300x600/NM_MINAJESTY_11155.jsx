import React from 'react';
import { useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import { RoughEase } from 'gsap/EasePack';

import '../../stylesheets/banners.scss';
import './NM_MINAJESTY_11155.scss';


//#region ==================== ASSETS IMPORT ====================

import bg from './images/bg.jpg';
import model from './images/IMAGE.jpg';
import bottle from './images/bottle.png';
import cta from './images/btn_walgreens.svg';
// import vendorLogo from './images/logo_walgreens.svg'

// import LOGO_NM_Minajesty_hed from './images/ee4f80/LOGO_NM_Minajesty_hed.svg';
// import LOGO_NM_Minajesty_nicki from './images/ee4f80/LOGO_NM_Minajesty_nicki.svg';
// import LOGO_NM_Minajesty_minaj from './images/ee4f80/LOGO_NM_Minajesty_minaj.svg';
// import LOGO_NM_Minajesty_sultry from './images/ee4f80/LOGO_NM_Minajesty_sultry.svg';

import LOGO_NM_Minajesty_hed from './images/ffffff/LOGO_NM_Minajesty_hed.svg';
import LOGO_NM_Minajesty_nicki from './images/ffffff/LOGO_NM_Minajesty_nicki.svg';
import LOGO_NM_Minajesty_minaj from './images/ffffff/LOGO_NM_Minajesty_minaj.svg';
import LOGO_NM_Minajesty_sultry from './images/ffffff/LOGO_NM_Minajesty_sultry.svg';

//#endregion ==================== ASSETS IMPORT ====================


//#region ==================== REGISTER GSAP PLUGINS ====================

gsap.registerPlugin(RoughEase);

//#endregion ==================== REGISTER GSAP PLUGINS ====================


export default function NM_MINAJESTY_11155() {

    //#region ==================== ANIMATION DURATIONs ====================

    // var staggerDuration = 0.75;
    // var staggerDelay = 0.0625;

    // var animDuration00 = 0.125;
    // var animDuration01 = 0.5;
    var animDuration02 = 1;
    // var animDuration03 = 1.5;
    var animDuration04 = 2;
    var animDuration05 = 2.5;
    // var animDuration06 = 3;
    // var animDuration07 = 3.5;
    var animDuration08 = 4;
    // var animDuration09 = 4.5;
    // var animDuration10 = 5;

    //#endregion ==================== ANIMATION DURATIONs ====================


    //#region ==================== ASSETS Ref ====================

    const bgRef = useRef(null);
    const modelRef = useRef(null);
    const bottleRef = useRef(null);
    const ctaRef = useRef(null);
    // const vendorLogoRef = useRef(null);

    const LOGO_NM_MinajestyREF = useRef(null);

    const logo_NM_Minajesty_baseREF = useRef(null);

    const LOGO_NM_Minajesty_hedRef = useRef(null);
    const LOGO_NM_Minajesty_nickiRef = useRef(null);
    const LOGO_NM_Minajesty_minajRef = useRef(null);
    const LOGO_NM_Minajesty_sultryRef = useRef(null);

    const logo_NM_Minajesty_dsREF = useRef(null);

    const LOGO_NM_Minajesty_hed_dsRef = useRef(null);
    const LOGO_NM_Minajesty_nicki_dsRef = useRef(null);
    const LOGO_NM_Minajesty_minaj_dsRef = useRef(null);
    // const LOGO_NM_Minajesty_sultry_dsRef = useRef(null);

    // const bottleTagRef = useRef(null);

    //#endregion ==================== ASSETS Ref ====================


    useEffect(() => {

        const tl = gsap.timeline({ delay: 0 });

        tl

            //#region ==================== INITIALIZE OBJECTS ====================

            // -------------------- SET TRANSFORM ORIGiNS --------------------

            .set([LOGO_NM_Minajesty_sultryRef.current], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')


            // -------------------- FRAME01 --------------------

            // .set([bgRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([modelRef.current], { autoAlpha: 0 }, 'frame00')
            .set([LOGO_NM_MinajestyREF.current], { y: -40 }, 'frame00')
            // .set([LOGO_NM_MinajestyREF.current, bottleTagRef.current], { autoAlpha: 0.5 }, 'frame00')
            .set([bottleRef.current], { x: -90, y: 465 }, 'frame00')
            .set([LOGO_NM_Minajesty_sultryRef.current], { x: 25, y: 400, scale: 1.3 }, 'frame00')
            .set([ctaRef.current], { y: 395 }, 'frame00')

            //#endregion ==================== INITIALIZE OBJECTS ====================


            //#region ==================== FRAME 01 ====================

            .fromTo([modelRef.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration08 }, 'frame01 +=0')
            // .to([logo_NM_Minajesty_baseREF.current, logo_NM_Minajesty_dsREF.current], { autoAlpha: 1, ease: "rough({template: sine.out, strength: 1, points: 20, taper: 'none', randomize: false, clamp: false})", duration: 5 }, 'frame01 +=0')
            .fromTo([logo_NM_Minajesty_baseREF.current, logo_NM_Minajesty_dsREF.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: "rough({template: none.out, strength: 5, points: 30, taper: 'out', randomize: false, clamp: false})", duration: animDuration05 }, 'frame01 +=0')

            .fromTo([bottleRef.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration04 }, 'frame01 +=1.5')
            .fromTo([LOGO_NM_Minajesty_sultryRef.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration04 }, 'frame01 +=1.5625')

            .fromTo([ctaRef.current], { y:375, autoAlpha: 0 }, { y: 395, autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame01 +=3')

            //#endregion ==================== FRAME 01 ====================
        ;

    }, [animDuration02, animDuration04, animDuration05, animDuration08]);


    return (
        <div className='banner300x600 nm_minajesty_11155'>
            {/* <h1>NM_MINAJESTY_11155 banner300x600 Component</h1> */}

            <div className='bannerImg bg_300x600' ref={bgRef}><img src={bg} alt='bg' /></div>
            <div className='bannerImg image_300x600' ref={modelRef}><img src={model} alt='model' /></div>
            {/* <div className='bannerImg bottle_300x600' ref={bottleRef}><img src={bottle} alt='bottle' /></div> */}
            <div className='bottle_300x600' ref={bottleRef}><img src={bottle} alt='bottle' /></div>


        {/* #region -------------------- SVG FILTERS (logo_NM_Minajesty) -------------------- */}
            
            <svg className='logo_NM_Minajesty' version='1.1' baseProfile='full' id='logo_NM_MinajestyID' width='250' height='75' space='preserve' overflow='visible' ref={LOGO_NM_MinajestyREF}>

                <defs>

                    <filter xmlns='http://www.w3.org/2000/svg' x='-100%' y='-100%' width='300%' height='300%' id='dsFilter1'>

                        <feGaussianBlur in='SourceGraphic' stdDeviation='5' result='dsBlur' />
                        <feColorMatrix
                            in='SourceGraphic'
                            in2='dsBlur'
                            type='matrix'
                            values='0.933333333333333 0 0 0 0
                                    0 0.309803921568627 0 0 0
                                    0 0 0.309803921568627 0 0
                                    0 0 0 1 0' />

                        <feDropShadow dx='0' dy='0' floodColor='#ee4f80' floodOpacity='1' stdDeviation='10' result='dsDropShadow' />

                        {/* <feBlend in='SourceGraphic' in2='dsDropShadow' mode='multiply' /> */}

                        {/* <feOffset dx='0' dy='0' result='blurOffset01' /> */}

                        <feComponentTransfer>
                            <feFuncA type='linear' slope='3' />
                        </feComponentTransfer>

                    </filter>

                    <filter xmlns='http://www.w3.org/2000/svg' x='-100%' y='-100%' width='300%' height='300%' id='dsFilter2'>

                        <feDropShadow dx='0' dy='0' floodColor='#ffffff' floodOpacity='1' stdDeviation='0.0625' />
                        <feOffset dx='0' dy='0' result='blurOffset01' />
                        <feComponentTransfer>
                            <feFuncA type='linear' slope='5' />
                        </feComponentTransfer>

                    </filter>

                    <filter xmlns='http://www.w3.org/2000/svg' x='-100%' y='-100%' width='300%' height='300%' id='colorFilter'>
                        <feColorMatrix
                            in='SourceGraphic'
                            type='matrix'
                            values='0.933333333333333 0 0 0 0
                                    0 0.309803921568627 0 0 0
                                    0 0 0.309803921568627 0 0
                                    0 0 0 1 0' />
                    </filter>

                </defs>

                {/* <g className='logo_NM_Minajesty_ds' ref={logo_NM_Minajesty_dsREF}> */}
                <g className='logo_NM_Minajesty_ds' ref={logo_NM_Minajesty_dsREF} filter='url(#dsFilter1)'>
                    <image href={LOGO_NM_Minajesty_hed} width='250' height='75' ref={LOGO_NM_Minajesty_hed_dsRef} />
                    <image href={LOGO_NM_Minajesty_nicki} width='250' height='75' ref={LOGO_NM_Minajesty_nicki_dsRef} />
                    <image href={LOGO_NM_Minajesty_minaj} width='250' height='75' ref={LOGO_NM_Minajesty_minaj_dsRef} />
                    {/* <image href={LOGO_NM_Minajesty_sultry} width='250' height='75' ref={LOGO_NM_Minajesty_sultry_dsRef} /> */}
                </g>

                <g className='logo_NM_Minajesty_base' ref={logo_NM_Minajesty_baseREF}>
                {/* <g className='logo_NM_Minajesty_base' ref={logo_NM_Minajesty_baseREF} filter='url(#colorFilter)'> */}
                    <image href={LOGO_NM_Minajesty_hed} width='250' height='75' ref={LOGO_NM_Minajesty_hedRef} />
                    <image href={LOGO_NM_Minajesty_nicki} width='250' height='75' ref={LOGO_NM_Minajesty_nickiRef} />
                    <image href={LOGO_NM_Minajesty_minaj} width='250' height='75' ref={LOGO_NM_Minajesty_minajRef} />
                    {/* <image href={LOGO_NM_Minajesty_sultry} width='250' height='75' ref={LOGO_NM_Minajesty_sultryRef} /> */}
                </g>

                {/* <g className='logo_NM_Minajesty_sultry' ref={LOGO_NM_Minajesty_sultryRef}> */}
                <g className='logo_NM_Minajesty_sultry' ref={LOGO_NM_Minajesty_sultryRef} filter='url(#dsFilter2)'>
                {/* <g className='logo_NM_Minajesty_sultry' ref={LOGO_NM_Minajesty_sultryRef} filter='url(#colorFilter)'> */}
                    <image href={LOGO_NM_Minajesty_sultry} width='250' height='75' />
                    {/* <image href={LOGO_NM_Minajesty_sultry} width='300' height='90' /> */}
                </g>

            </svg>
           
        {/* #endregion -------------------- SVG FILTERS (logo_NM_Minajesty) -------------------- */}


            <div className='cta' ref={ctaRef}><img src={cta} alt='cta_Walgreens' /></div>
            {/* <div className='vendorTag' ref={vendorLogoRef}><img src={vendorLogo} alt='vendorLogo_Walgreens' /></div> */}
        </div>
    );
}
