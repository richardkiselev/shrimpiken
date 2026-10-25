gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.idToCallbackMap = new Map();
gdjs.MainCode.GDShrimpObjects1= [];
gdjs.MainCode.GDShrimpObjects2= [];
gdjs.MainCode.GDShrimpObjects3= [];
gdjs.MainCode.GDShrimpObjects4= [];
gdjs.MainCode.GDShrimpObjects5= [];
gdjs.MainCode.GDShrimpObjects6= [];
gdjs.MainCode.GDPixiDustObjects1= [];
gdjs.MainCode.GDPixiDustObjects2= [];
gdjs.MainCode.GDPixiDustObjects3= [];
gdjs.MainCode.GDPixiDustObjects4= [];
gdjs.MainCode.GDPixiDustObjects5= [];
gdjs.MainCode.GDPixiDustObjects6= [];
gdjs.MainCode.GDFishyObjects1= [];
gdjs.MainCode.GDFishyObjects2= [];
gdjs.MainCode.GDFishyObjects3= [];
gdjs.MainCode.GDFishyObjects4= [];
gdjs.MainCode.GDFishyObjects5= [];
gdjs.MainCode.GDFishyObjects6= [];
gdjs.MainCode.GDYouKnowObjects1= [];
gdjs.MainCode.GDYouKnowObjects2= [];
gdjs.MainCode.GDYouKnowObjects3= [];
gdjs.MainCode.GDYouKnowObjects4= [];
gdjs.MainCode.GDYouKnowObjects5= [];
gdjs.MainCode.GDYouKnowObjects6= [];
gdjs.MainCode.GDTitleAObjects1= [];
gdjs.MainCode.GDTitleAObjects2= [];
gdjs.MainCode.GDTitleAObjects3= [];
gdjs.MainCode.GDTitleAObjects4= [];
gdjs.MainCode.GDTitleAObjects5= [];
gdjs.MainCode.GDTitleAObjects6= [];
gdjs.MainCode.GDTitleBObjects1= [];
gdjs.MainCode.GDTitleBObjects2= [];
gdjs.MainCode.GDTitleBObjects3= [];
gdjs.MainCode.GDTitleBObjects4= [];
gdjs.MainCode.GDTitleBObjects5= [];
gdjs.MainCode.GDTitleBObjects6= [];
gdjs.MainCode.GDLanternfishObjects1= [];
gdjs.MainCode.GDLanternfishObjects2= [];
gdjs.MainCode.GDLanternfishObjects3= [];
gdjs.MainCode.GDLanternfishObjects4= [];
gdjs.MainCode.GDLanternfishObjects5= [];
gdjs.MainCode.GDLanternfishObjects6= [];
gdjs.MainCode.GDDebugtextObjects1= [];
gdjs.MainCode.GDDebugtextObjects2= [];
gdjs.MainCode.GDDebugtextObjects3= [];
gdjs.MainCode.GDDebugtextObjects4= [];
gdjs.MainCode.GDDebugtextObjects5= [];
gdjs.MainCode.GDDebugtextObjects6= [];
gdjs.MainCode.GDSCOREObjects1= [];
gdjs.MainCode.GDSCOREObjects2= [];
gdjs.MainCode.GDSCOREObjects3= [];
gdjs.MainCode.GDSCOREObjects4= [];
gdjs.MainCode.GDSCOREObjects5= [];
gdjs.MainCode.GDSCOREObjects6= [];
gdjs.MainCode.GDMirror_9595FishyObjects1= [];
gdjs.MainCode.GDMirror_9595FishyObjects2= [];
gdjs.MainCode.GDMirror_9595FishyObjects3= [];
gdjs.MainCode.GDMirror_9595FishyObjects4= [];
gdjs.MainCode.GDMirror_9595FishyObjects5= [];
gdjs.MainCode.GDMirror_9595FishyObjects6= [];
gdjs.MainCode.GDFallerObjects1= [];
gdjs.MainCode.GDFallerObjects2= [];
gdjs.MainCode.GDFallerObjects3= [];
gdjs.MainCode.GDFallerObjects4= [];
gdjs.MainCode.GDFallerObjects5= [];
gdjs.MainCode.GDFallerObjects6= [];


