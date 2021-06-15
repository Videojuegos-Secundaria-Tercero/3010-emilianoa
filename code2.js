gdjs.New_32scene_322Code = {};
gdjs.New_32scene_322Code.GDPlayerObjects1= [];
gdjs.New_32scene_322Code.GDPlayerObjects2= [];
gdjs.New_32scene_322Code.GDPlayerObjects3= [];
gdjs.New_32scene_322Code.GDPlatformObjects1= [];
gdjs.New_32scene_322Code.GDPlatformObjects2= [];
gdjs.New_32scene_322Code.GDPlatformObjects3= [];
gdjs.New_32scene_322Code.GDTiledForestBackgroundObjects1= [];
gdjs.New_32scene_322Code.GDTiledForestBackgroundObjects2= [];
gdjs.New_32scene_322Code.GDTiledForestBackgroundObjects3= [];
gdjs.New_32scene_322Code.GDCheckpointObjects1= [];
gdjs.New_32scene_322Code.GDCheckpointObjects2= [];
gdjs.New_32scene_322Code.GDCheckpointObjects3= [];
gdjs.New_32scene_322Code.GDSmallGreenPlatformObjects1= [];
gdjs.New_32scene_322Code.GDSmallGreenPlatformObjects2= [];
gdjs.New_32scene_322Code.GDSmallGreenPlatformObjects3= [];
gdjs.New_32scene_322Code.GDScoreObjects1= [];
gdjs.New_32scene_322Code.GDScoreObjects2= [];
gdjs.New_32scene_322Code.GDScoreObjects3= [];
gdjs.New_32scene_322Code.GDGreenFloorObjects1= [];
gdjs.New_32scene_322Code.GDGreenFloorObjects2= [];
gdjs.New_32scene_322Code.GDGreenFloorObjects3= [];
gdjs.New_32scene_322Code.GDCannonBallObjects1= [];
gdjs.New_32scene_322Code.GDCannonBallObjects2= [];
gdjs.New_32scene_322Code.GDCannonBallObjects3= [];
gdjs.New_32scene_322Code.GDbg1Objects1= [];
gdjs.New_32scene_322Code.GDbg1Objects2= [];
gdjs.New_32scene_322Code.GDbg1Objects3= [];
gdjs.New_32scene_322Code.GDbg2Objects1= [];
gdjs.New_32scene_322Code.GDbg2Objects2= [];
gdjs.New_32scene_322Code.GDbg2Objects3= [];
gdjs.New_32scene_322Code.GDbg3Objects1= [];
gdjs.New_32scene_322Code.GDbg3Objects2= [];
gdjs.New_32scene_322Code.GDbg3Objects3= [];
gdjs.New_32scene_322Code.GDbg4Objects1= [];
gdjs.New_32scene_322Code.GDbg4Objects2= [];
gdjs.New_32scene_322Code.GDbg4Objects3= [];
gdjs.New_32scene_322Code.GDbg5Objects1= [];
gdjs.New_32scene_322Code.GDbg5Objects2= [];
gdjs.New_32scene_322Code.GDbg5Objects3= [];
gdjs.New_32scene_322Code.GDbg6Objects1= [];
gdjs.New_32scene_322Code.GDbg6Objects2= [];
gdjs.New_32scene_322Code.GDbg6Objects3= [];
gdjs.New_32scene_322Code.GDbg7Objects1= [];
gdjs.New_32scene_322Code.GDbg7Objects2= [];
gdjs.New_32scene_322Code.GDbg7Objects3= [];
gdjs.New_32scene_322Code.GDbg8Objects1= [];
gdjs.New_32scene_322Code.GDbg8Objects2= [];
gdjs.New_32scene_322Code.GDbg8Objects3= [];
gdjs.New_32scene_322Code.GDbg9Objects1= [];
gdjs.New_32scene_322Code.GDbg9Objects2= [];
gdjs.New_32scene_322Code.GDbg9Objects3= [];
gdjs.New_32scene_322Code.GDWallForBlueFloorObjects1= [];
gdjs.New_32scene_322Code.GDWallForBlueFloorObjects2= [];
gdjs.New_32scene_322Code.GDWallForBlueFloorObjects3= [];
gdjs.New_32scene_322Code.GDBlueLaser10Objects1= [];
gdjs.New_32scene_322Code.GDBlueLaser10Objects2= [];
gdjs.New_32scene_322Code.GDBlueLaser10Objects3= [];
gdjs.New_32scene_322Code.GDGreenLaser16Objects1= [];
gdjs.New_32scene_322Code.GDGreenLaser16Objects2= [];
gdjs.New_32scene_322Code.GDGreenLaser16Objects3= [];
gdjs.New_32scene_322Code.GDBulletObjects1= [];
gdjs.New_32scene_322Code.GDBulletObjects2= [];
gdjs.New_32scene_322Code.GDBulletObjects3= [];
gdjs.New_32scene_322Code.GDSpikedBallObjects1= [];
gdjs.New_32scene_322Code.GDSpikedBallObjects2= [];
gdjs.New_32scene_322Code.GDSpikedBallObjects3= [];
gdjs.New_32scene_322Code.GDGordonObjects1= [];
gdjs.New_32scene_322Code.GDGordonObjects2= [];
gdjs.New_32scene_322Code.GDGordonObjects3= [];
gdjs.New_32scene_322Code.GDDoorObjects1= [];
gdjs.New_32scene_322Code.GDDoorObjects2= [];
gdjs.New_32scene_322Code.GDDoorObjects3= [];
gdjs.New_32scene_322Code.GDBlueLaser03Objects1= [];
gdjs.New_32scene_322Code.GDBlueLaser03Objects2= [];
gdjs.New_32scene_322Code.GDBlueLaser03Objects3= [];

