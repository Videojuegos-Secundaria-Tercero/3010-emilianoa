gdjs.FinalCode = {};
gdjs.FinalCode.GDPlayerObjects1= [];
gdjs.FinalCode.GDPlayerObjects2= [];
gdjs.FinalCode.GDPlayerObjects3= [];
gdjs.FinalCode.GDPlatformObjects1= [];
gdjs.FinalCode.GDPlatformObjects2= [];
gdjs.FinalCode.GDPlatformObjects3= [];
gdjs.FinalCode.GDTiledForestBackgroundObjects1= [];
gdjs.FinalCode.GDTiledForestBackgroundObjects2= [];
gdjs.FinalCode.GDTiledForestBackgroundObjects3= [];
gdjs.FinalCode.GDCheckpointObjects1= [];
gdjs.FinalCode.GDCheckpointObjects2= [];
gdjs.FinalCode.GDCheckpointObjects3= [];
gdjs.FinalCode.GDSmallGreenPlatformObjects1= [];
gdjs.FinalCode.GDSmallGreenPlatformObjects2= [];
gdjs.FinalCode.GDSmallGreenPlatformObjects3= [];
gdjs.FinalCode.GDScoreObjects1= [];
gdjs.FinalCode.GDScoreObjects2= [];
gdjs.FinalCode.GDScoreObjects3= [];
gdjs.FinalCode.GDGreenFloorObjects1= [];
gdjs.FinalCode.GDGreenFloorObjects2= [];
gdjs.FinalCode.GDGreenFloorObjects3= [];
gdjs.FinalCode.GDCannonBallObjects1= [];
gdjs.FinalCode.GDCannonBallObjects2= [];
gdjs.FinalCode.GDCannonBallObjects3= [];
gdjs.FinalCode.GDbg1Objects1= [];
gdjs.FinalCode.GDbg1Objects2= [];
gdjs.FinalCode.GDbg1Objects3= [];
gdjs.FinalCode.GDbg2Objects1= [];
gdjs.FinalCode.GDbg2Objects2= [];
gdjs.FinalCode.GDbg2Objects3= [];
gdjs.FinalCode.GDbg3Objects1= [];
gdjs.FinalCode.GDbg3Objects2= [];
gdjs.FinalCode.GDbg3Objects3= [];
gdjs.FinalCode.GDbg4Objects1= [];
gdjs.FinalCode.GDbg4Objects2= [];
gdjs.FinalCode.GDbg4Objects3= [];
gdjs.FinalCode.GDbg5Objects1= [];
gdjs.FinalCode.GDbg5Objects2= [];
gdjs.FinalCode.GDbg5Objects3= [];
gdjs.FinalCode.GDbg6Objects1= [];
gdjs.FinalCode.GDbg6Objects2= [];
gdjs.FinalCode.GDbg6Objects3= [];
gdjs.FinalCode.GDbg7Objects1= [];
gdjs.FinalCode.GDbg7Objects2= [];
gdjs.FinalCode.GDbg7Objects3= [];
gdjs.FinalCode.GDbg8Objects1= [];
gdjs.FinalCode.GDbg8Objects2= [];
gdjs.FinalCode.GDbg8Objects3= [];
gdjs.FinalCode.GDbg9Objects1= [];
gdjs.FinalCode.GDbg9Objects2= [];
gdjs.FinalCode.GDbg9Objects3= [];
gdjs.FinalCode.GDWallForBlueFloorObjects1= [];
gdjs.FinalCode.GDWallForBlueFloorObjects2= [];
gdjs.FinalCode.GDWallForBlueFloorObjects3= [];
gdjs.FinalCode.GDBlueLaser10Objects1= [];
gdjs.FinalCode.GDBlueLaser10Objects2= [];
gdjs.FinalCode.GDBlueLaser10Objects3= [];
gdjs.FinalCode.GDGreenLaser16Objects1= [];
gdjs.FinalCode.GDGreenLaser16Objects2= [];
gdjs.FinalCode.GDGreenLaser16Objects3= [];
gdjs.FinalCode.GDBulletObjects1= [];
gdjs.FinalCode.GDBulletObjects2= [];
gdjs.FinalCode.GDBulletObjects3= [];
gdjs.FinalCode.GDSpikedBallObjects1= [];
gdjs.FinalCode.GDSpikedBallObjects2= [];
gdjs.FinalCode.GDSpikedBallObjects3= [];
gdjs.FinalCode.GDGordonObjects1= [];
gdjs.FinalCode.GDGordonObjects2= [];
gdjs.FinalCode.GDGordonObjects3= [];
gdjs.FinalCode.GDDoorObjects1= [];
gdjs.FinalCode.GDDoorObjects2= [];
gdjs.FinalCode.GDDoorObjects3= [];
gdjs.FinalCode.GDRedLaser14Objects1= [];
gdjs.FinalCode.GDRedLaser14Objects2= [];
gdjs.FinalCode.GDRedLaser14Objects3= [];

