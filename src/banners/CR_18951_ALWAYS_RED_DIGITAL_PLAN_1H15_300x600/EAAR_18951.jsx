//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
// import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { useCallback } from 'react';

import { gsap } from 'gsap';
// import { CSSPlugin } from 'gsap/CSSPlugin';

import '../banners.scss';
import './EAAR_18951.scss';
import './fonts/fonts.css';


//#region -------------------- IMPORTS: ASSETS --------------------

// import CR_18951_ALWAYS_RED_DIGITAL_PLAN_1H15_300x600_retina from './images/CR_18951_ALWAYS_RED_DIGITAL_PLAN_1H15_300x600_retina.jpg';
// import CR_18951_ALWAYS_RED_DIGITAL_PLAN_1H15_300x600 from './images/CR_18951_ALWAYS_RED_DIGITAL_PLAN_1H15_300x600.jpg';

import bg from './images/bg.jpg';
import bg_lt from './images/bg_lt.jpg';
import bg_dk from './images/bg_dk.jpg';

import logo_RED_ea_w from './images/LOGO_RED_ea_w.svg';
import logo_RED_always_r from './images/LOGO_RED_always_r.svg';
import logo_RED_red_r from './images/LOGO_RED_red_r.svg';

import logo_RED_ds_k from './images/logo_red_ds_k.png';
import logo_RED_ds_r from './images/logo_red_ds_r.png';
import logo_RED_ds_w from './images/logo_red_ds_w.png';

import model from './images/image.jpg';

import bottle from './images/bottle.png';
import bottle_lt from './images/bottle_lt.png';
import flash01 from './images/flash01.jpg';

import cta from './images/cta_shop.svg';

//#endregion -------------------- IMPORTS: ASSETS --------------------


//#region -------------------- GSAP: REGISTER PLUGINS --------------------

// gsap.registerPlugin(CSSPlugin);

//#endregion -------------------- GSAP: REGISTER PLUGINS --------------------


//#endregion ==================== IMPORTS ====================