gdjs.New_32scene_322Code.conditionTrue_0 = {val:false};
gdjs.New_32scene_322Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene_322Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene_322Code.condition2IsTrue_0 = {val:false};
gdjs.New_32scene_322Code.conditionTrue_1 = {val:false};
gdjs.New_32scene_322Code.condition0IsTrue_1 = {val:false};
gdjs.New_32scene_322Code.condition1IsTrue_1 = {val:false};
gdjs.New_32scene_322Code.condition2IsTrue_1 = {val:false};


gdjs.New_32scene_322Code.eventsList0 = function(runtimeScene) {

{


gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
{gdjs.New_32scene_322Code.conditionTrue_1 = gdjs.New_32scene_322Code.condition0IsTrue_0;
gdjs.New_32scene_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12761732);
}
}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 30, 1);
}}

}


};gdjs.New_32scene_322Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32scene_322Code.GDPlayerObjects1, gdjs.New_32scene_322Code.GDPlayerObjects2);


gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene_322Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.New_32scene_322Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32scene_322Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene_322Code.GDPlayerObjects2[k] = gdjs.New_32scene_322Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.New_32scene_322Code.GDPlayerObjects2.length = k;}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.New_32scene_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDPlayerObjects2[i].setAnimationName("Run");
}
}}

}


{

/* Reuse gdjs.New_32scene_322Code.GDPlayerObjects1 */

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
gdjs.New_32scene_322Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32scene_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32scene_322Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene_322Code.GDPlayerObjects1[k] = gdjs.New_32scene_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32scene_322Code.GDPlayerObjects1.length = k;}if ( gdjs.New_32scene_322Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene_322Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "b"));
}}
if (gdjs.New_32scene_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32scene_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


};gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDSpikedBallObjects2Objects = Hashtable.newFrom({"SpikedBall": gdjs.New_32scene_322Code.GDSpikedBallObjects2});gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDSpikedBallObjects1Objects = Hashtable.newFrom({"SpikedBall": gdjs.New_32scene_322Code.GDSpikedBallObjects1});gdjs.New_32scene_322Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32scene_322Code.GDPlayerObjects1, gdjs.New_32scene_322Code.GDPlayerObjects2);


gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene_322Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.New_32scene_322Code.GDPlayerObjects2[i].isFlippedX()) ) {
        gdjs.New_32scene_322Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene_322Code.GDPlayerObjects2[k] = gdjs.New_32scene_322Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.New_32scene_322Code.GDPlayerObjects2.length = k;}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("SpikedBall"), gdjs.New_32scene_322Code.GDSpikedBallObjects2);
{for(var i = 0, len = gdjs.New_32scene_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.New_32scene_322Code.GDPlayerObjects2[i].getPointX("Punto bala")), (gdjs.New_32scene_322Code.GDPlayerObjects2[i].getPointY("Punto bala")), gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDSpikedBallObjects2Objects, 0, 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.New_32scene_322Code.GDPlayerObjects1 */

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene_322Code.GDPlayerObjects1[i].isFlippedX() ) {
        gdjs.New_32scene_322Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene_322Code.GDPlayerObjects1[k] = gdjs.New_32scene_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32scene_322Code.GDPlayerObjects1.length = k;}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SpikedBall"), gdjs.New_32scene_322Code.GDSpikedBallObjects1);
{for(var i = 0, len = gdjs.New_32scene_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.New_32scene_322Code.GDPlayerObjects1[i].getPointX("Punto bala")), (gdjs.New_32scene_322Code.GDPlayerObjects1[i].getPointY("Punto bala")), gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDSpikedBallObjects1Objects, 180, 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32scene_322Code.GDPlayerObjects1});gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDBlueLaser10Objects1Objects = Hashtable.newFrom({"BlueLaser10": gdjs.New_32scene_322Code.GDBlueLaser10Objects1});gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32scene_322Code.GDPlayerObjects1});gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDGreenLaser16Objects1Objects = Hashtable.newFrom({"GreenLaser16": gdjs.New_32scene_322Code.GDGreenLaser16Objects1});gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32scene_322Code.GDPlayerObjects1});gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDGordonObjects1Objects = Hashtable.newFrom({"Gordon": gdjs.New_32scene_322Code.GDGordonObjects1});gdjs.New_32scene_322Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32scene_322Code.GDGordonObjects1, gdjs.New_32scene_322Code.GDGordonObjects2);

gdjs.copyArray(gdjs.New_32scene_322Code.GDPlayerObjects1, gdjs.New_32scene_322Code.GDPlayerObjects2);


gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene_322Code.GDGordonObjects2.length;i<l;++i) {
    if ( gdjs.New_32scene_322Code.GDGordonObjects2[i].getX() > (( gdjs.New_32scene_322Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.New_32scene_322Code.GDPlayerObjects2[0].getPointX("")) ) {
        gdjs.New_32scene_322Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene_322Code.GDGordonObjects2[k] = gdjs.New_32scene_322Code.GDGordonObjects2[i];
        ++k;
    }
}
gdjs.New_32scene_322Code.GDGordonObjects2.length = k;}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.New_32scene_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDPlayerObjects2[i].getBehavior("Tween").addObjectPositionTween("hitP", (gdjs.New_32scene_322Code.GDPlayerObjects2[i].getPointX("")) - 200, 0 - 20, "easeOutQuad", 500, false);
}
}}

}


{

/* Reuse gdjs.New_32scene_322Code.GDGordonObjects1 */
/* Reuse gdjs.New_32scene_322Code.GDPlayerObjects1 */

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene_322Code.GDGordonObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene_322Code.GDGordonObjects1[i].getX() < (( gdjs.New_32scene_322Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32scene_322Code.GDPlayerObjects1[0].getPointX("")) ) {
        gdjs.New_32scene_322Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene_322Code.GDGordonObjects1[k] = gdjs.New_32scene_322Code.GDGordonObjects1[i];
        ++k;
    }
}
gdjs.New_32scene_322Code.GDGordonObjects1.length = k;}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32scene_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDPlayerObjects1[i].getBehavior("Tween").addObjectPositionTween("hitP", (gdjs.New_32scene_322Code.GDPlayerObjects1[i].getPointX("")) + 200, 0 - 20, "easeOutQuad", 500, false);
}
}}

}


};gdjs.New_32scene_322Code.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.New_32scene_322Code.GDPlayerObjects1 */

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene_322Code.GDPlayerObjects1[i].hasAnimationEnded() ) {
        gdjs.New_32scene_322Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene_322Code.GDPlayerObjects1[k] = gdjs.New_32scene_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32scene_322Code.GDPlayerObjects1.length = k;}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene 1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDGordonObjects1Objects = Hashtable.newFrom({"Gordon": gdjs.New_32scene_322Code.GDGordonObjects1});gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDSpikedBallObjects1Objects = Hashtable.newFrom({"SpikedBall": gdjs.New_32scene_322Code.GDSpikedBallObjects1});gdjs.New_32scene_322Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32scene_322Code.GDGordonObjects1, gdjs.New_32scene_322Code.GDGordonObjects2);