gdjs.FinalCode.conditionTrue_0 = {val:false};
gdjs.FinalCode.condition0IsTrue_0 = {val:false};
gdjs.FinalCode.condition1IsTrue_0 = {val:false};
gdjs.FinalCode.condition2IsTrue_0 = {val:false};
gdjs.FinalCode.conditionTrue_1 = {val:false};
gdjs.FinalCode.condition0IsTrue_1 = {val:false};
gdjs.FinalCode.condition1IsTrue_1 = {val:false};
gdjs.FinalCode.condition2IsTrue_1 = {val:false};


gdjs.FinalCode.eventsList0 = function(runtimeScene) {

{


gdjs.FinalCode.condition0IsTrue_0.val = false;
{
{gdjs.FinalCode.conditionTrue_1 = gdjs.FinalCode.condition0IsTrue_0;
gdjs.FinalCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12609332);
}
}if (gdjs.FinalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 30, 1);
}}

}


};gdjs.FinalCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.FinalCode.GDPlayerObjects1, gdjs.FinalCode.GDPlayerObjects2);


gdjs.FinalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.FinalCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.FinalCode.condition0IsTrue_0.val = true;
        gdjs.FinalCode.GDPlayerObjects2[k] = gdjs.FinalCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.FinalCode.GDPlayerObjects2.length = k;}if (gdjs.FinalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.FinalCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.FinalCode.GDPlayerObjects2[i].setAnimationName("Run");
}
}}

}


{

/* Reuse gdjs.FinalCode.GDPlayerObjects1 */

gdjs.FinalCode.condition0IsTrue_0.val = false;
gdjs.FinalCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.FinalCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.FinalCode.condition0IsTrue_0.val = true;
        gdjs.FinalCode.GDPlayerObjects1[k] = gdjs.FinalCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDPlayerObjects1.length = k;}if ( gdjs.FinalCode.condition0IsTrue_0.val ) {
{
gdjs.FinalCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "b"));
}}
if (gdjs.FinalCode.condition1IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.FinalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


};gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDSpikedBallObjects2Objects = Hashtable.newFrom({"SpikedBall": gdjs.FinalCode.GDSpikedBallObjects2});gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDSpikedBallObjects1Objects = Hashtable.newFrom({"SpikedBall": gdjs.FinalCode.GDSpikedBallObjects1});gdjs.FinalCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.FinalCode.GDPlayerObjects1, gdjs.FinalCode.GDPlayerObjects2);


