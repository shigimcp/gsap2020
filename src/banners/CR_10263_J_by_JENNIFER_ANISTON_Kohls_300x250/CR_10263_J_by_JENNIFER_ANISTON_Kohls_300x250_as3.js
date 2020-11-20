//==================== IMPORT CLASSES ====================
import com.greensock.TweenNano;
import com.greensock.easing.Cubic;
//import com.greensock.plugins.*;
//import com.greensock.OverwriteManager;

//TweenPlugin.activate([TintPlugin]);
//
//OverwriteManager.init(3);
//OverwriteManager.mode = OverwriteManager.CONCURRENT;
//
//import com.greensock.plugins.TweenPlugin; 
//import com.greensock.plugins.GlowFilterPlugin; 
//TweenPlugin.activate([GlowFilterPlugin]); //activation is permanent in the SWF, so this line only needs to be run once.



////==================== RANDOM NUMBER in range ====================
//
//function randRange(min:Number, max:Number) {
//	liteIndex = min + Math.round(Math.random()*(max-min));
////	trace("liteIndex = " + liteIndex);
//	return liteIndex;
//}
//
//function randRange2(min:Number, max:Number) {
//	liteIndex = min + Math.random()*(max-min);
////	trace("liteIndex = " + liteIndex);
//	return liteIndex;
//}



//==================== SNOW ====================

/*----- AS3 Tutorial by Dan Gries for flashandmath.com - www.flashandmath.com - dan@flashandmath.com -----*/

import com.flashandmath.dg.display.SnowDisplayAlt;
import flash.display.Shape;
import flash.geom.Matrix;

var snowTop:SnowDisplayAlt;
var snowBtm:SnowDisplayAlt;

function snow():void {
	
	snowTop = new SnowDisplayAlt();

// NOTE: also be sure to change the dimensions at line 90 in com/flashandmath/dg/displaySnowDisplayAlt.as
	snowTop.x = 300;
	snowTop.y = 125;

// NOTE: this is a dirty solution to vertically match the DOWNWARD falling "snow". i.e. this is a duplicate SnowDisplayAlt() made to flow UPWARDS
	snowTop.scaleX = -1;
	snowTop.scaleY = -1;
		
	snowTop.perlinBitmapFront.x = snowTop.x;
	snowTop.perlinBitmapFront.y = snowTop.y + snowTop.display.displayHeight + 5;

	snowTop.perlinBitmapBack.x = snowTop.x + snowTop.perlinBitmapFront.width + 5;
	snowTop.perlinBitmapBack.y = snowTop.y + snowTop.display.displayHeight + 5;

	
	snowBtm = new SnowDisplayAlt();
	snowBtm.x = 0;
	snowBtm.y = 125;
		
	snowBtm.perlinBitmapFront.x = snowBtm.x;
	snowBtm.perlinBitmapFront.y = snowBtm.y + snowBtm.display.displayHeight + 5;

	snowBtm.perlinBitmapBack.x = snowBtm.x + snowBtm.perlinBitmapFront.width + 5;
	snowBtm.perlinBitmapBack.y = snowBtm.y + snowBtm.display.displayHeight + 5;

	mc_empty.addChild(snowTop);
	mc_empty.addChild(snowBtm);
}



//==================== WATER ====================

//var bm:BitmapData = new BitmapData(img_mc.width, img_mc.height);
//var disp:DisplacementMapFilter = new DisplacementMapFilter(bm,new Point(0,0),1,2,20,25, DisplacementMapFilterMode.CLAMP);
//var offsets:Array = [new Point(0, 0), new Point(0, 0)];

var bm:BitmapData = new BitmapData(stage.stageWidth, stage.stageHeight);
//var bm:BitmapData = new BitmapData(mc_copy02_wave.width, mc_copy02_wave.height);
var disp:DisplacementMapFilter = new DisplacementMapFilter(bm, new Point(0,0), 1, 200, 10, 25, DisplacementMapFilterMode.CLAMP);
var offsets:Array = [new Point(0, 0), new Point(0, 0)];

addEventListener(Event.ENTER_FRAME, doUpdate);

function doUpdate(evt:Event):void {
	offsets[0].x -= 1;
	offsets[1].y -= 1;
	bm.perlinNoise(45, 20, 2 ,50, true, false, 7, true, offsets);
	mc_copy02_wave.filters=[disp];
}


//==================== ANIMATION ====================
var animDuration01:Number = .5;
var animDuration02:Number = 1;
var animDuration03:Number = 1.5;
var animDuration04:Number = 2;
var animDuration05:Number = 2.5;
var animDuration06:Number = 3;
var animDuration07:Number = 3.5;
var animDuration08:Number = 4;
var animDuration09:Number = 5.5;
var animDuration10:Number = 6;
var animDuration11:Number = 6.5;