gdjs.MainCode.asyncCallback9679188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(false);
}
gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.idToCallbackMap.set(9679188, gdjs.MainCode.asyncCallback9679188);
gdjs.MainCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.MainCode.asyncCallback9679188(runtimeScene, asyncObjectsList)), 9679188, asyncObjectsList);
}
}

}


};gdjs.MainCode.asyncCallback9678764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("TitleB"), gdjs.MainCode.GDTitleBObjects4);

{for(var i = 0, len = gdjs.MainCode.GDTitleBObjects4.length ;i < len;++i) {
    gdjs.MainCode.GDTitleBObjects4[i].getBehavior("Tween").addObjectPositionTween2("UpB", 250, 535, "easeOutQuad", 0.25, false);
}
}

{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.idToCallbackMap.set(9678764, gdjs.MainCode.asyncCallback9678764);
gdjs.MainCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
/* Don't save TitleB as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.07), (runtimeScene) => (gdjs.MainCode.asyncCallback9678764(runtimeScene, asyncObjectsList)), 9678764, asyncObjectsList);
}
}

}


};gdjs.MainCode.asyncCallback9678284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("TitleA"), gdjs.MainCode.GDTitleAObjects3);

{for(var i = 0, len = gdjs.MainCode.GDTitleAObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDTitleAObjects3[i].getBehavior("Tween").addObjectPositionTween2("UpA", 250, 525, "easeOutQuad", 0.25, false);
}
}

{ //Subevents
gdjs.MainCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.idToCallbackMap.set(9678284, gdjs.MainCode.asyncCallback9678284);
gdjs.MainCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
/* Don't save TitleA as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.MainCode.GDTitleBObjects2) asyncObjectsList.addObject("TitleB", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.MainCode.asyncCallback9678284(runtimeScene, asyncObjectsList)), 9678284, asyncObjectsList);
}
}

}


};gdjs.MainCode.asyncCallback9676980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("TitleB"), gdjs.MainCode.GDTitleBObjects2);
{for(var i = 0, len = gdjs.MainCode.GDTitleBObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDTitleBObjects2[i].getBehavior("Tween").addObjectPositionTween2("DownB", 250, 545, "easeOutQuad", 0.25, false);
}
}

{ //Subevents
gdjs.MainCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.idToCallbackMap.set(9676980, gdjs.MainCode.asyncCallback9676980);
gdjs.MainCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
for (const obj of gdjs.MainCode.GDTitleAObjects1) asyncObjectsList.addObject("TitleA", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.07), (runtimeScene) => (gdjs.MainCode.asyncCallback9676980(runtimeScene, asyncObjectsList)), 9676980, asyncObjectsList);
}
}

}


};gdjs.MainCode.asyncCallback9683268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}
gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.idToCallbackMap.set(9683268, gdjs.MainCode.asyncCallback9683268);
gdjs.MainCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.76), (runtimeScene) => (gdjs.MainCode.asyncCallback9683268(runtimeScene, asyncObjectsList)), 9683268, asyncObjectsList);
}
}

}


};gdjs.MainCode.asyncCallback9682916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Lanternfish"), gdjs.MainCode.GDLanternfishObjects5);

{for(var i = 0, len = gdjs.MainCode.GDLanternfishObjects5.length ;i < len;++i) {
    gdjs.MainCode.GDLanternfishObjects5[i].getBehavior("Tween").addObjectPositionTween2("Lower", 0, 0, "linear", 20, false);
}
}

{ //Subevents
gdjs.MainCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.idToCallbackMap.set(9682916, gdjs.MainCode.asyncCallback9682916);
gdjs.MainCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
for (const obj of gdjs.MainCode.GDLanternfishObjects4) asyncObjectsList.addObject("Lanternfish", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.MainCode.asyncCallback9682916(runtimeScene, asyncObjectsList)), 9682916, asyncObjectsList);
}
}

}


};gdjs.MainCode.asyncCallback9681452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Lanternfish"), gdjs.MainCode.GDLanternfishObjects4);

{for(var i = 0, len = gdjs.MainCode.GDLanternfishObjects4.length ;i < len;++i) {
    gdjs.MainCode.GDLanternfishObjects4[i].getBehavior("Tween").addObjectPositionTween2("Lower", 460, 0, "linear", 1, false);
}
}

{ //Subevents
gdjs.MainCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.idToCallbackMap.set(9681452, gdjs.MainCode.asyncCallback9681452);
gdjs.MainCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
/* Don't save Lanternfish as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.MainCode.asyncCallback9681452(runtimeScene, asyncObjectsList)), 9681452, asyncObjectsList);
}
}

}


};gdjs.MainCode.asyncCallback9681788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("YouKnow"), gdjs.MainCode.GDYouKnowObjects3);
{for(var i = 0, len = gdjs.MainCode.GDYouKnowObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDYouKnowObjects3[i].getBehavior("Tween").addObjectOpacityTween2("hide", 0, "easeInSine", 2, false);
}
}

{ //Subevents
gdjs.MainCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.idToCallbackMap.set(9681788, gdjs.MainCode.asyncCallback9681788);
gdjs.MainCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
/* Don't save Lanternfish as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.3), (runtimeScene) => (gdjs.MainCode.asyncCallback9681788(runtimeScene, asyncObjectsList)), 9681788, asyncObjectsList);
}
}

}


};gdjs.MainCode.asyncCallback9681044 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("TitleA"), gdjs.MainCode.GDTitleAObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("TitleB"), gdjs.MainCode.GDTitleBObjects2);

{for(var i = 0, len = gdjs.MainCode.GDTitleAObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDTitleAObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.MainCode.GDTitleBObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDTitleBObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs.MainCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.idToCallbackMap.set(9681044, gdjs.MainCode.asyncCallback9681044);
gdjs.MainCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
for (const obj of gdjs.MainCode.GDLanternfishObjects1) asyncObjectsList.addObject("Lanternfish", obj);
for (const obj of gdjs.MainCode.GDTitleAObjects1) asyncObjectsList.addObject("TitleA", obj);
for (const obj of gdjs.MainCode.GDTitleBObjects1) asyncObjectsList.addObject("TitleB", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.MainCode.asyncCallback9681044(runtimeScene, asyncObjectsList)), 9681044, asyncObjectsList);
}
}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDLanternfishObjects1Objects = Hashtable.newFrom({"Lanternfish": gdjs.MainCode.GDLanternfishObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDShrimpObjects1Objects = Hashtable.newFrom({"Shrimp": gdjs.MainCode.GDShrimpObjects1});
gdjs.MainCode.asyncCallback9685948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.idToCallbackMap.set(9685948, gdjs.MainCode.asyncCallback9685948);
gdjs.MainCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.MainCode.asyncCallback9685948(runtimeScene, asyncObjectsList)), 9685948, asyncObjectsList);
}
}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDFishyObjects1Objects = Hashtable.newFrom({"Fishy": gdjs.MainCode.GDFishyObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDShrimpObjects1Objects = Hashtable.newFrom({"Shrimp": gdjs.MainCode.GDShrimpObjects1});
gdjs.MainCode.asyncCallback9884268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Fishy"), gdjs.MainCode.GDFishyObjects2);

{for(var i = 0, len = gdjs.MainCode.GDFishyObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDFishyObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.idToCallbackMap.set(9884268, gdjs.MainCode.asyncCallback9884268);
gdjs.MainCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
for (const obj of gdjs.MainCode.GDFishyObjects1) asyncObjectsList.addObject("Fishy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.MainCode.asyncCallback9884268(runtimeScene, asyncObjectsList)), 9884268, asyncObjectsList);
}
}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDMirror_95959595FishyObjects1Objects = Hashtable.newFrom({"Mirror_Fishy": gdjs.MainCode.GDMirror_9595FishyObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDShrimpObjects1Objects = Hashtable.newFrom({"Shrimp": gdjs.MainCode.GDShrimpObjects1});
gdjs.MainCode.asyncCallback9689124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Mirror_Fishy"), gdjs.MainCode.GDMirror_9595FishyObjects2);

{for(var i = 0, len = gdjs.MainCode.GDMirror_9595FishyObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMirror_9595FishyObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.idToCallbackMap.set(9689124, gdjs.MainCode.asyncCallback9689124);
gdjs.MainCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
for (const obj of gdjs.MainCode.GDMirror_9595FishyObjects1) asyncObjectsList.addObject("Mirror_Fishy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.MainCode.asyncCallback9689124(runtimeScene, asyncObjectsList)), 9689124, asyncObjectsList);
}
}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDFishyObjects1Objects = Hashtable.newFrom({"Fishy": gdjs.MainCode.GDFishyObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDMirror_95959595FishyObjects1Objects = Hashtable.newFrom({"Mirror_Fishy": gdjs.MainCode.GDMirror_9595FishyObjects1});
gdjs.MainCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PixiDust"), gdjs.MainCode.GDPixiDustObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shrimp"), gdjs.MainCode.GDShrimpObjects1);
{for(var i = 0, len = gdjs.MainCode.GDShrimpObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDShrimpObjects1[i].getBehavior("Physics2").applyForceTowardPosition(75, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, 0);
}
}
{for(var i = 0, len = gdjs.MainCode.GDShrimpObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDShrimpObjects1[i].setX(Math.max((gdjs.MainCode.GDShrimpObjects1[i].getWidth()) / 2, (gdjs.MainCode.GDShrimpObjects1[i].getPointX(""))));
}
}
{for(var i = 0, len = gdjs.MainCode.GDShrimpObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDShrimpObjects1[i].setX(Math.min(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.MainCode.GDShrimpObjects1[i].getWidth()) / 2, (gdjs.MainCode.GDShrimpObjects1[i].getPointX(""))));
}
}
{for(var i = 0, len = gdjs.MainCode.GDShrimpObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDShrimpObjects1[i].setY(Math.max((gdjs.MainCode.GDShrimpObjects1[i].getWidth()) / 2, (gdjs.MainCode.GDShrimpObjects1[i].getPointY(""))));
}
}
{for(var i = 0, len = gdjs.MainCode.GDShrimpObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDShrimpObjects1[i].setY(Math.min(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.MainCode.GDShrimpObjects1[i].getWidth()) / 2, (gdjs.MainCode.GDShrimpObjects1[i].getPointY(""))));
}
}
{for(var i = 0, len = gdjs.MainCode.GDPixiDustObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPixiDustObjects1[i].setPosition((( gdjs.MainCode.GDShrimpObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDShrimpObjects1[0].getPointX("")),(( gdjs.MainCode.GDShrimpObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDShrimpObjects1[0].getPointY("")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Shrimp"), gdjs.MainCode.GDShrimpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDShrimpObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDShrimpObjects1[i].getY() >= gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.MainCode.GDShrimpObjects1[i].getHeight()) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDShrimpObjects1[k] = gdjs.MainCode.GDShrimpObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDShrimpObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDShrimpObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDShrimpObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDShrimpObjects1[i].setY(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.MainCode.GDShrimpObjects1[i].getHeight()) - 2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SCORE"), gdjs.MainCode.GDSCOREObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouKnow"), gdjs.MainCode.GDYouKnowObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}
{for(var i = 0, len = gdjs.MainCode.GDYouKnowObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDYouKnowObjects1[i].setPosition(-270,-115);
}
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "audiomass-output.wav");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time");
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0.5);
}
{for(var i = 0, len = gdjs.MainCode.GDSCOREObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSCOREObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TitleA"), gdjs.MainCode.GDTitleAObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}
{for(var i = 0, len = gdjs.MainCode.GDTitleAObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDTitleAObjects1[i].getBehavior("Tween").addObjectPositionTween2("DownA", 250, 535, "easeOutQuad", 0.25, false);
}
}

{ //Subevents
gdjs.MainCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Lanternfish"), gdjs.MainCode.GDLanternfishObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleA"), gdjs.MainCode.GDTitleAObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleB"), gdjs.MainCode.GDTitleBObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}
{for(var i = 0, len = gdjs.MainCode.GDLanternfishObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDLanternfishObjects1[i].getBehavior("Tween").addObjectPositionTween2("Lower", 460, -170, "linear", 1, false);
}
}
{for(var i = 0, len = gdjs.MainCode.GDTitleAObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDTitleAObjects1[i].getBehavior("Tween").addObjectPositionTween2("LEAVE", 250, 700, "easeInCubic", 0.4, false);
}
}
{for(var i = 0, len = gdjs.MainCode.GDTitleBObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDTitleBObjects1[i].getBehavior("Tween").addObjectPositionTween2("LEAVE", 250, 700, "easeInCubic", 0.4, false);
}
}

{ //Subevents
gdjs.MainCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PixiDust"), gdjs.MainCode.GDPixiDustObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPixiDustObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPixiDustObjects1[i].setPosition(9999,9999);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lanternfish"), gdjs.MainCode.GDLanternfishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shrimp"), gdjs.MainCode.GDShrimpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDLanternfishObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDShrimpObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDLanternfishObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SCORE"), gdjs.MainCode.GDSCOREObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}
{for(var i = 0, len = gdjs.MainCode.GDSCOREObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSCOREObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MainCode.GDLanternfishObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDLanternfishObjects1[i].getBehavior("Tween").stopTween("Lower", false);
}
}
{for(var i = 0, len = gdjs.MainCode.GDLanternfishObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDLanternfishObjects1[i].getBehavior("Animation").setAnimationName("Attacked");
}
}
{for(var i = 0, len = gdjs.MainCode.GDLanternfishObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDLanternfishObjects1[i].getBehavior("Tween").addObjectPositionTween2("Lower", (gdjs.MainCode.GDLanternfishObjects1[i].getPointX("")), 1000, "easeInBack", 2, false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "audiomass-output.wav", false, 100, 1);
}

{ //Subevents
gdjs.MainCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fishy"), gdjs.MainCode.GDFishyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mirror_Fishy"), gdjs.MainCode.GDMirror_9595FishyObjects1);
{for(var i = 0, len = gdjs.MainCode.GDFishyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFishyObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.MainCode.GDMirror_9595FishyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMirror_9595FishyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fishy"), gdjs.MainCode.GDFishyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shrimp"), gdjs.MainCode.GDShrimpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDFishyObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDShrimpObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDFishyObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDFishyObjects1[i].getAngle() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDFishyObjects1[k] = gdjs.MainCode.GDFishyObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDFishyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDFishyObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}
{for(var i = 0, len = gdjs.MainCode.GDFishyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFishyObjects1[i].rotateTowardAngle(0.1, 0, runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(6).sub(0.001);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(true);
}
{for(var i = 0, len = gdjs.MainCode.GDFishyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFishyObjects1[i].getBehavior("Animation").setAnimationName("Attacked");
}
}
{for(var i = 0, len = gdjs.MainCode.GDFishyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFishyObjects1[i].getBehavior("Tween").addObjectPositionTween2("Lower", (gdjs.MainCode.GDFishyObjects1[i].getPointX("")), 1000, "easeInBack", 2, false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "testsound1", false, 100, 1);
}

{ //Subevents
gdjs.MainCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mirror_Fishy"), gdjs.MainCode.GDMirror_9595FishyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shrimp"), gdjs.MainCode.GDShrimpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDMirror_95959595FishyObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDShrimpObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDMirror_9595FishyObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDMirror_9595FishyObjects1[i].getAngle() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDMirror_9595FishyObjects1[k] = gdjs.MainCode.GDMirror_9595FishyObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDMirror_9595FishyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDMirror_9595FishyObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}
{for(var i = 0, len = gdjs.MainCode.GDMirror_9595FishyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMirror_9595FishyObjects1[i].rotateTowardAngle(0.1, 0, runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(6).sub(0.001);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(true);
}
{for(var i = 0, len = gdjs.MainCode.GDMirror_9595FishyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMirror_9595FishyObjects1[i].getBehavior("Animation").setAnimationName("Attacked");
}
}
{for(var i = 0, len = gdjs.MainCode.GDMirror_9595FishyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMirror_9595FishyObjects1[i].getBehavior("Tween").addObjectPositionTween2("Lower", (gdjs.MainCode.GDMirror_9595FishyObjects1[i].getPointX("")), 1000, "easeInBack", 2, false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "testsound1", false, 100, 1);
}

{ //Subevents
gdjs.MainCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Time") > runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.MainCode.GDFishyObjects1.length = 0;

gdjs.MainCode.GDMirror_9595FishyObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDFishyObjects1Objects, 1550, gdjs.randomFloatInRange(0, 500), "");
}
{for(var i = 0, len = gdjs.MainCode.GDFishyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFishyObjects1[i].setAnimationFrame(gdjs.randomInRange(1, 7));
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDMirror_95959595FishyObjects1Objects, -800, gdjs.randomFloatInRange(0, 500), "");
}
{for(var i = 0, len = gdjs.MainCode.GDMirror_9595FishyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMirror_9595FishyObjects1[i].setAnimationFrame(gdjs.randomInRange(1, 7));
}
}
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5));
}
{gdjs.scene3d.camera.turnCameraTowardObject(runtimeScene, (gdjs.MainCode.GDFishyObjects1.length !== 0 ? gdjs.MainCode.GDFishyObjects1[0] : null), "", 0, false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fishy"), gdjs.MainCode.GDFishyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mirror_Fishy"), gdjs.MainCode.GDMirror_9595FishyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SCORE"), gdjs.MainCode.GDSCOREObjects1);
{for(var i = 0, len = gdjs.MainCode.GDFishyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFishyObjects1[i].setX(gdjs.MainCode.GDFishyObjects1[i].getX() - (3 + (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() * 0.01)));
}
}
{for(var i = 0, len = gdjs.MainCode.GDFishyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFishyObjects1[i].getBehavior("Scale").setScale(3);
}
}
{for(var i = 0, len = gdjs.MainCode.GDSCOREObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSCOREObjects1[i].setBBText("[i][outline=black]" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7))) + "[/outline][/i]");
}
}
{for(var i = 0, len = gdjs.MainCode.GDMirror_9595FishyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMirror_9595FishyObjects1[i].getBehavior("Flippable").flipX(true);
}
}
{for(var i = 0, len = gdjs.MainCode.GDMirror_9595FishyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMirror_9595FishyObjects1[i].setX(gdjs.MainCode.GDMirror_9595FishyObjects1[i].getX() + (3 + (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() * 0.01)));
}
}
{for(var i = 0, len = gdjs.MainCode.GDMirror_9595FishyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMirror_9595FishyObjects1[i].getBehavior("Scale").setScale(3);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fishy"), gdjs.MainCode.GDFishyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDFishyObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDFishyObjects1[i].getX() < -400 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDFishyObjects1[k] = gdjs.MainCode.GDFishyObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDFishyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDFishyObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 100, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(7).sub(20);
}
{for(var i = 0, len = gdjs.MainCode.GDFishyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFishyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mirror_Fishy"), gdjs.MainCode.GDMirror_9595FishyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDMirror_9595FishyObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDMirror_9595FishyObjects1[i].getX() > 1400 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDMirror_9595FishyObjects1[k] = gdjs.MainCode.GDMirror_9595FishyObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDMirror_9595FishyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDMirror_9595FishyObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 100, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(7).sub(20);
}
{for(var i = 0, len = gdjs.MainCode.GDMirror_9595FishyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMirror_9595FishyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() < 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Faller"), gdjs.MainCode.GDFallerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SCORE"), gdjs.MainCode.GDSCOREObjects1);
{for(var i = 0, len = gdjs.MainCode.GDFallerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFallerObjects1[i].setLayer("UI");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}
{for(var i = 0, len = gdjs.MainCode.GDFallerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFallerObjects1[i].getBehavior("Tween").addObjectPositionYTween2("FALLER", 0, "easeOutQuad", 1, false);
}
}
{for(var i = 0, len = gdjs.MainCode.GDSCOREObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSCOREObjects1[i].setBBText("You lost!" + gdjs.evtTools.string.newLine() + "Your top score was " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9))) + "." + gdjs.evtTools.string.newLine() + "Pro tip: leave no witnesses.");
}
}
{for(var i = 0, len = gdjs.MainCode.GDSCOREObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSCOREObjects1[i].setLayer("UI");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() > runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber());
}
}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDShrimpObjects1.length = 0;
gdjs.MainCode.GDShrimpObjects2.length = 0;
gdjs.MainCode.GDShrimpObjects3.length = 0;
gdjs.MainCode.GDShrimpObjects4.length = 0;
gdjs.MainCode.GDShrimpObjects5.length = 0;
gdjs.MainCode.GDShrimpObjects6.length = 0;
gdjs.MainCode.GDPixiDustObjects1.length = 0;
gdjs.MainCode.GDPixiDustObjects2.length = 0;
gdjs.MainCode.GDPixiDustObjects3.length = 0;
gdjs.MainCode.GDPixiDustObjects4.length = 0;
gdjs.MainCode.GDPixiDustObjects5.length = 0;
gdjs.MainCode.GDPixiDustObjects6.length = 0;
gdjs.MainCode.GDFishyObjects1.length = 0;
gdjs.MainCode.GDFishyObjects2.length = 0;
gdjs.MainCode.GDFishyObjects3.length = 0;
gdjs.MainCode.GDFishyObjects4.length = 0;
gdjs.MainCode.GDFishyObjects5.length = 0;
gdjs.MainCode.GDFishyObjects6.length = 0;
gdjs.MainCode.GDYouKnowObjects1.length = 0;
gdjs.MainCode.GDYouKnowObjects2.length = 0;
gdjs.MainCode.GDYouKnowObjects3.length = 0;
gdjs.MainCode.GDYouKnowObjects4.length = 0;
gdjs.MainCode.GDYouKnowObjects5.length = 0;
gdjs.MainCode.GDYouKnowObjects6.length = 0;
gdjs.MainCode.GDTitleAObjects1.length = 0;
gdjs.MainCode.GDTitleAObjects2.length = 0;
gdjs.MainCode.GDTitleAObjects3.length = 0;
gdjs.MainCode.GDTitleAObjects4.length = 0;
gdjs.MainCode.GDTitleAObjects5.length = 0;
gdjs.MainCode.GDTitleAObjects6.length = 0;
gdjs.MainCode.GDTitleBObjects1.length = 0;
gdjs.MainCode.GDTitleBObjects2.length = 0;
gdjs.MainCode.GDTitleBObjects3.length = 0;
gdjs.MainCode.GDTitleBObjects4.length = 0;
gdjs.MainCode.GDTitleBObjects5.length = 0;
gdjs.MainCode.GDTitleBObjects6.length = 0;
gdjs.MainCode.GDLanternfishObjects1.length = 0;
gdjs.MainCode.GDLanternfishObjects2.length = 0;
gdjs.MainCode.GDLanternfishObjects3.length = 0;
gdjs.MainCode.GDLanternfishObjects4.length = 0;
gdjs.MainCode.GDLanternfishObjects5.length = 0;
gdjs.MainCode.GDLanternfishObjects6.length = 0;
gdjs.MainCode.GDDebugtextObjects1.length = 0;
gdjs.MainCode.GDDebugtextObjects2.length = 0;
gdjs.MainCode.GDDebugtextObjects3.length = 0;
gdjs.MainCode.GDDebugtextObjects4.length = 0;
gdjs.MainCode.GDDebugtextObjects5.length = 0;
gdjs.MainCode.GDDebugtextObjects6.length = 0;
gdjs.MainCode.GDSCOREObjects1.length = 0;
gdjs.MainCode.GDSCOREObjects2.length = 0;
gdjs.MainCode.GDSCOREObjects3.length = 0;
gdjs.MainCode.GDSCOREObjects4.length = 0;
gdjs.MainCode.GDSCOREObjects5.length = 0;
gdjs.MainCode.GDSCOREObjects6.length = 0;
gdjs.MainCode.GDMirror_9595FishyObjects1.length = 0;
gdjs.MainCode.GDMirror_9595FishyObjects2.length = 0;
gdjs.MainCode.GDMirror_9595FishyObjects3.length = 0;
gdjs.MainCode.GDMirror_9595FishyObjects4.length = 0;
gdjs.MainCode.GDMirror_9595FishyObjects5.length = 0;
gdjs.MainCode.GDMirror_9595FishyObjects6.length = 0;
gdjs.MainCode.GDFallerObjects1.length = 0;
gdjs.MainCode.GDFallerObjects2.length = 0;
gdjs.MainCode.GDFallerObjects3.length = 0;
gdjs.MainCode.GDFallerObjects4.length = 0;
gdjs.MainCode.GDFallerObjects5.length = 0;
gdjs.MainCode.GDFallerObjects6.length = 0;

gdjs.MainCode.eventsList12(runtimeScene);
gdjs.MainCode.GDShrimpObjects1.length = 0;
gdjs.MainCode.GDShrimpObjects2.length = 0;
gdjs.MainCode.GDShrimpObjects3.length = 0;
gdjs.MainCode.GDShrimpObjects4.length = 0;
gdjs.MainCode.GDShrimpObjects5.length = 0;
gdjs.MainCode.GDShrimpObjects6.length = 0;
gdjs.MainCode.GDPixiDustObjects1.length = 0;
gdjs.MainCode.GDPixiDustObjects2.length = 0;
gdjs.MainCode.GDPixiDustObjects3.length = 0;
gdjs.MainCode.GDPixiDustObjects4.length = 0;
gdjs.MainCode.GDPixiDustObjects5.length = 0;
gdjs.MainCode.GDPixiDustObjects6.length = 0;
gdjs.MainCode.GDFishyObjects1.length = 0;
gdjs.MainCode.GDFishyObjects2.length = 0;
gdjs.MainCode.GDFishyObjects3.length = 0;
gdjs.MainCode.GDFishyObjects4.length = 0;
gdjs.MainCode.GDFishyObjects5.length = 0;
gdjs.MainCode.GDFishyObjects6.length = 0;
gdjs.MainCode.GDYouKnowObjects1.length = 0;
gdjs.MainCode.GDYouKnowObjects2.length = 0;
gdjs.MainCode.GDYouKnowObjects3.length = 0;
gdjs.MainCode.GDYouKnowObjects4.length = 0;
gdjs.MainCode.GDYouKnowObjects5.length = 0;
gdjs.MainCode.GDYouKnowObjects6.length = 0;
gdjs.MainCode.GDTitleAObjects1.length = 0;
gdjs.MainCode.GDTitleAObjects2.length = 0;
gdjs.MainCode.GDTitleAObjects3.length = 0;
gdjs.MainCode.GDTitleAObjects4.length = 0;
gdjs.MainCode.GDTitleAObjects5.length = 0;
gdjs.MainCode.GDTitleAObjects6.length = 0;
gdjs.MainCode.GDTitleBObjects1.length = 0;
gdjs.MainCode.GDTitleBObjects2.length = 0;
gdjs.MainCode.GDTitleBObjects3.length = 0;
gdjs.MainCode.GDTitleBObjects4.length = 0;
gdjs.MainCode.GDTitleBObjects5.length = 0;
gdjs.MainCode.GDTitleBObjects6.length = 0;
gdjs.MainCode.GDLanternfishObjects1.length = 0;
gdjs.MainCode.GDLanternfishObjects2.length = 0;
gdjs.MainCode.GDLanternfishObjects3.length = 0;
gdjs.MainCode.GDLanternfishObjects4.length = 0;
gdjs.MainCode.GDLanternfishObjects5.length = 0;
gdjs.MainCode.GDLanternfishObjects6.length = 0;
gdjs.MainCode.GDDebugtextObjects1.length = 0;
gdjs.MainCode.GDDebugtextObjects2.length = 0;
gdjs.MainCode.GDDebugtextObjects3.length = 0;
gdjs.MainCode.GDDebugtextObjects4.length = 0;
gdjs.MainCode.GDDebugtextObjects5.length = 0;
gdjs.MainCode.GDDebugtextObjects6.length = 0;
gdjs.MainCode.GDSCOREObjects1.length = 0;
gdjs.MainCode.GDSCOREObjects2.length = 0;
gdjs.MainCode.GDSCOREObjects3.length = 0;
gdjs.MainCode.GDSCOREObjects4.length = 0;
gdjs.MainCode.GDSCOREObjects5.length = 0;
gdjs.MainCode.GDSCOREObjects6.length = 0;
gdjs.MainCode.GDMirror_9595FishyObjects1.length = 0;
gdjs.MainCode.GDMirror_9595FishyObjects2.length = 0;
gdjs.MainCode.GDMirror_9595FishyObjects3.length = 0;
gdjs.MainCode.GDMirror_9595FishyObjects4.length = 0;
gdjs.MainCode.GDMirror_9595FishyObjects5.length = 0;
gdjs.MainCode.GDMirror_9595FishyObjects6.length = 0;
gdjs.MainCode.GDFallerObjects1.length = 0;
gdjs.MainCode.GDFallerObjects2.length = 0;
gdjs.MainCode.GDFallerObjects3.length = 0;
gdjs.MainCode.GDFallerObjects4.length = 0;
gdjs.MainCode.GDFallerObjects5.length = 0;
gdjs.MainCode.GDFallerObjects6.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