gdjs.FinalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.FinalCode.GDPlayerObjects2[i].isFlippedX()) ) {
        gdjs.FinalCode.condition0IsTrue_0.val = true;
        gdjs.FinalCode.GDPlayerObjects2[k] = gdjs.FinalCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.FinalCode.GDPlayerObjects2.length = k;}if (gdjs.FinalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("SpikedBall"), gdjs.FinalCode.GDSpikedBallObjects2);
{for(var i = 0, len = gdjs.FinalCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.FinalCode.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.FinalCode.GDPlayerObjects2[i].getPointX("Punto bala")), (gdjs.FinalCode.GDPlayerObjects2[i].getPointY("Punto bala")), gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDSpikedBallObjects2Objects, 0, 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.FinalCode.GDPlayerObjects1 */

gdjs.FinalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDPlayerObjects1[i].isFlippedX() ) {
        gdjs.FinalCode.condition0IsTrue_0.val = true;
        gdjs.FinalCode.GDPlayerObjects1[k] = gdjs.FinalCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDPlayerObjects1.length = k;}if (gdjs.FinalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SpikedBall"), gdjs.FinalCode.GDSpikedBallObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.FinalCode.GDPlayerObjects1[i].getPointX("Punto bala")), (gdjs.FinalCode.GDPlayerObjects1[i].getPointY("Punto bala")), gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDSpikedBallObjects1Objects, 180, 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.FinalCode.GDPlayerObjects1});gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDBlueLaser10Objects1Objects = Hashtable.newFrom({"BlueLaser10": gdjs.FinalCode.GDBlueLaser10Objects1});gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.FinalCode.GDPlayerObjects1});gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDGreenLaser16Objects1Objects = Hashtable.newFrom({"GreenLaser16": gdjs.FinalCode.GDGreenLaser16Objects1});gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.FinalCode.GDPlayerObjects1});gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDGordonObjects1Objects = Hashtable.newFrom({"Gordon": gdjs.FinalCode.GDGordonObjects1});gdjs.FinalCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.FinalCode.GDGordonObjects1, gdjs.FinalCode.GDGordonObjects2);

gdjs.copyArray(gdjs.FinalCode.GDPlayerObjects1, gdjs.FinalCode.GDPlayerObjects2);


gdjs.FinalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalCode.GDGordonObjects2.length;i<l;++i) {
    if ( gdjs.FinalCode.GDGordonObjects2[i].getX() > (( gdjs.FinalCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.FinalCode.GDPlayerObjects2[0].getPointX("")) ) {
        gdjs.FinalCode.condition0IsTrue_0.val = true;
        gdjs.FinalCode.GDGordonObjects2[k] = gdjs.FinalCode.GDGordonObjects2[i];
        ++k;
    }
}
gdjs.FinalCode.GDGordonObjects2.length = k;}if (gdjs.FinalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.FinalCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.FinalCode.GDPlayerObjects2[i].getBehavior("Tween").addObjectPositionTween("hitP", (gdjs.FinalCode.GDPlayerObjects2[i].getPointX("")) - 200, 0 - 20, "easeOutQuad", 500, false);
}
}}

}


{

/* Reuse gdjs.FinalCode.GDGordonObjects1 */
/* Reuse gdjs.FinalCode.GDPlayerObjects1 */

gdjs.FinalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalCode.GDGordonObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDGordonObjects1[i].getX() < (( gdjs.FinalCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FinalCode.GDPlayerObjects1[0].getPointX("")) ) {
        gdjs.FinalCode.condition0IsTrue_0.val = true;
        gdjs.FinalCode.GDGordonObjects1[k] = gdjs.FinalCode.GDGordonObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDGordonObjects1.length = k;}if (gdjs.FinalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.FinalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPlayerObjects1[i].getBehavior("Tween").addObjectPositionTween("hitP", (gdjs.FinalCode.GDPlayerObjects1[i].getPointX("")) + 200, 0 - 20, "easeOutQuad", 500, false);
}
}}

}


};gdjs.FinalCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.FinalCode.GDPlayerObjects1 */

gdjs.FinalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDPlayerObjects1[i].hasAnimationEnded() ) {
        gdjs.FinalCode.condition0IsTrue_0.val = true;
        gdjs.FinalCode.GDPlayerObjects1[k] = gdjs.FinalCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDPlayerObjects1.length = k;}if (gdjs.FinalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene 1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDGordonObjects1Objects = Hashtable.newFrom({"Gordon": gdjs.FinalCode.GDGordonObjects1});gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDSpikedBallObjects1Objects = Hashtable.newFrom({"SpikedBall": gdjs.FinalCode.GDSpikedBallObjects1});gdjs.FinalCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.FinalCode.GDGordonObjects1, gdjs.FinalCode.GDGordonObjects2);