var animDelayFR1:Number = .5;
var animDelayFR2:Number = animDelayFR1 + animDuration04 + .5;
var animDelayFR3:Number = animDelayFR2 + animDuration06 + animDuration02 + .25;
var animDelayFR4:Number = animDelayFR3 + animDuration03 + 1;


////-------------------- GRADIENT MASK - AS2 --------------------
//mc_ko.cacheAsBitmap = true;
//mc_empty.cacheAsBitmap = true;
//mc_empty.setMask(mc_ko);

////-------------------- GRADIENT MASK - AS3 --------------------
//mc_mask.cacheAsBitmap = true;
//mc_empty.cacheAsBitmap = true;
//mc_empty.mask = mc_mask;



//==================== FRAME 01 ====================

//-------------------- GRADIENT MASK - AS3 --------------------
mc_mask.cacheAsBitmap = true;
mc_empty.cacheAsBitmap = true;
mc_empty.mask = mc_mask;

snow();

TweenNano.to(mc_mask, animDuration02, {scaleY:1, delay:animDelayFR1, ease:Cubic.easeOut});
TweenNano.to(mc_copy01, animDuration04, {alpha:1, delay:animDelayFR1, ease:Cubic.easeOut});

TweenNano.to(mc_mask, animDuration02, {scaleY:0, delay:animDelayFR1 + animDuration02, ease:Cubic.easeOut});


//==================== FRAME 02 ====================

//TweenNano.to(mc_empty, animDuration02, {alpha:0, delay:animDelayFR2, ease:Cubic.easeOut});
TweenNano.to(mc_copy01, animDuration08, {alpha:0, delay:animDelayFR2, ease:Cubic.easeOut});

TweenNano.to(mc_copy02_wave, animDuration06, {alpha:.5, delay:animDelayFR2 - 2, ease:Cubic.easeIn});

TweenNano.to(mc_copy02, animDuration04, {alpha:1, delay:animDelayFR2 + animDuration04 - .5, ease:Cubic.easeOut});
TweenNano.to(mc_copy02_wave, animDuration02, {alpha:0, delay:animDelayFR2 + animDuration04, ease:Cubic.easeIn});


//==================== FRAME 03 ====================

TweenNano.to(mc_copy02, animDuration03, {alpha:0, delay:animDelayFR3, ease:Cubic.easeOut});

TweenNano.to(mc_bottle, animDuration03, {y:140, scaleX:1, scaleY:1, alpha:1, delay:animDelayFR3, ease:Cubic.easeOut});
TweenNano.to(mc_logo, animDuration03, {alpha:1, delay:animDelayFR3 + .5, ease:Cubic.easeOut});


//==================== FRAME 04 ====================

TweenNano.to(mc_image, animDuration03, {x:0, alpha:1, delay:animDelayFR4, ease:Cubic.easeOut});

//TweenNano.to(mc_logo, animDuration03, {x:225, y:40, scaleX:.725, scaleY:.725, alpha:1, delay:animDelayFR4, ease:Cubic.easeOut});
TweenNano.to(mc_logo, animDuration03, {x:225, y:40, scaleX:.725, scaleY:.725, alpha:1, delay:animDelayFR4, ease:Cubic.easeOut, onComplete:swapLogo});
TweenNano.to(mc_bottle, animDuration03, {x:225, y:125, scaleX:.725, scaleY:.725, alpha:1, delay:animDelayFR4, ease:Cubic.easeOut});

TweenNano.to(btn_shop, animDuration01, {alpha:1, delay:animDelayFR4 + 1, ease:Cubic.easeOut});


function swapLogo():void {
	TweenNano.to(mc_logo, 0, {alpha:0, delay:0, ease:Cubic.easeOut});
	TweenNano.to(mc_logo_sm, 0, {alpha:1, delay:0, ease:Cubic.easeOut});
}




//setTimeout(loadSWF, animDelayFR2 * 1000)


////==================== AS2 ====================
//
//function loadSWF():Void {
//	loadMovie("CR_11155_MINAJESTY_2014_US_DIGITAL_300x250_walmart_b.swf", mc_loadSWF);
////	loadMovie("img/CR_11155_MINAJESTY_2014_US_DIGITAL_300x250_walmart_b.swf", mc_loadSWF);
//}


////==================== AS3 ====================
//
//function loadSWF() {
//	var swfLoader:Loader = new Loader();
//	var url:URLRequest = new URLRequest("CR_11155_MINAJESTY_2014_US_DIGITAL_300x250_walmart_b.swf");
////	var url:URLRequest = new URLRequest("img/CR_11155_MINAJESTY_2014_US_DIGITAL_300x250_walmart_b.swf");
//
//	swfLoader.load(url);
//	mc_loadSWF.addChild(swfLoader);
//}


//==================== CLICKTAG ====================

clickthrough_btn.addEventListener(MouseEvent.MOUSE_UP, function(event: MouseEvent): void {
	var sURL: String;
	if ((sURL = root.loaderInfo.parameters.clickTag)) {
		navigateToURL(new URLRequest(sURL), "_blank");
	}
});


stop();