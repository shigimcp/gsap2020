//#region ==================== IMPORTS ====================

import { gsap } from 'gsap';

//#endregion ==================== IMPORTS ====================


//#region ==================== ANIMATION DURATIONs ====================

// const staggerDuration = .125;
// const staggerDelay = 0.0375;

// const animDuration00 = .125;
const animDuration01 = .5;
// const animDuration02 = 1;
// const animDuration03 = 1.5;
// const animDuration04 = 2;
// const animDuration05 = 2.5;
// const animDuration06 = 3;
// const animDuration07 = 3.5;
// const animDuration08 = 4;
// const animDuration09 = 4.5;
// const animDuration10 = 5;

//#endregion ==================== ANIMATION DURATIONs ====================


//#region ==================== FUNCTIONS ====================

//#region -------------------- FUNCTION: ted(min:Number, max:Number) - integers --------------------

export function testing123(thisTestElem) {
    // console.log("thisTestElem = " + thisTestElem);
    return console.log("thisTestElem = " + thisTestElem);;
}

//#endregion -------------------- FUNCTION: randRange(min:Number, max:Number) - integers --------------------


//#region -------------------- FUNCTION: nextPos(thisObj, thisX, thisY, thisScale) --------------------

export function nextPos(thisObj, thisX, thisY, thisScale, thisAlpha) {
    console.log("PING!!! FUNCTION: nextPos triggered!");
    console.log("thisObj: " + thisObj + ", thisX: " + thisX + ", thisY: " + thisY + ", thisScale: " + thisScale + ", thisAlpha: " + thisAlpha);

    // TweenLite.set(thisObj, { x: thisX, y: thisY, scale: thisScale, alpha: thisAlpha });
    gsap.set(thisObj, { x: thisX, y: thisY, scale: thisScale, alpha: thisAlpha });
}

//#endregion -------------------- FUNCTION: nextPos(thisObj, thisX, thisY, thisScale) --------------------


//#region -------------------- FUNCTION: randRange(min:Number, max:Number) - integers --------------------

export function randRange(min, max) {
	let thisIndex = min + Math.round(Math.random()*(max-min));
//	console.log("thisIndex = " + thisIndex);
	return thisIndex;
}

//#endregion -------------------- FUNCTION: randRange(min:Number, max:Number) - integers --------------------


//#region -------------------- FUNCTION: randRange2(min:Number, max:Number) - real numbers --------------------

export function randRange2(min, max) {
	let thisIndex = min + Math.random()*(max-min);
//	console.log("thisIndex = " + thisIndex);
	return thisIndex;
}

//#endregion -------------------- FUNCTION: randRange2(min:Number, max:Number) - real numbers --------------------


//#region -------------------- FUNCTION: PARTICLES - addParticle(thisContainer), positionParticle(thisContainer), particleAnim(thisParticle) --------------------

const numParticle = 50;

// const container01W = container01.width();
// const container01H = container01.height();

// const container02W = container02.width();
// const container02H = container02.height();

// console.log("container01W x container01H = " + container01W + " x " + container01H);
// console.log("container02W x container02H = " + container02W + " x " + container02H);

// TweenMax.set("img", { xPercent: "-50%", yPercent: "-50%" })
gsap.set("img", { xPercent: "-50%", yPercent: "-50%" })


export function addParticle(thisContainer){   
	for (let i = 0; i < numParticle; i++){ 
		thisContainer.append('<div class="particle"><img src="images/flash01.jpg"></div>');
	}

	positionParticle(thisContainer);
}


export function positionParticle(thisContainer){
	thisContainer.children().each(function(){
//		console.log("PING!!! found this " + this + " in " + thisContainer);

		const thisX = randRange(-thisContainer.width()*1, thisContainer.width()*1);
		const thisY = randRange(-thisContainer.height()*1, thisContainer.height()*1);
		const thisScale = randRange(25, 75) / 100;

//		console.log("thisX, thisY, thisScale = " + thisX + ", " + thisY + ", " + thisScale);

        // TweenLite.set(this, { x: thisX, y: thisY, alpha: 0, scale: thisScale });
        gsap.set(this, { x: thisX, y: thisY, alpha: 0, scale: thisScale });

		particleAnim(this);
	});
}


export function particleAnim(thisParticle){ 
//	TweenMax.to(thisParticle, animDuration04, {x:randRange(-100, 100), rotationY:0, alpha:1, repeat:-1, yoyo:true, ease:Sine.easeInOut, delay:randRange2(.0625, 1.5)});
//	TweenMax.to(thisParticle, animDuration01, {x:0, alpha:1, repeat:1, yoyo:true, ease:Sine.easeInOut, delay:randRange2(.0625, 1.5)});
    // TweenMax.to(thisParticle, animDuration01, { alpha: 1, repeat: 1, yoyo: true, ease: Sine.easeInOut, delay: randRange2(0, 1.5) });
    gsap.to(thisParticle, animDuration01, { alpha: 1, repeat: 1, yoyo: true, delay: randRange2(0, 1.5) });
};

//#endregion -------------------- FUNCTION: PARTICLES - addParticle(thisContainer), positionParticle(thisContainer), particleAnim(thisParticle) --------------------

//#endregion ==================== FUNCTIONS ====================



// default export testing123;