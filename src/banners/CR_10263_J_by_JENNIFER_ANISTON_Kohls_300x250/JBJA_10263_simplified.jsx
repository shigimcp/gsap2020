//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import { useCallback } from 'react';

import { gsap } from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';
import * as PIXI from 'pixi.js';
import * as particles from 'pixi-particles';

import '../banners.scss';
import './JBJA_10263.scss';

// import particle from './images/sparkle.png';
// import particle from './images/sparkle360.png';
import particle from './images/particle.png';


gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

//#endregion ==================== IMPORTS ====================


export default function JBJA_10263() {

    const particleContainer_Ref = useRef(null);


    //region ==================== PARTICLES ====================
    //       -------------------- REF: https://pixijs.download/dev/docs/PIXI.ParticleContainer.html --------------------
    //       -------------------- REF: https://github.com/pixijs/pixi-particles/blob/master/docs/examples/js/ParticleExample.js --------------------
    //       -------------------- REF: https://pixijs.io/pixi-particles-editor/ --------------------

    const addPixi = useCallback((thisContainer, numParticle) => {

        console.log('');
        console.log('------------------------- addPixi(thisContainer, numParticle) triggered! -------------------------');

        console.log('thisContainer = ' + thisContainer + '     numParticle = ' + numParticle);
        console.log(thisContainer);




        //#region -------------------- PARTICLES: app --------------------

        console.log('');
        console.log('------------------------- app -------------------------');

        // Setup PIXI app
        const app = new PIXI.Application({
            // id: 'PixiAppID',
            width: 300,
            height: 250,
            // backgroundColor: 0xd4efff,
            backgroundColor: 0x000000,
            view: document.getElementById('particleContainer'),

            autoResize: true,
            resolution: devicePixelRatio || 1,
            antialias: true,
            // transparent: true,
        })

        // thisContainer.appendChild(app);
        thisContainer.appendChild(app.view);
        // particleContainer_Ref.current.appendChild(app.view);


        // console.log('');
        console.log('app = ' + app);
        console.log(app);

        console.log('');
        console.log('app.view = ' + app.view);
        console.log(app.view);

        // console.log('');
        // console.log('app.view.id = ' + app.view.id);
        // console.log(app.view.id);

        // console.log('');
        // console.log('app.parent = ' + app.parent);
        // console.log(app.parent);

        console.log('');
        console.log('thisContainer = ' + thisContainer);
        console.log(thisContainer);

        // console.log('');
        // console.log('thisContainer.children = ' + thisContainer.children);
        // console.log(thisContainer.children);




        // console.log('');
        // console.log('document.getElementById(\'particleCanvasID\') = ' + document.getElementById('particleCanvasID'));
        // console.log(document.getElementById('particleCanvasID'));

        // const app = document.getElementById('particleCanvasID');

        // // console.log('');
        // console.log('app = ' + app);
        // console.log(app);

        // console.log('');
        // console.log('app.stage = ' + app.stage);
        // console.log(app.stage);

        //#endregion -------------------- PARTICLES: app --------------------



        //#region -------------------- PARTICLES: container --------------------

        console.log('');
        console.log('------------------------- container -------------------------');

        let container = new PIXI.ParticleContainer();
        // let container = new PIXI.Container();
        // let container = app;

        // console.log('');
        console.log('container = ' + container);
        console.log(container);

        console.log('');
        console.log('container.parent = ' + container.parent);
        console.log(container.parent);

        console.log('');
        console.log('container.children = ' + container.children);
        console.log(container.children);


        // particleContainer_Ref.current.appendChild(container);
        // thisContainer.appendChild(container);
        // thisContainer.append(container);
        // app.stage.addChild(container);
        // app.stage.addChild(container);
        // app.view.addChild(container);
        // app.view.appendChild(container);
        app.stage.addChild(container);


        // for (let i = 0; i < numParticle; ++i) {
        //     let sprite = PIXI.Sprite.from(particle);
        //     container.addChild(sprite);
        // }

        //#endregion -------------------- PARTICLES: container --------------------




        //#region -------------------- PARTICLES: emitter --------------------

        console.log('');
        console.log('------------------------- emitter -------------------------');

        // Create a new emitter
        // note: if importing library like "import * as particles from 'pixi-particles'"
        // or "const particles = require('pixi-particles')", the PIXI namespace will not be modified, 
        // and may not exist - use "new particles.Emitter()", or whatever your imported namespace is

        // let emitter = new PIXI.particles.Emitter(
        let emitter = new particles.Emitter(

            // The PIXI.Container to put the emitter in 
            // if using blend modes, it's important to put this on top of a bitmap, and not use the root stage Container

            container,
            // [PIXI.Texture.from('./images/sparkle.png')],
            [particle],


            //#region -------------------- EMITTER CONFIG: Canvas - REF: https://pixijs.io/pixi-particles-editor/ --------------------

            // Emitter configuration: edit this to change the look of the emitter

            {
                "alpha": {
                    "start": 0.6,
                    "end": 0
                },
                "scale": {
                    "start": 0.05,
                    "end": 0.75,
                    // "start": 0.025,
                    // "end": 0.375,
                    "minimumScaleMultiplier": 1
                },
                "color": {
                    "start": "#e4f9ff",
                    "end": "#ffffff"
                },
                "speed": {
                    "start": 50,
                    "end": 0,
                    "minimumSpeedMultiplier": 5
                },
                "acceleration": {
                    "x": 200,
                    "y": -150
                },
                "maxSpeed": 0,
                "startRotation": {
                    "min": 0,
                    "max": 360
                },
                "noRotation": false,
                "rotationSpeed": {
                    "min": 0,
                    "max": 0
                },
                "lifetime": {
                    "min": 1,
                    "max": 5
                },
                "blendMode": "normal",
                "frequency": 0.01,
                "emitterLifetime": -1,
                "maxParticles": 250,
                "pos": {
                    "x": 150,
                    "y": 125
                },
                "addAtBack": true,
                "spawnType": "circle",
                "spawnCircle": {
                    "x": 0,
                    "y": 0,
                    "r": 0
                }
            }

            //#endregion -------------------- EMITTER CONFIG: Canvas - REF: https://pixijs.io/pixi-particles-editor/ --------------------
        );

        // container.append(emitter);
        // container.addChild(emitter);


        // console.log('');
        console.log('container = ' + container);
        console.log(container);

        console.log('');
        console.log('container.children = ' + container.children);
        console.log(container.children);

        console.log('')
        console.log('emitter = ' + emitter);
        console.log(emitter);

        console.log('')
        console.log('emitter.parent = ' + emitter.parent);
        console.log(emitter.parent);

        // console.log('')
        // console.log('emitter.parent.parent = ' + emitter.parent.parent);
        // console.log(emitter.parent.parent);

        // console.log('')
        // console.log('app.renderer = ' + app.renderer);
        // console.log(app.renderer);

        //#endregion -------------------- PARTICLES: emitter --------------------


        // particleContainer_Ref.current.appendChild(emitter);
        // particleContainer_Ref.current.append(emitter);
        // container.appendChild(emitter);
        // container.append(emitter);
        // app.stage.addChild(emitter);
        // particleContainer_Ref.current.append(emitter);



        // Calculate the current time
        let elapsed = Date.now();


        // Update function every frame
        let update = function () {

            // Update the next frame
            requestAnimationFrame(update);

            let now = Date.now();

            // The emitter requires the elapsed number of seconds since the last update
            if (emitter) {
                // console.log('There IS an emitter... RIGHT?!?!?!');

                emitter.update((now - elapsed) * 0.001);
                elapsed = now;

                // console.log('elapsed = ' + elapsed);

            } else {
                console.log('WHERE is my emitter?!?!?!');
            }

            // Should re-render the PIXI Stage
            // renderer.render(stage);
            app.renderer.render(app.stage);
        };


        // Start emitting
        emitter.emit = true;

        // Start the update
        update();

    }, []);
    // }, [container]);


    //endregion ==================== PARTICLES ====================



    const numParticle = 40;

    useLayoutEffect(() => {

        addPixi(particleContainer_Ref.current, numParticle);

    }, [addPixi]);


    return (

        <div className='banner300x250 jbja_10263' id='jbja_10263ID'>

            <div className='particleContainer' id='particleContainerID' ref={particleContainer_Ref}></div>

        </div>
    );
}