export default function EAAR_18951() {

    //#region ==================== ANIMATION DURATIONs ====================

    const staggerDuration = 0.75;
    const staggerDelay = 0.0625;

    // const animDuration00 = 0.125;
    const animDuration01 = 0.5;
    const animDuration02 = 1;
    const animDuration02_5 = 1.25;
    const animDuration03 = 1.5;
    const animDuration04 = 2;
    // const animDuration05 = 2.5;
    // const animDuration06 = 3;
    // const animDuration07 = 3.5;
    // const animDuration08 = 4;
    // const animDuration09 = 4.5;
    // const animDuration10 = 5;

    //#endregion ==================== ANIMATION DURATIONs ====================


    //#region ==================== ASSETS Ref ====================

    const bgRef = useRef(null);

    const bg_baseRef = useRef(null);
    const bg_ltRef = useRef(null);
    const bg_dkRef = useRef(null);

    const particleContainerRef = useRef(null);


    const logo_REDref = useRef(null);

    const logo_RED_baseRef = useRef(null);
    const logo_RED_dsRef = useRef(null);

    const logo_RED_ea_wRef = useRef(null);
    const logo_RED_always_rRef = useRef(null);
    const logo_RED_red_rRef = useRef(null);

    const logo_RED_ds_kRef = useRef(null);
    const logo_RED_ds_rRef = useRef(null);
    const logo_RED_ds_wRef = useRef(null);


    const modelRef = useRef(null);


    const bottleRef = useRef(null);

    const bottle_baseRef = useRef(null);
    const bottle_ltRef = useRef(null);
    // const flash01Ref = useRef(null);

    const copy01Ref = useRef(null);
    const copy02Ref = useRef(null);

    const ctaRef = useRef(null);

    //#endregion ==================== ASSETS Ref ====================



    //#region ==================== FUNCTIONS ====================

    //#region -------------------- FUNCTION: splitText(thisContainer, thisCopy) --------------------

    function splitText(thisContainer, thisCopy) {

        console.log('');
        console.log('------------------------- splitText(thisContainer, thisCopy) triggered! -------------------------');
        console.log('thisContainer.id = ' + thisContainer.id + '     thisCopy = ' + thisCopy);

        const thisCopyResponse = thisCopy.split('');
        console.log('thisCopyResponse.length = ' + thisCopyResponse.length + '     thisCopyResponse = ' + thisCopyResponse)

        for (let c = 0; c < thisCopyResponse.length; c++) {

            // console.log('thisCopyResponse[c] = "' + thisCopyResponse[c] + '"');

            const node = document.createElement('p');
            node.className = 'char01';

            if (thisCopyResponse[c] !== ' ') {
                node.innerHTML = thisCopyResponse[c];
                thisContainer.append(node);
            } else {
                console.log('This is a space!');
                node.innerHTML = '&nbsp;';
                thisContainer.append(node);
            }
        }
    }

    //#endregion -------------------- FUNCTION: randRange(min:Number, max:Number) - integers --------------------


    //#region -------------------- FUNCTION: randRange(min:Number, max:Number) - integers --------------------

    function randRange(min, max) {
        let thisIndex = min + Math.round(Math.random() * (max - min));
        //	console.log('thisIndex = ' + thisIndex);

        return thisIndex;
    }

    //#endregion -------------------- FUNCTION: randRange(min:Number, max:Number) - integers --------------------


    //#region -------------------- FUNCTION: randRange2(min:Number, max:Number) - real numbers --------------------

    function randRange2(min, max) {
        let thisIndex = min + Math.random() * (max - min);
        //	console.log('thisIndex = ' + thisIndex);

        return thisIndex;
    }

    //#endregion -------------------- FUNCTION: randRange2(min:Number, max:Number) - real numbers --------------------


    //#region -------------------- FUNCTION: nextPos(thisObj, thisX, thisY, thisScale) --------------------

    const nextPos = useCallback((thisObj, thisX, thisY, thisScale, thisAlpha) => {

        // console.log('');
        // console.log('------------------------- nextPos(thisObj, thisX, thisY, thisScale, thisAlpha) triggered! -------------------------');
        // console.log('thisObj: ' + thisObj + ', thisX: ' + thisX + ', thisY: ' + thisY + ', thisScale: ' + thisScale + ', thisAlpha: ' + thisAlpha);

        gsap.set(thisObj, { x: thisX, y: thisY, scale: thisScale, alpha: thisAlpha });

    }, []);

    //#endregion -------------------- FUNCTION: nextPos(thisObj, thisX, thisY, thisScale) --------------------


    //#region -------------------- FUNCTION: PARTICLES - addParticle(thisContainer), positionParticle(thisContainer), particleAnim(thisParticle) --------------------

    //#region - - - - - - - - - - - FUNCTION: particleAnim(thisParticle) - - - - - - - - - - -

    const particleAnim = useCallback((thisParticle) => {

        // console.log('');
        // console.log('------------------------- particleAnim(thisParticle) triggered! -------------------------');

        // console.log('thisParticle.id = ' + thisParticle.id);

        gsap.to([thisParticle], animDuration01, { autoAlpha: 1, repeat: 1, yoyo: true, ease: 'sine.inOut', delay: randRange2(0, 1.5) });

    }, []);

    //#endregion - - - - - - - - - - - FUNCTION: particleAnim(thisParticle) - - - - - - - - - - -


    //#region - - - - - - - - - - - FUNCTION: positionParticle(thisContainer) - - - - - - - - - - -

    const positionParticle = useCallback((thisContainer) => {

        // console.log('');
        // console.log('------------------------- positionParticle(thisContainer) triggered! -------------------------');

        // console.log('thisContainer.id = ' + thisContainer.id + '     numParticle = ' + numParticle);
        // console.log('thisContainer.offsetWidth = ' + thisContainer.offsetWidth + '     thisContainer.offsetHeight = ' + thisContainer.offsetHeight);

        // console.log('thisContainer.children[1] = ' + thisContainer.children[1]);

        // const displacementFactor = 1.5;

        for (let i = 0; i < thisContainer.children.length; i++) {

            // console.log('thisContainer.children[i].id = ' + thisContainer.children[i].id);

            const thisX = randRange(-thisContainer.offsetWidth * 1.5, thisContainer.offsetWidth * 0.5);
            const thisY = randRange(-thisContainer.offsetHeight * 0.5, thisContainer.offsetHeight * 1);
            // const thisX = randRange(-thisContainer.offsetWidth * displacementFactor, thisContainer.offsetWidth * displacementFactor);
            // const thisY = randRange(-thisContainer.offsetHeight * displacementFactor, thisContainer.offsetHeight * displacementFactor);

            const thisScale = randRange(25, 75) / 100;

            // console.log('thisX = ' + thisX + '     thisY = ' + thisY + '     thisScale = ' + thisScale);

            gsap.set([thisContainer.children[i]], { x: thisX, y: thisY, autoAlpha: 0, scale: thisScale });

            particleAnim(thisContainer.children[i]);
        }

    }, [particleAnim]);

    //#endregion - - - - - - - - - - - FUNCTION: positionParticle(thisContainer) - - - - - - - - - - -


    //#region - - - - - - - - - - - FUNCTION: addParticle = useCallback(() - - - - - - - - - - -

    const addParticle = useCallback((thisContainer, numParticle) => {

        // console.log('');
        // console.log('------------------------- addParticle(thisContainer, numParticle) triggered! -------------------------');

        // console.log('thisContainer.id = ' + thisContainer.id + '     numParticle = ' + numParticle);

        for (let i = 0; i < numParticle; i++) {

            const thisParticle = new Image();
            thisParticle.src = flash01;
            thisParticle.key = i;
            thisParticle.className = 'particle';
            thisParticle.id = 'flash01_' + i;
            thisParticle.alt = 'flash01_' + i;

            thisContainer.append(thisParticle);
        }

        positionParticle(thisContainer);

    }, [positionParticle]);

    //#endregion - - - - - - - - - - - FUNCTION: addParticle = useCallback(() - - - - - - - - - - -

    //#endregion -------------------- FUNCTION: PARTICLES - addParticle(thisContainer), positionParticle(thisContainer), particleAnim(thisParticle) --------------------

    //#endregion ==================== FUNCTIONS ====================



    //#region ==================== useEffect / useLayoutEffect ====================

    // useEffect(() => {
    useLayoutEffect(() => {

        const copy01Text = 'Light up the town';
        const copy02Text = 'The daring new fragrance';

        splitText(copy01Ref.current, copy01Text);
        splitText(copy02Ref.current, copy02Text);


        const numParticle = 50;

        // const tl = gsap.timeline({ delay: 0, paused: 'true' });
        const tl = gsap.timeline({ delay: 0 });

        tl

            //#region ==================== INITIALIZE OBJECTS ====================

            //#region -------------------- autoAlpha --------------------

            // .set([bgRef.current], { autoAlpha: 0 }, 'frame00')

            // .set([bg_baseRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([bg_ltRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([bg_dkRef.current], { autoAlpha: 0 }, 'frame00')


            // .set([logo_REDref.current], { autoAlpha: 0 }, 'frame00')

            // .set([logo_RED_baseRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([logo_RED_dsRef.current], { autoAlpha: 0 }, 'frame00')

            // .set([logo_RED_ea_wRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([logo_RED_always_rRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([logo_RED_red_rRef.current], { autoAlpha: 0 }, 'frame00')

            // .set([logo_RED_ds_kRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([logo_RED_ds_rRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([logo_RED_ds_wRef.current], { autoAlpha: 0 }, 'frame00')


            // .set([modelRef.current], { autoAlpha: 0 }, 'frame00')


            // .set([bottleRef.current], { autoAlpha: 0 }, 'frame00')

            // .set([bottle_baseRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([bottle_ltRef.current], { autoAlpha: 0 }, 'frame00')

            // // .set([flash01Ref.current], { autoAlpha: 0 }, 'frame00')


            // .set([copy01Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([copy02Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([ctaRef.current], { autoAlpha: 0 }, 'frame00')

            //#endregion -------------------- autoAlpha --------------------


            //#region -------------------- SET TRANSFORM ORIGiNS --------------------

            .set([bottleRef.current], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')
            // .set([logo_REDref.current], { transformOrigin: '50% 100%', immediateRender: true }, 'frame00')

            //#endregion -------------------- SET TRANSFORM ORIGiNS --------------------


            //#region -------------------- FRAME01 --------------------

            // .set([logo_REDref.current], { y: 230 }, 'frame00')

            //#endregion -------------------- FRAME01 --------------------


            //#region -------------------- FRAME02 --------------------

            // .set([logo_REDref.current], { y: 240 }, 'frame00')

            //#endregion -------------------- FRAME02 --------------------


            //#region -------------------- FRAME03 --------------------

            // .set([logo_REDref.current], { y: 370 }, 'frame00')

            //#endregion -------------------- FRAME03 --------------------

            //#endregion ==================== INITIALIZE OBJECTS ====================


            //#region ==================== FRAME 01 ====================

            .call(addParticle, [particleContainerRef.current, numParticle], 'frame00 +=0')
            .fromTo([logo_REDref.current], { y: 230, scale: 0.5, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, ease: 'power3.out', duration: animDuration04 }, 'frame00 +=0')

            //#endregion ==================== FRAME 01 ====================


            //#region ==================== FRAME 02 ====================

            .fromTo([modelRef.current], { scale: 0.9375, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, ease: 'power3.out', duration: animDuration04 }, 'frame00 +=1.75')

            .fromTo([logo_RED_ds_kRef.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration04 }, 'frame00 +=1.75')
            .to([logo_RED_ds_rRef.current, logo_RED_ds_wRef.current], { autoAlpha: 0, ease: 'power3.out', duration: animDuration04 }, 'frame00 +=1.75')

            //#endregion ==================== FRAME 02 ====================


            //#region ==================== FRAME 03 ====================

            .to([modelRef.current, logo_REDref.current], { autoAlpha: 0, ease: 'power3.in', duration: animDuration03, onComplete: nextPos, onCompleteParams: [logo_REDref.current, 0, 370, 1, 0] }, 'frame01 +=0')

            .fromTo([bgRef.current], { scale: 1.25 }, { scale: 1, ease: 'power3.in', duration: animDuration02_5 }, 'frame01 +=0.375')

            .fromTo([bg_ltRef.current], { autoAlpha: 0 }, { autoAlpha: 1, repeat: 1, yoyo: true, ease: 'power3.in', duration: animDuration02 }, 'frame01 +=1.0625')
            .fromTo([bottle_ltRef.current], { autoAlpha: 0 }, { autoAlpha: 1, repeat: 1, yoyo: true, ease: 'power3.in', duration: animDuration02 }, 'frame01 +=1.0625')

            .fromTo([bottle_baseRef.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.in', duration: animDuration03 }, 'frame01 +=1.125')

            .to([logo_REDref.current], { autoAlpha: 1, ease: 'power3.in', duration: animDuration03 }, 'frame01 +=2')

            .staggerFromTo(copy01Ref.current.children, staggerDuration, { autoAlpha: 0, rotationY: 90 }, { autoAlpha: 1, rotationY: 0 }, staggerDelay, 'frame01 +=1.5')
            .staggerFromTo(copy02Ref.current.children, staggerDuration, { autoAlpha: 0, rotationY: 90 }, { autoAlpha: 1, rotationY: 0 }, staggerDelay, 'frame01 +=4')

            .fromTo([ctaRef.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.in', duration: animDuration01 }, 'frame01 +=5')

            // #endregion ==================== FRAME 03 ====================
        ;

        //tl.duration(1.5);
        console.log('timing = ' + tl.duration() + ' secs');

    }, [addParticle, nextPos]);

    //#endregion ==================== useEffect / useLayoutEffect ====================


    return (
        <div className='banner300x600 eaar_18951'>
            {/* <h1>EAAR_18951 300x600 Component</h1> */}

            <div className='bgEAAR' ref={bgRef}>
                <img src={bg} alt='bg' ref={bg_baseRef} />
                <img src={bg_dk} alt='bg_dk' ref={bg_dkRef} />
                <img src={bg_lt} alt='bg_lt' ref={bg_ltRef} />
            </div>


            {/* <div className='bottleFlash' ref={flash01Ref}><img src={flash01} alt='flash01' /></div> */}
            <div className='particleContainer' id='particleContainerID' ref={particleContainerRef}></div>


            <img className='modelImg' src={model} alt='model' ref={modelRef} />

            <div className='bottleEAAR' ref={bottleRef}>
                <img src={bottle} alt='bottle' ref={bottle_baseRef} />
                <img src={bottle_lt} alt='bottle_lt' ref={bottle_ltRef} />
            </div>

            <div className='logoEAAR' ref={logo_REDref}>
                <div className='logoEAARds' ref={logo_RED_dsRef}>
                    <img src={logo_RED_ds_k} alt='logo_RED_ds_k' ref={logo_RED_ds_kRef} />
                    <img src={logo_RED_ds_r} alt='logo_RED_ds_r' ref={logo_RED_ds_rRef} />
                    <img src={logo_RED_ds_w} alt='logo_RED_ds_w' ref={logo_RED_ds_wRef} />
                </div>

                <div className='logoEAARbase' ref={logo_RED_baseRef}>
                    <img src={logo_RED_ea_w} alt='logo_RED_ea_w' ref={logo_RED_ea_wRef} />
                    <img src={logo_RED_always_r} alt='logo_RED_always_r' ref={logo_RED_always_rRef} />
                    <img src={logo_RED_red_r} alt='logo_RED_red_r' ref={logo_RED_red_rRef} />
                </div>
            </div>

            {/* <p className='copy01' ref={copy01Ref}>Light up the town</p> */}
            {/* <p className='copy02' ref={copy02Ref}>The daring new fragrance</p> */}

            <p className='copy01' ref={copy01Ref}></p>
            <p className='copy02' ref={copy02Ref}></p>

            <img src={cta} className='cta' alt='cta' ref={ctaRef} />

        </div>
    );
}
