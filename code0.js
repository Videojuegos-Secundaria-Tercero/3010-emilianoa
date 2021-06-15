gdjs.StartCode = {};
gdjs.StartCode.GDGreenFloorObjects1= [];
gdjs.StartCode.GDGreenFloorObjects2= [];
gdjs.StartCode.GDGreenFloorObjects3= [];
gdjs.StartCode.GDbg3Objects1= [];
gdjs.StartCode.GDbg3Objects2= [];
gdjs.StartCode.GDbg3Objects3= [];
gdjs.StartCode.GDbg4Objects1= [];
gdjs.StartCode.GDbg4Objects2= [];
gdjs.StartCode.GDbg4Objects3= [];
gdjs.StartCode.GDbg5Objects1= [];
gdjs.StartCode.GDbg5Objects2= [];
gdjs.StartCode.GDbg5Objects3= [];
gdjs.StartCode.GDbg6Objects1= [];
gdjs.StartCode.GDbg6Objects2= [];
gdjs.StartCode.GDbg6Objects3= [];
gdjs.StartCode.GDbg7Objects1= [];
gdjs.StartCode.GDbg7Objects2= [];
gdjs.StartCode.GDbg7Objects3= [];
gdjs.StartCode.GDbg8Objects1= [];
gdjs.StartCode.GDbg8Objects2= [];
gdjs.StartCode.GDbg8Objects3= [];
gdjs.StartCode.GDbg9Objects1= [];
gdjs.StartCode.GDbg9Objects2= [];
gdjs.StartCode.GDbg9Objects3= [];
gdjs.StartCode.GDWinObjects1= [];
gdjs.StartCode.GDWinObjects2= [];
gdjs.StartCode.GDWinObjects3= [];
gdjs.StartCode.GDStartButtonObjects1= [];
gdjs.StartCode.GDStartButtonObjects2= [];
gdjs.StartCode.GDStartButtonObjects3= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};
gdjs.StartCode.condition2IsTrue_0 = {val:false};


gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.StartCode.GDStartButtonObjects1});gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.StartCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.StartCode.GDStartButtonObjects1, gdjs.StartCode.GDStartButtonObjects2);

{for(var i = 0, len = gdjs.StartCode.GDStartButtonObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDStartButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("pressed2", 1.1, 1.1, "easeTo", 500, false, true);
}
}{for(var i = 0, len = gdjs.StartCode.GDStartButtonObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDStartButtonObjects2[i].getBehavior("Tween").addObjectColorTween("pressed", "25;28;50", "easeTo", 500, false);
}
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene 1", false);
}}

}


};gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.StartCode.GDStartButtonObjects1});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.StartCode.GDStartButtonObjects1});gdjs.StartCode.eventsList1 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bg9"), gdjs.StartCode.GDbg9Objects1);
{for(var i = 0, len = gdjs.StartCode.GDbg9Objects1.length ;i < len;++i) {
    gdjs.StartCode.GDbg9Objects1[i].setColor("158;178;218");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.StartCode.GDStartButtonObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.StartCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.StartCode.GDStartButtonObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDStartButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("hover2", 1.2, 1.2, "easeTo", 500, false, true);
}
}{for(var i = 0, len = gdjs.StartCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDStartButtonObjects1[i].getBehavior("Tween").addObjectColorTween("hover", "255;255;255", "easeTo", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.StartCode.GDStartButtonObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDStartButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("normal2", 1, 1, "easeTo", 500, false, true);
}
}{for(var i = 0, len = gdjs.StartCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDStartButtonObjects1[i].getBehavior("Tween").addObjectColorTween("normal", "255;255;255", "easeTo", 500, false);
}
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDGreenFloorObjects1.length = 0;
gdjs.StartCode.GDGreenFloorObjects2.length = 0;
gdjs.StartCode.GDGreenFloorObjects3.length = 0;
gdjs.StartCode.GDbg3Objects1.length = 0;
gdjs.StartCode.GDbg3Objects2.length = 0;
gdjs.StartCode.GDbg3Objects3.length = 0;
gdjs.StartCode.GDbg4Objects1.length = 0;
gdjs.StartCode.GDbg4Objects2.length = 0;
gdjs.StartCode.GDbg4Objects3.length = 0;
gdjs.StartCode.GDbg5Objects1.length = 0;
gdjs.StartCode.GDbg5Objects2.length = 0;
gdjs.StartCode.GDbg5Objects3.length = 0;
gdjs.StartCode.GDbg6Objects1.length = 0;
gdjs.StartCode.GDbg6Objects2.length = 0;
gdjs.StartCode.GDbg6Objects3.length = 0;
gdjs.StartCode.GDbg7Objects1.length = 0;
gdjs.StartCode.GDbg7Objects2.length = 0;
gdjs.StartCode.GDbg7Objects3.length = 0;
gdjs.StartCode.GDbg8Objects1.length = 0;
gdjs.StartCode.GDbg8Objects2.length = 0;
gdjs.StartCode.GDbg8Objects3.length = 0;
gdjs.StartCode.GDbg9Objects1.length = 0;
gdjs.StartCode.GDbg9Objects2.length = 0;
gdjs.StartCode.GDbg9Objects3.length = 0;
gdjs.StartCode.GDWinObjects1.length = 0;
gdjs.StartCode.GDWinObjects2.length = 0;
gdjs.StartCode.GDWinObjects3.length = 0;
gdjs.StartCode.GDStartButtonObjects1.length = 0;
gdjs.StartCode.GDStartButtonObjects2.length = 0;
gdjs.StartCode.GDStartButtonObjects3.length = 0;

gdjs.StartCode.eventsList1(runtimeScene);
return;

}

gdjs['StartCode'] = gdjs.StartCode;