gdjs.copyArray(gdjs.FinalCode.GDSpikedBallObjects1, gdjs.FinalCode.GDSpikedBallObjects2);


gdjs.FinalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalCode.GDSpikedBallObjects2.length;i<l;++i) {
    if ( gdjs.FinalCode.GDSpikedBallObjects2[i].getX() > (( gdjs.FinalCode.GDGordonObjects2.length === 0 ) ? 0 :gdjs.FinalCode.GDGordonObjects2[0].getPointX("")) ) {
        gdjs.FinalCode.condition0IsTrue_0.val = true;
        gdjs.FinalCode.GDSpikedBallObjects2[k] = gdjs.FinalCode.GDSpikedBallObjects2[i];
        ++k;
    }
}
gdjs.FinalCode.GDSpikedBallObjects2.length = k;}if (gdjs.FinalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDGordonObjects2 */
{for(var i = 0, len = gdjs.FinalCode.GDGordonObjects2.length ;i < len;++i) {
    gdjs.FinalCode.GDGordonObjects2[i].getBehavior("Tween").addObjectPositionTween("hitG", (gdjs.FinalCode.GDGordonObjects2[i].getPointX("")) - 200, (gdjs.FinalCode.GDGordonObjects2[i].getPointY("")) - 10, "easeOutQuad", 500, false);
}
}}

}


{

/* Reuse gdjs.FinalCode.GDGordonObjects1 */
/* Reuse gdjs.FinalCode.GDSpikedBallObjects1 */

gdjs.FinalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalCode.GDSpikedBallObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDSpikedBallObjects1[i].getX() < (( gdjs.FinalCode.GDGordonObjects1.length === 0 ) ? 0 :gdjs.FinalCode.GDGordonObjects1[0].getPointX("")) ) {
        gdjs.FinalCode.condition0IsTrue_0.val = true;
        gdjs.FinalCode.GDSpikedBallObjects1[k] = gdjs.FinalCode.GDSpikedBallObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDSpikedBallObjects1.length = k;}if (gdjs.FinalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDGordonObjects1 */
{for(var i = 0, len = gdjs.FinalCode.GDGordonObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDGordonObjects1[i].getBehavior("Tween").addObjectPositionTween("hitG", (gdjs.FinalCode.GDGordonObjects1[i].getPointX("")) + 200, (gdjs.FinalCode.GDGordonObjects1[i].getPointY("")) - 10, "easeOutQuad", 500, false);
}
}}

}


};gdjs.FinalCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.FinalCode.GDGordonObjects1 */

gdjs.FinalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalCode.GDGordonObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDGordonObjects1[i].hasAnimationEnded() ) {
        gdjs.FinalCode.condition0IsTrue_0.val = true;
        gdjs.FinalCode.GDGordonObjects1[k] = gdjs.FinalCode.GDGordonObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDGordonObjects1.length = k;}if (gdjs.FinalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDGordonObjects1 */
{for(var i = 0, len = gdjs.FinalCode.GDGordonObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDGordonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.FinalCode.GDPlayerObjects1});gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.FinalCode.GDDoorObjects1});gdjs.FinalCode.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.FinalCode.GDDoorObjects1 */

