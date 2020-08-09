//#region ==================== IMPORTS ====================

import React from 'react';
import { use_Ref } from 'react';
// import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { useCallback } from 'react';

import { gsap } from 'gsap';
// import { CSSPlugin } from 'gsap/CSSPlugin';

import '../banners.scss';
import './NMPF_04852.scss';
// import './fonts/fonts.css';


//#region -------------------- IMPORTS: ASSETS --------------------

import bg from './images/bg.jpg';
import bg_ko from './images/bg_ko.png';

import model from './images/model.png';
import bottle from './images/bottle.png';

import logo_NMPF from './images/logo.png';
import logo_NM from './images/logo_NM.png';
import logo_PF from './images/logo_PF.png';

import tag from './images/tag.png';

// import cta from './images/btn_buy.png';
import cta from './images/btn_buy.svg';

// import starspin from './images/starspin.png';
import starspin from './images/starspin.svg';
import starspin_mask_01 from './images/starspin_mask_01.png';
import starspin_mask_02 from './images/starspin_mask_02.png';

//#endregion -------------------- IMPORTS: ASSETS --------------------


//#region -------------------- GSAP: REGISTER PLUGINS --------------------

// gsap.registerPlugin(CSSPlugin);

//#endregion -------------------- GSAP: REGISTER PLUGINS --------------------


//#endregion ==================== IMPORTS ====================


