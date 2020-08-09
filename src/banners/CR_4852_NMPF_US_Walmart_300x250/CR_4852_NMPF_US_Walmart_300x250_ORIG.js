//==================== PARTICLE SYSTEM ====================

var emitterX = this.emitter.x;
var emitterY = this.emitter.y;
var destinationX = this.destination.x;
var destinationY = this.destination.y;

this.emitter.alpha = 0;
this.destination.alpha = 0;

console.log("emitterX = " + emitterX + "     emitterY = " + emitterY + "     destinationX = " + destinationX + "     destinationY = " + destinationY);


var cP = 0;
var minFlySpeed = 3;
var maxFlySpeed = 6;
var Spread = 150;
var totalParticles = 25;
var genSpeed = 100;

// Create particle holder at next highest level
// this.createEmptyMovieClip("mc_empty", this.getNextHighestDepth());

function getRandom(min, max) {
	return min + (Math.random() * (max - min));
}

// Works out the angle between two points
function angleOf(x1, y1, x2, y2) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	var angle = Math.atan2(dy, dx);
	return Math.floor(toDegrees(angle));
}

// Converts radians to degrees
function toDegrees(radians) {
	var degrees = radians * 180 / Math.PI
	return degrees;
}



//Generate a particle
function genParticle(sparkleContainer) {

	var randomOffsetX = getRandom(Spread * -1, Spread);
	var randomOffsetY = getRandom(Spread * -1, Spread);
	var flySpeed = getRandom(minFlySpeed, maxFlySpeed);
//	var angleToFly = angleOf(emitter.x, emitter.y, destination.x, destination.y);
//	var angleToFly = angleOf(this.emitter.x, this.emitter.y, this.destination.x, this.destination.y);
	var angleToFly = angleOf(emitterX, emitterY, destinationX, destinationY);

	for (cP = 0; cP <= totalParticles; cP++){

		var thisSparkle = new lib.MC_sparkle();

//		this.mc_empty.addChild(thisSparkle);
		sparkleContainer.addChild(thisSparkle);

		thisSparkle.x = emitterX;
		thisSparkle.y = emitterY;
		thisSparkle.rotation = angleToFly;
		thisSparkle.scale = 50;

//		TweenLite.to(thisSparkle, flySpeed, {
//			alpha: 0,
//			x: destination.x + randomOffsetX,
//			y: destination.y + randomOffsetY,
//			scale: 100,
////			xscale: 100,
////			yscale: 100,
//			ease: Linear.easeNone,
//			onCompleteParams: [thisSparkle],
//			onComplete: deleteParticle
//		});

		if (cP == totalParticles) {
			clearInterval(makeParticles);
		}

//		console.log("PING!!! this.emitter.x = " + this.emitter.x);
//		console.log("emitterX = " + emitterX + "     emitterY = " + emitterY + "     destinationX = " + destinationX + "     destinationY = " + destinationY);

	}

}

// Delete particle when it's finished
function deleteParticle(thisSparkle) {
//	thisSparkle.unloadMovie();
//	removeChild(thisSparkle);
	this.mc_empty.removeChild(thisSparkle);
}

// Makes a particle at the start because the interval takes genTime before the first one is made.
genParticle(this.mc_empty);

// Make a particle speed set by genSpeed (generate speed)
var makeParticles = setInterval(genParticle, genSpeed);




//==================== FUNCTION starspin ====================

function starspin() {
	//	trace("");
	//	trace("PING!!! starspin()");

	TweenLite.to(mc_starspin.mc_starburst01, 20, {
		alpha: 0,
		rotation: 72,
		delay: 0,
		ease: Linear.easeNone
	});

	TweenLite.to(mc_starspin.mc_starburst02, 20, {
		alpha: 0,
		rotation: -72,
		delay: 0,
		ease: Linear.easeNone
	});
}


//==================== ANIMATION ====================
var animDuration01 = 1.5;

var animDelayFR01 = 1;
var animDelayFR02 = animDuration01 + .5;

//-------------------- GRADIENT MASKS --------------------
mc_mask.cacheAsBitmap = true;
mc_starspin.cacheAsBitmap = true;
//mc_starspin.setMask(mc_mask);
mc_starspin.mask = mc_mask;

mc_mask2.cacheAsBitmap = true;
mc_image.cacheAsBitmap = true;
//mc_image.setMask(mc_mask2);
//mc_image.mask = mc_mask2;


//==================== FRAME 01 ====================

starspin();

TweenLite.to(mc_mask, animDuration01, {
	y: 225,
	xscale: 100,
	yscale: 100,
	delay: 0,
	ease: Cubic.easeOut
});

TweenLite.to(mc_mask2, animDuration01, {
	xscale: 100,
	yscale: 100,
	delay: animDelayFR01,
	ease: Cubic.easeOut
});

TweenLite.to(mc_image, animDuration01, {
	alpha: 100,
	delay: animDelayFR01,
	ease: Cubic.easeOut
});

TweenLite.to(mc_logo, animDuration01, {
	alpha: 100,
	delay: animDelayFR01,
	ease: Cubic.easeOut
});

//loadSWF();



TweenMax.to(this.mc_starspin.mc_starburst01, 20, {alpha: 0, rotation: 72, delay: 0, ease: Linear.easeNone});

TweenMax.staggerFromTo(
	[this.mc_starspin.mc_starburst01, this.mc_starspin.mc_starburst02], 
	2.5, 
	{cycle:{rotation:["-60", "60"]}}, 
	{cycle:{rotation:["60", "-60"]}, delay:0.5}, 0)
;


//==================== FRAME 02 ====================

TweenLite.to(mc_bottle, animDuration01, {
	alpha: 100,
	delay: animDelayFR02,
	ease: Cubic.easeOut
});

TweenLite.to(mc_tag, animDuration01, {
	alpha: 100,
	delay: animDelayFR02,
	ease: Cubic.easeOut
});

TweenLite.to(btn_shop, animDuration01, {
	alpha: 100,
	delay: animDelayFR02 + .5,
	ease: Cubic.easeOut
});



stop();