gdjs.FinalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalCode.GDDoorObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDDoorObjects1[i].hasAnimationEnded() ) {
        gdjs.FinalCode.condition0IsTrue_0.val = true;
        gdjs.FinalCode.GDDoorObjects1[k] = gdjs.FinalCode.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDDoorObjects1.length = k;}if (gdjs.FinalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bye", false);
}}

}


};gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.FinalCode.GDPlayerObjects1});gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDRedLaser14Objects1Objects = Hashtable.newFrom({"RedLaser14": gdjs.FinalCode.GDRedLaser14Objects1});gdjs.FinalCode.eventsList8 = function(runtimeScene) {

{


gdjs.FinalCode.condition0IsTrue_0.val = false;
{
gdjs.FinalCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.FinalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ChillMusic.mp3", true, 20, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FinalCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.FinalCode.GDScoreObjects1);
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.FinalCode.GDPlayerObjects1.length !== 0 ? gdjs.FinalCode.GDPlayerObjects1[0] : null), 0, 0, 5597, 575, true, "", 0);
}{for(var i = 0, len = gdjs.FinalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPlayerObjects1[i].setScale(1.5);
}
}{for(var i = 0, len = gdjs.FinalCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FinalCode.GDPlayerObjects1);

gdjs.FinalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.FinalCode.condition0IsTrue_0.val = true;
        gdjs.FinalCode.GDPlayerObjects1[k] = gdjs.FinalCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDPlayerObjects1.length = k;}if (gdjs.FinalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.FinalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPlayerObjects1[i].setAnimation(3);
}
}
{ //Subevents
gdjs.FinalCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FinalCode.GDPlayerObjects1);