gdjs.copyArray(gdjs.New_32scene_322Code.GDSpikedBallObjects1, gdjs.New_32scene_322Code.GDSpikedBallObjects2);


gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene_322Code.GDSpikedBallObjects2.length;i<l;++i) {
    if ( gdjs.New_32scene_322Code.GDSpikedBallObjects2[i].getX() > (( gdjs.New_32scene_322Code.GDGordonObjects2.length === 0 ) ? 0 :gdjs.New_32scene_322Code.GDGordonObjects2[0].getPointX("")) ) {
        gdjs.New_32scene_322Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene_322Code.GDSpikedBallObjects2[k] = gdjs.New_32scene_322Code.GDSpikedBallObjects2[i];
        ++k;
    }
}
gdjs.New_32scene_322Code.GDSpikedBallObjects2.length = k;}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDGordonObjects2 */
{for(var i = 0, len = gdjs.New_32scene_322Code.GDGordonObjects2.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDGordonObjects2[i].getBehavior("Tween").addObjectPositionTween("hitG", (gdjs.New_32scene_322Code.GDGordonObjects2[i].getPointX("")) - 200, (gdjs.New_32scene_322Code.GDGordonObjects2[i].getPointY("")) - 10, "easeOutQuad", 500, false);
}
}}

}


