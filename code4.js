gdjs.ByeCode = {};
gdjs.ByeCode.GDGreenFloorObjects1= [];
gdjs.ByeCode.GDGreenFloorObjects2= [];
gdjs.ByeCode.GDGreenFloorObjects3= [];
gdjs.ByeCode.GDbg3Objects1= [];
gdjs.ByeCode.GDbg3Objects2= [];
gdjs.ByeCode.GDbg3Objects3= [];
gdjs.ByeCode.GDbg4Objects1= [];
gdjs.ByeCode.GDbg4Objects2= [];
gdjs.ByeCode.GDbg4Objects3= [];
gdjs.ByeCode.GDbg5Objects1= [];
gdjs.ByeCode.GDbg5Objects2= [];
gdjs.ByeCode.GDbg5Objects3= [];
gdjs.ByeCode.GDbg6Objects1= [];
gdjs.ByeCode.GDbg6Objects2= [];
gdjs.ByeCode.GDbg6Objects3= [];
gdjs.ByeCode.GDbg7Objects1= [];
gdjs.ByeCode.GDbg7Objects2= [];
gdjs.ByeCode.GDbg7Objects3= [];
gdjs.ByeCode.GDbg8Objects1= [];
gdjs.ByeCode.GDbg8Objects2= [];
gdjs.ByeCode.GDbg8Objects3= [];
gdjs.ByeCode.GDbg9Objects1= [];
gdjs.ByeCode.GDbg9Objects2= [];
gdjs.ByeCode.GDbg9Objects3= [];
gdjs.ByeCode.GDWinObjects1= [];
gdjs.ByeCode.GDWinObjects2= [];
gdjs.ByeCode.GDWinObjects3= [];
gdjs.ByeCode.GDStartButtonObjects1= [];
gdjs.ByeCode.GDStartButtonObjects2= [];
gdjs.ByeCode.GDStartButtonObjects3= [];

gdjs.ByeCode.conditionTrue_0 = {val:false};
gdjs.ByeCode.condition0IsTrue_0 = {val:false};
gdjs.ByeCode.condition1IsTrue_0 = {val:false};
gdjs.ByeCode.condition2IsTrue_0 = {val:false};


gdjs.ByeCode.mapOfGDgdjs_46ByeCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.ByeCode.GDStartButtonObjects1});gdjs.ByeCode.eventsList0 = function(runtimeScene) {

{


gdjs.ByeCode.condition0IsTrue_0.val = false;
{
gdjs.ByeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.ByeCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.ByeCode.GDStartButtonObjects1, gdjs.ByeCode.GDStartButtonObjects2);

{for(var i = 0, len = gdjs.ByeCode.GDStartButtonObjects2.length ;i < len;++i) {
    gdjs.ByeCode.GDStartButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("pressed2", 1.1, 1.1, "easeTo", 500, false, true);
}
}{for(var i = 0, len = gdjs.ByeCode.GDStartButtonObjects2.length ;i < len;++i) {
    gdjs.ByeCode.GDStartButtonObjects2[i].getBehavior("Tween").addObjectColorTween("pressed", "25;28;50", "easeTo", 500, false);
}
}}

}