gdjs.FinalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.FinalCode.condition0IsTrue_0.val = true;
        gdjs.FinalCode.GDPlayerObjects1[k] = gdjs.FinalCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDPlayerObjects1.length = k;}if (gdjs.FinalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.FinalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPlayerObjects1[i].setAnimationName("up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FinalCode.GDPlayerObjects1);

gdjs.FinalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.FinalCode.condition0IsTrue_0.val = true;
        gdjs.FinalCode.GDPlayerObjects1[k] = gdjs.FinalCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDPlayerObjects1.length = k;}if (gdjs.FinalCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.FinalCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.FinalCode.condition0IsTrue_0.val = false;
{
gdjs.FinalCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.FinalCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FinalCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.FinalCode.condition0IsTrue_0.val = false;
{
gdjs.FinalCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.FinalCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FinalCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.FinalCode.condition0IsTrue_0.val = false;
{
gdjs.FinalCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
}if (gdjs.FinalCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FinalCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPlayerObjects1[i].setAnimationName("Throw");
}
}
{ //Subevents
gdjs.FinalCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueLaser10"), gdjs.FinalCode.GDBlueLaser10Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FinalCode.GDPlayerObjects1);

gdjs.FinalCode.condition0IsTrue_0.val = false;
{
gdjs.FinalCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDPlayerObjects1Objects, gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDBlueLaser10Objects1Objects, false, runtimeScene, false);
}if (gdjs.FinalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDBlueLaser10Objects1 */
{for(var i = 0, len = gdjs.FinalCode.GDBlueLaser10Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDBlueLaser10Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenLaser16"), gdjs.FinalCode.GDGreenLaser16Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FinalCode.GDPlayerObjects1);

gdjs.FinalCode.condition0IsTrue_0.val = false;
{
gdjs.FinalCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDPlayerObjects1Objects, gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDGreenLaser16Objects1Objects, false, runtimeScene, false);
}if (gdjs.FinalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDGreenLaser16Objects1 */
{for(var i = 0, len = gdjs.FinalCode.GDGreenLaser16Objects1.length ;i < len;++i) {
    gdjs.FinalCode.GDGreenLaser16Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.FinalCode.GDGordonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FinalCode.GDPlayerObjects1);

gdjs.FinalCode.condition0IsTrue_0.val = false;
gdjs.FinalCode.condition1IsTrue_0.val = false;
{
gdjs.FinalCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDPlayerObjects1Objects, gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDGordonObjects1Objects, false, runtimeScene, false);
}if ( gdjs.FinalCode.condition0IsTrue_0.val ) {
{
{gdjs.FinalCode.conditionTrue_1 = gdjs.FinalCode.condition1IsTrue_0;
gdjs.FinalCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12618500);
}
}}
if (gdjs.FinalCode.condition1IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.FinalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPlayerObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.FinalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPlayerObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.FinalCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FinalCode.GDPlayerObjects1);

gdjs.FinalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDPlayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.FinalCode.condition0IsTrue_0.val = true;
        gdjs.FinalCode.GDPlayerObjects1[k] = gdjs.FinalCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDPlayerObjects1.length = k;}if (gdjs.FinalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.FinalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPlayerObjects1[i].setAnimationName("Dead");
}
}
{ //Subevents
gdjs.FinalCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.FinalCode.GDGordonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpikedBall"), gdjs.FinalCode.GDSpikedBallObjects1);

gdjs.FinalCode.condition0IsTrue_0.val = false;
gdjs.FinalCode.condition1IsTrue_0.val = false;
{
gdjs.FinalCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDGordonObjects1Objects, gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDSpikedBallObjects1Objects, false, runtimeScene, false);
}if ( gdjs.FinalCode.condition0IsTrue_0.val ) {
{
{gdjs.FinalCode.conditionTrue_1 = gdjs.FinalCode.condition1IsTrue_0;
gdjs.FinalCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12623436);
}
}}
if (gdjs.FinalCode.condition1IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDGordonObjects1 */
/* Reuse gdjs.FinalCode.GDSpikedBallObjects1 */
{for(var i = 0, len = gdjs.FinalCode.GDGordonObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDGordonObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.FinalCode.GDSpikedBallObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDSpikedBallObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.FinalCode.GDGordonObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDGordonObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.FinalCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.FinalCode.GDGordonObjects1);

gdjs.FinalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalCode.GDGordonObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDGordonObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.FinalCode.condition0IsTrue_0.val = true;
        gdjs.FinalCode.GDGordonObjects1[k] = gdjs.FinalCode.GDGordonObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDGordonObjects1.length = k;}if (gdjs.FinalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDGordonObjects1 */
{for(var i = 0, len = gdjs.FinalCode.GDGordonObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDGordonObjects1[i].setAnimationName("Hurt");
}
}
{ //Subevents
gdjs.FinalCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.FinalCode.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FinalCode.GDPlayerObjects1);

gdjs.FinalCode.condition0IsTrue_0.val = false;
{
gdjs.FinalCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDPlayerObjects1Objects, gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDDoorObjects1Objects, false, runtimeScene, false);
}if (gdjs.FinalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDDoorObjects1 */
{for(var i = 0, len = gdjs.FinalCode.GDDoorObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDDoorObjects1[i].setAnimationName("Open");
}
}
{ //Subevents
gdjs.FinalCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FinalCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser14"), gdjs.FinalCode.GDRedLaser14Objects1);

gdjs.FinalCode.condition0IsTrue_0.val = false;
{
gdjs.FinalCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDPlayerObjects1Objects, gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDRedLaser14Objects1Objects, false, runtimeScene, false);
}if (gdjs.FinalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.FinalCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene 1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};

gdjs.FinalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinalCode.GDPlayerObjects1.length = 0;
gdjs.FinalCode.GDPlayerObjects2.length = 0;
gdjs.FinalCode.GDPlayerObjects3.length = 0;
gdjs.FinalCode.GDPlatformObjects1.length = 0;
gdjs.FinalCode.GDPlatformObjects2.length = 0;
gdjs.FinalCode.GDPlatformObjects3.length = 0;
gdjs.FinalCode.GDTiledForestBackgroundObjects1.length = 0;
gdjs.FinalCode.GDTiledForestBackgroundObjects2.length = 0;
gdjs.FinalCode.GDTiledForestBackgroundObjects3.length = 0;
gdjs.FinalCode.GDCheckpointObjects1.length = 0;
gdjs.FinalCode.GDCheckpointObjects2.length = 0;
gdjs.FinalCode.GDCheckpointObjects3.length = 0;
gdjs.FinalCode.GDSmallGreenPlatformObjects1.length = 0;
gdjs.FinalCode.GDSmallGreenPlatformObjects2.length = 0;
gdjs.FinalCode.GDSmallGreenPlatformObjects3.length = 0;
gdjs.FinalCode.GDScoreObjects1.length = 0;
gdjs.FinalCode.GDScoreObjects2.length = 0;
gdjs.FinalCode.GDScoreObjects3.length = 0;
gdjs.FinalCode.GDGreenFloorObjects1.length = 0;
gdjs.FinalCode.GDGreenFloorObjects2.length = 0;
gdjs.FinalCode.GDGreenFloorObjects3.length = 0;
gdjs.FinalCode.GDCannonBallObjects1.length = 0;
gdjs.FinalCode.GDCannonBallObjects2.length = 0;
gdjs.FinalCode.GDCannonBallObjects3.length = 0;
gdjs.FinalCode.GDbg1Objects1.length = 0;
gdjs.FinalCode.GDbg1Objects2.length = 0;
gdjs.FinalCode.GDbg1Objects3.length = 0;
gdjs.FinalCode.GDbg2Objects1.length = 0;
gdjs.FinalCode.GDbg2Objects2.length = 0;
gdjs.FinalCode.GDbg2Objects3.length = 0;
gdjs.FinalCode.GDbg3Objects1.length = 0;
gdjs.FinalCode.GDbg3Objects2.length = 0;
gdjs.FinalCode.GDbg3Objects3.length = 0;
gdjs.FinalCode.GDbg4Objects1.length = 0;
gdjs.FinalCode.GDbg4Objects2.length = 0;
gdjs.FinalCode.GDbg4Objects3.length = 0;
gdjs.FinalCode.GDbg5Objects1.length = 0;
gdjs.FinalCode.GDbg5Objects2.length = 0;
gdjs.FinalCode.GDbg5Objects3.length = 0;
gdjs.FinalCode.GDbg6Objects1.length = 0;
gdjs.FinalCode.GDbg6Objects2.length = 0;
gdjs.FinalCode.GDbg6Objects3.length = 0;
gdjs.FinalCode.GDbg7Objects1.length = 0;
gdjs.FinalCode.GDbg7Objects2.length = 0;
gdjs.FinalCode.GDbg7Objects3.length = 0;
gdjs.FinalCode.GDbg8Objects1.length = 0;
gdjs.FinalCode.GDbg8Objects2.length = 0;
gdjs.FinalCode.GDbg8Objects3.length = 0;
gdjs.FinalCode.GDbg9Objects1.length = 0;
gdjs.FinalCode.GDbg9Objects2.length = 0;
gdjs.FinalCode.GDbg9Objects3.length = 0;
gdjs.FinalCode.GDWallForBlueFloorObjects1.length = 0;
gdjs.FinalCode.GDWallForBlueFloorObjects2.length = 0;
gdjs.FinalCode.GDWallForBlueFloorObjects3.length = 0;
gdjs.FinalCode.GDBlueLaser10Objects1.length = 0;
gdjs.FinalCode.GDBlueLaser10Objects2.length = 0;
gdjs.FinalCode.GDBlueLaser10Objects3.length = 0;
gdjs.FinalCode.GDGreenLaser16Objects1.length = 0;
gdjs.FinalCode.GDGreenLaser16Objects2.length = 0;
gdjs.FinalCode.GDGreenLaser16Objects3.length = 0;
gdjs.FinalCode.GDBulletObjects1.length = 0;
gdjs.FinalCode.GDBulletObjects2.length = 0;
gdjs.FinalCode.GDBulletObjects3.length = 0;
gdjs.FinalCode.GDSpikedBallObjects1.length = 0;
gdjs.FinalCode.GDSpikedBallObjects2.length = 0;
gdjs.FinalCode.GDSpikedBallObjects3.length = 0;
gdjs.FinalCode.GDGordonObjects1.length = 0;
gdjs.FinalCode.GDGordonObjects2.length = 0;
gdjs.FinalCode.GDGordonObjects3.length = 0;
gdjs.FinalCode.GDDoorObjects1.length = 0;
gdjs.FinalCode.GDDoorObjects2.length = 0;
gdjs.FinalCode.GDDoorObjects3.length = 0;
gdjs.FinalCode.GDRedLaser14Objects1.length = 0;
gdjs.FinalCode.GDRedLaser14Objects2.length = 0;
gdjs.FinalCode.GDRedLaser14Objects3.length = 0;

gdjs.FinalCode.eventsList8(runtimeScene);
return;

}

gdjs['FinalCode'] = gdjs.FinalCode;