{

/* Reuse gdjs.New_32scene_322Code.GDGordonObjects1 */
/* Reuse gdjs.New_32scene_322Code.GDSpikedBallObjects1 */

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene_322Code.GDSpikedBallObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene_322Code.GDSpikedBallObjects1[i].getX() < (( gdjs.New_32scene_322Code.GDGordonObjects1.length === 0 ) ? 0 :gdjs.New_32scene_322Code.GDGordonObjects1[0].getPointX("")) ) {
        gdjs.New_32scene_322Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene_322Code.GDSpikedBallObjects1[k] = gdjs.New_32scene_322Code.GDSpikedBallObjects1[i];
        ++k;
    }
}
gdjs.New_32scene_322Code.GDSpikedBallObjects1.length = k;}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDGordonObjects1 */
{for(var i = 0, len = gdjs.New_32scene_322Code.GDGordonObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDGordonObjects1[i].getBehavior("Tween").addObjectPositionTween("hitG", (gdjs.New_32scene_322Code.GDGordonObjects1[i].getPointX("")) + 200, (gdjs.New_32scene_322Code.GDGordonObjects1[i].getPointY("")) - 10, "easeOutQuad", 500, false);
}
}}

}


};gdjs.New_32scene_322Code.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.New_32scene_322Code.GDGordonObjects1 */

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene_322Code.GDGordonObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene_322Code.GDGordonObjects1[i].hasAnimationEnded() ) {
        gdjs.New_32scene_322Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene_322Code.GDGordonObjects1[k] = gdjs.New_32scene_322Code.GDGordonObjects1[i];
        ++k;
    }
}
gdjs.New_32scene_322Code.GDGordonObjects1.length = k;}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDGordonObjects1 */
{for(var i = 0, len = gdjs.New_32scene_322Code.GDGordonObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDGordonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32scene_322Code.GDPlayerObjects1});gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.New_32scene_322Code.GDDoorObjects1});gdjs.New_32scene_322Code.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.New_32scene_322Code.GDDoorObjects1 */

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene_322Code.GDDoorObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene_322Code.GDDoorObjects1[i].hasAnimationEnded() ) {
        gdjs.New_32scene_322Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene_322Code.GDDoorObjects1[k] = gdjs.New_32scene_322Code.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.New_32scene_322Code.GDDoorObjects1.length = k;}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Final", false);
}}

}


};gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32scene_322Code.GDPlayerObjects1});gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDBlueLaser03Objects1Objects = Hashtable.newFrom({"BlueLaser03": gdjs.New_32scene_322Code.GDBlueLaser03Objects1});gdjs.New_32scene_322Code.eventsList8 = function(runtimeScene) {

{


gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ChillMusic.mp3", true, 20, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene_322Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.New_32scene_322Code.GDScoreObjects1);
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.New_32scene_322Code.GDPlayerObjects1.length !== 0 ? gdjs.New_32scene_322Code.GDPlayerObjects1[0] : null), 0, 0, 5597, 575, true, "", 0);
}{for(var i = 0, len = gdjs.New_32scene_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDPlayerObjects1[i].setScale(1.5);
}
}{for(var i = 0, len = gdjs.New_32scene_322Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene_322Code.GDPlayerObjects1);

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32scene_322Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene_322Code.GDPlayerObjects1[k] = gdjs.New_32scene_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32scene_322Code.GDPlayerObjects1.length = k;}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32scene_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDPlayerObjects1[i].setAnimation(3);
}
}
{ //Subevents
gdjs.New_32scene_322Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene_322Code.GDPlayerObjects1);

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.New_32scene_322Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene_322Code.GDPlayerObjects1[k] = gdjs.New_32scene_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32scene_322Code.GDPlayerObjects1.length = k;}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32scene_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDPlayerObjects1[i].setAnimationName("up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene_322Code.GDPlayerObjects1);

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32scene_322Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene_322Code.GDPlayerObjects1[k] = gdjs.New_32scene_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32scene_322Code.GDPlayerObjects1.length = k;}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32scene_322Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene_322Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32scene_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene_322Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32scene_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene_322Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32scene_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDPlayerObjects1[i].setAnimationName("Throw");
}
}
{ //Subevents
gdjs.New_32scene_322Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueLaser10"), gdjs.New_32scene_322Code.GDBlueLaser10Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene_322Code.GDPlayerObjects1);

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDPlayerObjects1Objects, gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDBlueLaser10Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDBlueLaser10Objects1 */
{for(var i = 0, len = gdjs.New_32scene_322Code.GDBlueLaser10Objects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDBlueLaser10Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenLaser16"), gdjs.New_32scene_322Code.GDGreenLaser16Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene_322Code.GDPlayerObjects1);

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDPlayerObjects1Objects, gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDGreenLaser16Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDGreenLaser16Objects1 */
{for(var i = 0, len = gdjs.New_32scene_322Code.GDGreenLaser16Objects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDGreenLaser16Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.New_32scene_322Code.GDGordonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene_322Code.GDPlayerObjects1);

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
gdjs.New_32scene_322Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDPlayerObjects1Objects, gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDGordonObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene_322Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene_322Code.conditionTrue_1 = gdjs.New_32scene_322Code.condition1IsTrue_0;
gdjs.New_32scene_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12770900);
}
}}
if (gdjs.New_32scene_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32scene_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDPlayerObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32scene_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDPlayerObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.New_32scene_322Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene_322Code.GDPlayerObjects1);

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene_322Code.GDPlayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32scene_322Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene_322Code.GDPlayerObjects1[k] = gdjs.New_32scene_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32scene_322Code.GDPlayerObjects1.length = k;}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32scene_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDPlayerObjects1[i].setAnimationName("Dead");
}
}
{ //Subevents
gdjs.New_32scene_322Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.New_32scene_322Code.GDGordonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpikedBall"), gdjs.New_32scene_322Code.GDSpikedBallObjects1);

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
gdjs.New_32scene_322Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDGordonObjects1Objects, gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDSpikedBallObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene_322Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene_322Code.conditionTrue_1 = gdjs.New_32scene_322Code.condition1IsTrue_0;
gdjs.New_32scene_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12775836);
}
}}
if (gdjs.New_32scene_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDGordonObjects1 */
/* Reuse gdjs.New_32scene_322Code.GDSpikedBallObjects1 */
{for(var i = 0, len = gdjs.New_32scene_322Code.GDGordonObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDGordonObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32scene_322Code.GDSpikedBallObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDSpikedBallObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32scene_322Code.GDGordonObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDGordonObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.New_32scene_322Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.New_32scene_322Code.GDGordonObjects1);

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene_322Code.GDGordonObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene_322Code.GDGordonObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32scene_322Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene_322Code.GDGordonObjects1[k] = gdjs.New_32scene_322Code.GDGordonObjects1[i];
        ++k;
    }
}
gdjs.New_32scene_322Code.GDGordonObjects1.length = k;}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDGordonObjects1 */
{for(var i = 0, len = gdjs.New_32scene_322Code.GDGordonObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDGordonObjects1[i].setAnimationName("Hurt");
}
}
{ //Subevents
gdjs.New_32scene_322Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.New_32scene_322Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene_322Code.GDPlayerObjects1);

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDPlayerObjects1Objects, gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDDoorObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDDoorObjects1 */
{for(var i = 0, len = gdjs.New_32scene_322Code.GDDoorObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDDoorObjects1[i].setAnimationName("Open");
}
}
{ //Subevents
gdjs.New_32scene_322Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueLaser03"), gdjs.New_32scene_322Code.GDBlueLaser03Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene_322Code.GDPlayerObjects1);

gdjs.New_32scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDPlayerObjects1Objects, gdjs.New_32scene_322Code.mapOfGDgdjs_46New_9532scene_95322Code_46GDBlueLaser03Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32scene_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene_322Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene 2", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};

gdjs.New_32scene_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene_322Code.GDPlayerObjects1.length = 0;
gdjs.New_32scene_322Code.GDPlayerObjects2.length = 0;
gdjs.New_32scene_322Code.GDPlayerObjects3.length = 0;
gdjs.New_32scene_322Code.GDPlatformObjects1.length = 0;
gdjs.New_32scene_322Code.GDPlatformObjects2.length = 0;
gdjs.New_32scene_322Code.GDPlatformObjects3.length = 0;
gdjs.New_32scene_322Code.GDTiledForestBackgroundObjects1.length = 0;
gdjs.New_32scene_322Code.GDTiledForestBackgroundObjects2.length = 0;
gdjs.New_32scene_322Code.GDTiledForestBackgroundObjects3.length = 0;
gdjs.New_32scene_322Code.GDCheckpointObjects1.length = 0;
gdjs.New_32scene_322Code.GDCheckpointObjects2.length = 0;
gdjs.New_32scene_322Code.GDCheckpointObjects3.length = 0;
gdjs.New_32scene_322Code.GDSmallGreenPlatformObjects1.length = 0;
gdjs.New_32scene_322Code.GDSmallGreenPlatformObjects2.length = 0;
gdjs.New_32scene_322Code.GDSmallGreenPlatformObjects3.length = 0;
gdjs.New_32scene_322Code.GDScoreObjects1.length = 0;
gdjs.New_32scene_322Code.GDScoreObjects2.length = 0;
gdjs.New_32scene_322Code.GDScoreObjects3.length = 0;
gdjs.New_32scene_322Code.GDGreenFloorObjects1.length = 0;
gdjs.New_32scene_322Code.GDGreenFloorObjects2.length = 0;
gdjs.New_32scene_322Code.GDGreenFloorObjects3.length = 0;
gdjs.New_32scene_322Code.GDCannonBallObjects1.length = 0;
gdjs.New_32scene_322Code.GDCannonBallObjects2.length = 0;
gdjs.New_32scene_322Code.GDCannonBallObjects3.length = 0;
gdjs.New_32scene_322Code.GDbg1Objects1.length = 0;
gdjs.New_32scene_322Code.GDbg1Objects2.length = 0;
gdjs.New_32scene_322Code.GDbg1Objects3.length = 0;
gdjs.New_32scene_322Code.GDbg2Objects1.length = 0;
gdjs.New_32scene_322Code.GDbg2Objects2.length = 0;
gdjs.New_32scene_322Code.GDbg2Objects3.length = 0;
gdjs.New_32scene_322Code.GDbg3Objects1.length = 0;
gdjs.New_32scene_322Code.GDbg3Objects2.length = 0;
gdjs.New_32scene_322Code.GDbg3Objects3.length = 0;
gdjs.New_32scene_322Code.GDbg4Objects1.length = 0;
gdjs.New_32scene_322Code.GDbg4Objects2.length = 0;
gdjs.New_32scene_322Code.GDbg4Objects3.length = 0;
gdjs.New_32scene_322Code.GDbg5Objects1.length = 0;
gdjs.New_32scene_322Code.GDbg5Objects2.length = 0;
gdjs.New_32scene_322Code.GDbg5Objects3.length = 0;
gdjs.New_32scene_322Code.GDbg6Objects1.length = 0;
gdjs.New_32scene_322Code.GDbg6Objects2.length = 0;
gdjs.New_32scene_322Code.GDbg6Objects3.length = 0;
gdjs.New_32scene_322Code.GDbg7Objects1.length = 0;
gdjs.New_32scene_322Code.GDbg7Objects2.length = 0;
gdjs.New_32scene_322Code.GDbg7Objects3.length = 0;
gdjs.New_32scene_322Code.GDbg8Objects1.length = 0;
gdjs.New_32scene_322Code.GDbg8Objects2.length = 0;
gdjs.New_32scene_322Code.GDbg8Objects3.length = 0;
gdjs.New_32scene_322Code.GDbg9Objects1.length = 0;
gdjs.New_32scene_322Code.GDbg9Objects2.length = 0;
gdjs.New_32scene_322Code.GDbg9Objects3.length = 0;
gdjs.New_32scene_322Code.GDWallForBlueFloorObjects1.length = 0;
gdjs.New_32scene_322Code.GDWallForBlueFloorObjects2.length = 0;
gdjs.New_32scene_322Code.GDWallForBlueFloorObjects3.length = 0;
gdjs.New_32scene_322Code.GDBlueLaser10Objects1.length = 0;
gdjs.New_32scene_322Code.GDBlueLaser10Objects2.length = 0;
gdjs.New_32scene_322Code.GDBlueLaser10Objects3.length = 0;
gdjs.New_32scene_322Code.GDGreenLaser16Objects1.length = 0;
gdjs.New_32scene_322Code.GDGreenLaser16Objects2.length = 0;
gdjs.New_32scene_322Code.GDGreenLaser16Objects3.length = 0;
gdjs.New_32scene_322Code.GDBulletObjects1.length = 0;
gdjs.New_32scene_322Code.GDBulletObjects2.length = 0;
gdjs.New_32scene_322Code.GDBulletObjects3.length = 0;
gdjs.New_32scene_322Code.GDSpikedBallObjects1.length = 0;
gdjs.New_32scene_322Code.GDSpikedBallObjects2.length = 0;
gdjs.New_32scene_322Code.GDSpikedBallObjects3.length = 0;
gdjs.New_32scene_322Code.GDGordonObjects1.length = 0;
gdjs.New_32scene_322Code.GDGordonObjects2.length = 0;
gdjs.New_32scene_322Code.GDGordonObjects3.length = 0;
gdjs.New_32scene_322Code.GDDoorObjects1.length = 0;
gdjs.New_32scene_322Code.GDDoorObjects2.length = 0;
gdjs.New_32scene_322Code.GDDoorObjects3.length = 0;
gdjs.New_32scene_322Code.GDBlueLaser03Objects1.length = 0;
gdjs.New_32scene_322Code.GDBlueLaser03Objects2.length = 0;
gdjs.New_32scene_322Code.GDBlueLaser03Objects3.length = 0;

gdjs.New_32scene_322Code.eventsList8(runtimeScene);
return;

}

gdjs['New_32scene_322Code'] = gdjs.New_32scene_322Code;