{


gdjs.ByeCode.condition0IsTrue_0.val = false;
{
gdjs.ByeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ByeCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene 1", false);
}}

}


};gdjs.ByeCode.mapOfGDgdjs_46ByeCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.ByeCode.GDStartButtonObjects1});gdjs.ByeCode.mapOfGDgdjs_46ByeCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.ByeCode.GDStartButtonObjects1});gdjs.ByeCode.eventsList1 = function(runtimeScene) {

{


gdjs.ByeCode.condition0IsTrue_0.val = false;
{
gdjs.ByeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ByeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bg9"), gdjs.ByeCode.GDbg9Objects1);
{for(var i = 0, len = gdjs.ByeCode.GDbg9Objects1.length ;i < len;++i) {
    gdjs.ByeCode.GDbg9Objects1[i].setColor("158;178;218");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.ByeCode.GDStartButtonObjects1);

gdjs.ByeCode.condition0IsTrue_0.val = false;
{
gdjs.ByeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ByeCode.mapOfGDgdjs_46ByeCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.ByeCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ByeCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.ByeCode.GDStartButtonObjects1);

gdjs.ByeCode.condition0IsTrue_0.val = false;
gdjs.ByeCode.condition1IsTrue_0.val = false;
{
gdjs.ByeCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.ByeCode.condition0IsTrue_0.val ) {
{
gdjs.ByeCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ByeCode.mapOfGDgdjs_46ByeCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.ByeCode.condition1IsTrue_0.val) {
/* Reuse gdjs.ByeCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.ByeCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.ByeCode.GDStartButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("hover2", 1.2, 1.2, "easeTo", 500, false, true);
}
}{for(var i = 0, len = gdjs.ByeCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.ByeCode.GDStartButtonObjects1[i].getBehavior("Tween").addObjectColorTween("hover", "255;255;255", "easeTo", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.ByeCode.GDStartButtonObjects1);

gdjs.ByeCode.condition0IsTrue_0.val = false;
{
gdjs.ByeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ByeCode.mapOfGDgdjs_46ByeCode_46GDStartButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.ByeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ByeCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.ByeCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.ByeCode.GDStartButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("normal2", 1, 1, "easeTo", 500, false, true);
}
}{for(var i = 0, len = gdjs.ByeCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.ByeCode.GDStartButtonObjects1[i].getBehavior("Tween").addObjectColorTween("normal", "255;255;255", "easeTo", 500, false);
}
}}

}


};

gdjs.ByeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ByeCode.GDGreenFloorObjects1.length = 0;
gdjs.ByeCode.GDGreenFloorObjects2.length = 0;
gdjs.ByeCode.GDGreenFloorObjects3.length = 0;
gdjs.ByeCode.GDbg3Objects1.length = 0;
gdjs.ByeCode.GDbg3Objects2.length = 0;
gdjs.ByeCode.GDbg3Objects3.length = 0;
gdjs.ByeCode.GDbg4Objects1.length = 0;
gdjs.ByeCode.GDbg4Objects2.length = 0;
gdjs.ByeCode.GDbg4Objects3.length = 0;
gdjs.ByeCode.GDbg5Objects1.length = 0;
gdjs.ByeCode.GDbg5Objects2.length = 0;
gdjs.ByeCode.GDbg5Objects3.length = 0;
gdjs.ByeCode.GDbg6Objects1.length = 0;
gdjs.ByeCode.GDbg6Objects2.length = 0;
gdjs.ByeCode.GDbg6Objects3.length = 0;
gdjs.ByeCode.GDbg7Objects1.length = 0;
gdjs.ByeCode.GDbg7Objects2.length = 0;
gdjs.ByeCode.GDbg7Objects3.length = 0;
gdjs.ByeCode.GDbg8Objects1.length = 0;
gdjs.ByeCode.GDbg8Objects2.length = 0;
gdjs.ByeCode.GDbg8Objects3.length = 0;
gdjs.ByeCode.GDbg9Objects1.length = 0;
gdjs.ByeCode.GDbg9Objects2.length = 0;
gdjs.ByeCode.GDbg9Objects3.length = 0;
gdjs.ByeCode.GDWinObjects1.length = 0;
gdjs.ByeCode.GDWinObjects2.length = 0;
gdjs.ByeCode.GDWinObjects3.length = 0;
gdjs.ByeCode.GDStartButtonObjects1.length = 0;
gdjs.ByeCode.GDStartButtonObjects2.length = 0;
gdjs.ByeCode.GDStartButtonObjects3.length = 0;

gdjs.ByeCode.eventsList1(runtimeScene);
return;

}

gdjs['ByeCode'] = gdjs.ByeCode;