export default function NMPF_04852() {

    //#region ==================== ASSETS _Ref ====================

    const bg_Ref = use_Ref(null);
    const bg_ko_Ref = use_Ref(null);

    const model_Ref = use_Ref(null);
    const bottle_Ref = use_Ref(null);

    const logo_NMPF_Ref = use_Ref(null);
    const logo_NM_Ref = use_Ref(null);
    const logo_PF_Ref = use_Ref(null);

    const tag_Ref = use_Ref(null);

    const cta_Ref = use_Ref(null);

    const starspin_Ref = use_Ref(null);
    const starspin_mask_01_Ref = use_Ref(null);
    const starspin_mask_02_Ref = use_Ref(null);

    const clickTag_Ref = use_Ref(null);

    //#endregion ==================== ASSETS _Ref ====================


    //#region ==================== ANIMATION DURATIONs ====================

    // const staggerDuration = 0.125;
    // const staggerDelay = 0.0375;

    // const animDuration00 = 0.125;
    // const animDuration00_5 = 0.50;
    const animDuration01 = 1.00;
    // const animDuration01_25 = 1.25;
    // const animDuration01_5 = 1.50;
    const animDuration02 = 2.00;
    // const animDuration02_5 = 2.50;
    // const animDuration03 = 3.00;
    // const animDuration03_5 = 3.50;
    // const animDuration04 = 4.00;
    // const animDuration04_5 = 4.50;
    // const animDuration05 = 5.00;
    // const animDuration05_5 = 5.50;
    // const animDuration06 = 6.00;
    // const animDuration06_5 = 6.50;
    // const animDuration07 = 7.00;
    // const animDuration07_5 = 7.50;
    // const animDuration08 = 8.00;
    // const animDuration08_5 = 8.50;
    // const animDuration09 = 9.00;
    // const animDuration09_5 = 9.50;
    // const animDuration10 = 10.00;

    //#endregion ==================== ANIMATION DURATIONs ====================


    //#region ==================== FUNCTIONS ====================

    //#region -------------------- FUNCTION: splitText(thisContainer, thisCopy) --------------------

    // function splitText(thisContainer, thisCopy, thisClassname) {

    //     // console.log('');
    //     // console.log('------------------------- splitText(thisContainer, thisCopy) triggered! -------------------------');
    //     // console.log('thisContainer.id = ' + thisContainer.id + '     thisCopy = ' + thisCopy);

    //     const thisCopyResponse = thisCopy.split('');
    //     // console.log('thisCopyResponse.length = ' + thisCopyResponse.length + '     thisCopyResponse = ' + thisCopyResponse)

    //     for (let c = 0; c < thisCopyResponse.length; c++) {

    //         // console.log('thisCopyResponse[c] = "' + thisCopyResponse[c] + '"');

    //         const node = document.createElement('p');
    //         node.className = thisClassname;

    //         if (thisCopyResponse[c] !== ' ') {
    //             node.innerHTML = thisCopyResponse[c];
    //             thisContainer.append(node);
    //         } else {
    //             // console.log('This is a space!');
    //             node.innerHTML = '&nbsp;';
    //             thisContainer.append(node);
    //         }
    //     }
    // }

    //#endregion -------------------- FUNCTION: randRange(min:Number, max:Number) - integers --------------------


    //#region -------------------- FUNCTION: randRange(min:Number, max:Number) - integers --------------------

    // function randRange(min, max) {
    //     let thisIndex = min + Math.round(Math.random() * (max - min));
    //     //	console.log('thisIndex = ' + thisIndex);

    //     return thisIndex;
    // }

    //#endregion -------------------- FUNCTION: randRange(min:Number, max:Number) - integers --------------------


    //#region -------------------- FUNCTION: randRange2(min:Number, max:Number) - real numbers --------------------

    // function randRange2(min, max) {
    //     let thisIndex = min + Math.random() * (max - min);
    //     //	console.log('thisIndex = ' + thisIndex);

    //     return thisIndex;
    // }

    //#endregion -------------------- FUNCTION: randRange2(min:Number, max:Number) - real numbers --------------------


    //#region -------------------- FUNCTION: nextPos(thisObj, thisX, thisY, thisScale) --------------------

    // const nextPos = useCallback((thisObj, thisX, thisY, thisScale, thisAlpha) => {

    //     // console.log('');
    //     // console.log('------------------------- nextPos(thisObj, thisX, thisY, thisScale, thisAlpha) triggered! -------------------------');
    //     // console.log('thisObj: ' + thisObj + ', thisX: ' + thisX + ', thisY: ' + thisY + ', thisScale: ' + thisScale + ', thisAlpha: ' + thisAlpha);

    //     gsap.set(thisObj, { x: thisX, y: thisY, scale: thisScale, alpha: thisAlpha });

    // }, []);

    //#endregion -------------------- FUNCTION: nextPos(thisObj, thisX, thisY, thisScale) --------------------


    //#region -------------------- FUNCTION: PARTICLES - addParticle(thisContainer), positionParticle(thisContainer), particleAnim(thisParticle) --------------------

    //#region - - - - - - - - - - - FUNCTION: removeAllChildNodes(parent) - - - - - - - - - - -

    // // const removeAllChildNodes = useCallback((parent) => {
    // function removeAllChildNodes(parent) {

    //     // console.log('');
    //     // console.log('------------------------- removeAllChildNodes(parent) triggered! -------------------------');

    //     // console.log('parent = ' + parent);
    //     // console.log('parent.id = ' + parent.id);

    //     while (parent.firstChild) {
    //         parent.removeChild(parent.firstChild);
    //     }
    // }
    // // }, []);

    //#endregion - - - - - - - - - - - FUNCTION: removeAllChildNodes(thisContainer) - - - - - - - - - - -


    //#region - - - - - - - - - - - FUNCTION: removeParticle(thisParticle) - - - - - - - - - - -

    // const removeParticle = useCallback((thisParticle) => {

    //     // console.log('');
    //     // console.log('------------------------- removeParticle(thisParticle) triggered! -------------------------');
    //     // console.log('NOTE: the error check below does not work 100%');
    //     // console.log('It fails if I click before the full run of the particle animations(s) complete.');

    //     // console.log('thisParticle = ' + thisParticle);
    //     // console.log('thisParticle.id = ' + thisParticle.id);

    //     if (thisParticle == null) {
    //         console.log('***** NOPE! *****');
    //         console.error();
    //     } else {
    //         thisParticle.parentNode.removeChild(thisParticle);
    //     }

    // }, []);

    //#endregion - - - - - - - - - - - FUNCTION: removeParticle(thisParticle) - - - - - - - - - - -


    //#region - - - - - - - - - - - FUNCTION: particleAnim(thisParticle) - - - - - - - - - - -

    // const particleAnim = useCallback((thisParticle) => {

    //     // console.log('');
    //     // console.log('------------------------- particleAnim(thisParticle) triggered! -------------------------');

    //     // console.log('thisParticle.id = ' + thisParticle.id);

    //     // gsap.to([thisParticle], animDuration00_5, { autoAlpha: 1, repeat: 1, yoyo: true, ease: 'sine.inOut', delay: randRange2(0, 1.5) });
    //     // gsap.to([thisParticle], animDuration00_5, { autoAlpha: 1, repeat: 1, yoyo: true, ease: 'sine.inOut', delay: randRange2(0, 1.5), onComplete: removeParticle, onCompleteParams: [thisParticle] });

    //     // TweenLite.to(mc_empty.getInstanceAtDepth(n), 1, { _xscale: 100, _yscale: 100, _alpha: 100, delay: .1 + (.0375 * n), ease: Cubic.easeOut });
    //     // gsap.to([thisParticle], animDuration01, { scale: 1, autoAlpha: 1, ease: 'power3.out', delay: randRange2(0, 1.5) });
    //     gsap.fromTo([thisParticle], { scale: randRange2(0.75, 1), rotation: randRange(-15, 15), autoAlpha: 0 }, { scale: 1, rotation: 0, autoAlpha: 0.75, ease: 'power3.out', duration: animDuration01, delay: randRange2(0.5, 1.5) });

    // }, []);
    // // }, [removeParticle]);

    //#endregion - - - - - - - - - - - FUNCTION: particleAnim(thisParticle) - - - - - - - - - - -


    //#region - - - - - - - - - - - FUNCTION: positionParticle(thisContainer) - - - - - - - - - - -

    // const positionParticle = useCallback((thisContainer) => {

    //     // console.log('');
    //     // console.log('------------------------- positionParticle(thisContainer) triggered! -------------------------');

    //     // console.log('thisContainer.id = ' + thisContainer.id + '     numParticle = ' + numParticle);
    //     // console.log('thisContainer.offsetWidth = ' + thisContainer.offsetWidth + '     thisContainer.offsetHeight = ' + thisContainer.offsetHeight);

    //     // console.log('thisContainer.children[1] = ' + thisContainer.children[1]);

    //     // const displacementFactor = 0.5;

    //     for (let i = 0; i < thisContainer.children.length; i++) {

    //         // console.log('thisContainer.children[i].id = ' + thisContainer.children[i].id);

    //         // const thisX = randRange(-thisContainer.offsetLeft * displacementFactor, thisContainer.offsetWidth * displacementFactor);
    //         // const thisY = randRange(-thisContainer.offsetTop * displacementFactor, thisContainer.offsetHeight * displacementFactor);

    //         // const thisX = randRange(-thisContainer.offsetWidth * displacementFactor, thisContainer.offsetWidth * displacementFactor);
    //         // const thisY = randRange(-thisContainer.offsetHeight * displacementFactor, thisContainer.offsetHeight * displacementFactor);

    //         const thisX = randRange(-thisContainer.offsetWidth * 0.75, thisContainer.offsetWidth * 0.5);
    //         const thisY = randRange(-thisContainer.offsetHeight * 0.25, thisContainer.offsetHeight * 0.875);

    //         const thisScale = randRange(25, 60) / 100;

    //         // console.log('thisX = ' + thisX + '     thisY = ' + thisY + '     thisScale = ' + thisScale);

    //         gsap.set([thisContainer.children[i]], { x: thisX, y: thisY, autoAlpha: 0, scale: thisScale });

    //         particleAnim(thisContainer.children[i]);
    //     }

    // }, [particleAnim]);

    //#endregion - - - - - - - - - - - FUNCTION: positionParticle(thisContainer) - - - - - - - - - - -


    //#region - - - - - - - - - - - FUNCTION: addParticle = useCallback(() - - - - - - - - - - -

    // const addParticle = useCallback((thisContainer, numParticle) => {

    //     // console.log('');
    //     // console.log('------------------------- addParticle(thisContainer, numParticle) triggered! -------------------------');

    //     // console.log('thisContainer.id = ' + thisContainer.id + '     numParticle = ' + numParticle);

    //     for (let i = 0; i < numParticle; i++) {

    //         const thisParticle = new Image();
    //         thisParticle.src = flower_01;
    //         thisParticle.key = i;
    //         thisParticle.className = 'particle';
    //         thisParticle.id = 'flower_01_' + i;
    //         thisParticle.alt = 'flower_01_' + i;

    //         thisContainer.append(thisParticle);
    //     }

    //     positionParticle(thisContainer);

    // }, [positionParticle]);

    //#endregion - - - - - - - - - - - FUNCTION: addParticle = useCallback(() - - - - - - - - - - -


    //#region - - - - - - - - - - - FUNCTION: addRandomParticle = useCallback(() - - - - - - - - - - -

    // const addRandomParticle = useCallback((thisContainer, numParticle) => {

    //     // console.log('');
    //     // console.log('------------------------- addRandomParticle(thisContainer, numParticle) triggered! -------------------------');

    //     // console.log('thisContainer.id = ' + thisContainer.id + '     numParticle = ' + numParticle);

    //     const particles = [
    //         flower_01,
    //         flower_02,
    //         flower_03,
    //         flower_04,
    //         flower_05
    //     ];

    //     // console.log('particles = ' + particles);

    //     for (let i = 0; i < numParticle; i++) {

    //         let particleIndex = randRange(0, 4);

    //         // console.log('particleIndex = ' + particleIndex);

    //         const thisParticle = new Image();
    //         thisParticle.src = particles[particleIndex];
    //         thisParticle.key = i;
    //         thisParticle.className = 'particle';
    //         thisParticle.id = 'flower' + i;
    //         thisParticle.alt = 'flower' + i;

    //         // console.log('particles[' + particleIndex + '] = ' + particles[particleIndex]);
    //         // console.log('thisParticle = ' + thisParticle.id);

    //         thisContainer.append(thisParticle);
    //     }

    //     positionParticle(thisContainer);

    // }, [positionParticle]);

    //#endregion - - - - - - - - - - - FUNCTION: addRandomParticle = useCallback(() - - - - - - - - - - -

    //#endregion -------------------- FUNCTION: PARTICLES - addParticle(thisContainer), positionParticle(thisContainer), particleAnim(thisParticle) --------------------


    //#region -------------------- FUNCTION: handleClick() - GSAP timeline control --------------------

    function handleClick() {
    // const handleClick = useCallback(() => {

        console.log('');
        console.log('------------------------- handleClick() -------------------------');

        // removeAllChildNodes(particleContainer_Ref.current);

        tl.pause(0);
        tl.restart();
    }
    // }, [tl]);

    //#endregion -------------------- FUNCTION: handleClick() - GSAP timeline control --------------------

    //#endregion ==================== FUNCTIONS ====================



    //#region ==================== useEffect / useLayoutEffect ====================

    // const numParticle = 40;

    const tl = gsap.timeline({ delay: 0 });


    // useEffect(() => {
    useLayoutEffect(() => {

        // const copy01Text = 'Introducing';
        // const copy02Text = 'The daring new fragrance';

        // splitText(copy01_Ref.current, copy01Text, 'char01');
        // splitText(copy02_Ref.current, copy02Text, 'char02');

        // addParticle(particleContainer_Ref.current, numParticle);
        // addRandomParticle(particleContainer_Ref.current, numParticle);

        tl

            //#region ==================== INITIALIZE OBJECTS ====================

            //#region -------------------- autoAlpha --------------------

            .set([bg_Ref.current], { autoAlpha: 0 }, 'frame00')
            .set([bg_ko_Ref.current], { autoAlpha: 0 }, 'frame00')

            // .set([model_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([bottle_Ref.current], { autoAlpha: 0 }, 'frame00')

            // .set([logo_NMPF_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([tag_Ref.current], { autoAlpha: 0 }, 'frame00')

            .set([starspin_Ref.current], { autoAlpha: 0 }, 'frame00')
            .set([starspin_mask_01_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([starspin_mask_02_Ref.current], { autoAlpha: 0 }, 'frame00')

            // .set([cta_Ref.current], { autoAlpha: 0 }, 'frame00')

            .set([clickTag_Ref.current], { autoAlpha: 0 }, 'frame00')

            //#endregion -------------------- autoAlpha --------------------


            //#region -------------------- SET TRANSFORMS --------------------

            //#region -------------------- SET TRANSFORM ORIGiNS --------------------

            // .set([bottle_Ref.current], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')
            // .set([bg_Ref.current], { transformOrigin: '50% 25%', immediateRender: true }, 'frame00')

            //#endregion -------------------- SET TRANSFORM ORIGiNS --------------------


            //#region -------------------- FRAME01 --------------------

            // .set([copy01_Ref.current], { x: -73.75, y: 85.5, scale: 0.529411764705882 }, 'frame00')
            // .set([logo_NMPFref.current], { x: -72.5, y: 230, scale: 0.558823529411765 }, 'frame00')
            // .set([copy01_Ref.current, logo_NMPFref.current], { x: 0, y: 0, scale: 1 }, 'frame00')

            //#endregion -------------------- FRAME01 --------------------


            //#region -------------------- FRAME04 --------------------

            // .set([copy01_Ref.current], { x: -73.75, y: 85.5, scale: 0.529411764705882 }, 'frame00')
            // .set([logo_NMPFref.current], { x: -72.5, y: 230, scale: 0.558823529411765 }, 'frame00')
            // .set([model_mask_Ref.current], { y: -250 }, 'frame00')

            //#endregion -------------------- FRAME04 --------------------

            //#endregion -------------------- SET TRANSFORMS --------------------

            //#endregion ==================== INITIALIZE OBJECTS ====================



            //#region ==================== FRAME 01 ====================

            // .call(addRandomParticle, [particleContainer_Ref.current, numParticle], 'frame01 +=0')

            // .fromTo([bg_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame01 +=0.5')

            // .fromTo([copy01_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration02, onComplete: nextPos, onCompleteParams: [copy01_Ref.current, -73.75, 85.5, 0.529411764705882, 0] }, 'frame01 +=1.5')

            //#endregion ==================== FRAME 01 ====================


            //#region ==================== FRAME 02 ====================

            // .to([copy01_Ref.current], { autoAlpha: 0, ease: 'power3.out', duration: animDuration02 }, 'frame02 +=0')

            // .fromTo([logo_NMPFref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame02 +=0')

            //#endregion ==================== FRAME 02 ====================


            //#region ==================== FRAME 03 ====================

            // .to([logo_NMPFref.current], { autoAlpha: 0, ease: 'power3.out', duration: animDuration02, onComplete: nextPos, onCompleteParams: [logo_NMPFref.current, -72.5, 230, 0.558823529411765, 0] }, 'frame03 +=0.5')

            // .fromTo([copy02_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame03 +=0.5')

            //#endregion ==================== FRAME 03 ====================


            //#region ==================== FRAME 04 ====================

            // .set([copy01_Ref.current], { color: '#000000' }, 'frame04')

            // .set([logo_NMPF_noir_w_Ref.current], { autoAlpha: 0 }, 'frame04')
            // .set([logo_NMPF_noir_k_Ref.current], { autoAlpha: 1 }, 'frame04')
            // .set([logo_NMPF_jc_k_Ref.current], { autoAlpha: 1 }, 'frame04')

            // .to([copy02_Ref.current], { autoAlpha: 0, ease: 'power3.out', duration: animDuration02 }, 'frame04 +=0.5')

            // .fromTo([model_mask_Ref.current], { y: -250 }, { y: 0, ease: 'power3.out', duration: animDuration02 }, 'frame04 +=0.5')
            // .fromTo([model_SVG_Ref.current], { y: 250 }, { y: 0, ease: 'power3.out', duration: animDuration02 }, 'frame04 +=0.5')

            // .fromTo([copy01_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.in', duration: animDuration01 }, 'frame04 +=0.5')
            // .fromTo([logo_NMPFref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.in', duration: animDuration01 }, 'frame04 +=0.75')
            // .fromTo([cta_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.in', duration: animDuration01 }, 'frame04 +=1')

            // // .staggerFromTo(copy01_Ref.current.children, staggerDuration, { autoAlpha: 0, rotationY: 90 }, { autoAlpha: 1, rotationY: 0 }, staggerDelay, 'frame04 +=1.5')
            // // .staggerFromTo(copy02_Ref.current.children, staggerDuration, { autoAlpha: 0, rotationY: 90 }, { autoAlpha: 1, rotationY: 0 }, staggerDelay, 'frame04 +=4')

            //#endregion ==================== FRAME 04 ====================
        ;

        //tl.duration(1.5);
        console.log('');
        console.log('tl timing = ' + tl.duration() + ' secs');

    }, []);
    // }, [tl]);
    // }, [tl, addRandomParticle]);
    // }, [tl, addRandomParticle, nextPos]);
    // }, [
    //     tl, 
    //     bg_Ref, ,
    //     bg_ko_Ref,
    //     model_Ref,
    //     bottle_Ref,
    //     logo_NMPF_Ref,
    //     logo_NM_Ref,
    //     logo_PF_Ref,
    //     tag_Ref,
    //     cta_Ref,
    //     cta_Ref,
    //     starspin_Ref,
    //     starspin_Ref,
    //     starspin_mask_01_Ref,
    //     starspin_mask_02_Ref,
    //     clickTag_Ref
    // ]);

    //#endregion ==================== useEffect / useLayoutEffect ====================


    return (
        <div className='banner300x250 nmpf_04852' id='nmpf_04852ID'>
            {/* <h1>NMPF_04852 300x250 Component</h1> */}
{/* 
            <div className='bgDiv' id='bgDivID' ref={bg_Ref}>
                <img src={bg} id='bgID' alt='bg' />
            </div>
            <div className='bg_koDiv' id='bg_koDivID' ref={bg_ko_Ref}>
                <img src={bg_ko} id='bg_koID' alt='bg_ko' />
            </div>
 */}

            <img src={bg} className='bgDiv' id='bgID' alt='bg' ref={bg_Ref} />
            <img src={bg_ko} className='bg_koDiv' id='bg_koID' alt='bg_ko' ref={bg_ko_Ref} />


            {/* <div className='particle' ref={flower_01_Ref}><img src={flower_01} alt='flower_01' /></div> */}
            {/* <div className='particleContainer' id='particleContainerID' ref={particleContainer_Ref}></div> */}


            {/* #region -------------------- SVG: model (masks) -------------------- */}

            <svg className='starspinDiv' id='starspinDivID' version='1.1' baseProfile='full' width='500' height='500' space='preserve' ref={starspin_Ref}>

                <defs>

                    {/* <linearGradient id='maskGrad_NMPF_04852' gradientUnits='userSpaceOnUse' x1='0' y1='250' x2='300' y2='250' gradientTransform='rotate(90)'> */}
                    <linearGradient id='maskGrad_NMPF_04852' gradientUnits='userSpaceOnUse' x1='300' y1='0' x2='300' y2='250'>
                        <stop offset='.125' style={{ stopColor: '#000000' }} />
                        <stop offset='0.5' style={{ stopColor: '#FFFFFF' }} />
                        <stop offset='0.75' style={{ stopColor: '#000000' }} />
                        <stop offset='1' style={{ stopColor: '#000000' }} />
                    </linearGradient>
{/* 
                    <mask id='maskID'>
                        <rect className='class_mask' fill='url(#maskGrad_NMPF_04852)' x='0' y='0' width='300' height='250' />
                    </mask>
 */}
                </defs>

                <g mask='url(#maskID)' ref={starspin_mask_01_Ref}>
                    <image href={starspin} width='500' height='500' />
                </g>

            </svg>

            {/* #endregion -------------------- SVG: model (masks) -------------------- */}


            <img className='modelDiv' id='modelDivID' src={model} alt='model' ref={model_Ref} />


            <div className='bottleDiv' id='bottleDivID' ref={bottle_Ref}>
                <img src={bottle} id='bottleID' alt='bottle' />
            </div>

            <div className='tagDiv' id='tagDivID' ref={tag_Ref}>
                <img src={tag} id='tagID' alt='tag' />
            </div>


            <div className='logoDiv' id='logoDivID' ref={logo_NMPF_Ref}>
                <img src={logo_NMPF} className='logo_NMPF' id='logo_NMPFID' alt='logo_NMPF' />
            </div>
{/* 
            <p className='copy01' id='copy01ID' ref={copy01_Ref}>Introducing</p>
            <p className='copy02' id='copy02ID' ref={copy02_Ref}>&nbsp;A bold, sensual and arresting fragrance</p>

            <p className='copy01' id='copy01ID' ref={copy01_Ref}></p>
            <p className='copy02' id='copy02ID' ref={copy02_Ref}></p>
 */}
            <img src={cta} className='cta' id='ctaID' alt='cta' ref={cta_Ref} />

            {/* <div className='clickTag' id='clickTagID' ref={clickTag_Ref} onClick={() => handleClick()}></div> */}
            <div className='clickTag' id='clickTagID' onClick={handleClick} ref={clickTag_Ref}></div>

        </div>
    );
}
