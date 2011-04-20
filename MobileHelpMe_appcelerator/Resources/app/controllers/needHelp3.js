Ti.include("app/views/common.js");

//
// setup and display this window
//
var win  = Ti.UI.createWindow();
win.layout = 'vertical';
var view = null;
win.render = function()
{
    Titanium.API.info("render needHelp3");
    Ti.include("app/views/needHelp3.js");
    view = view_init(win);
}

win.nextStep = function()
{
    stepName = 'needHelp4';
    Titanium.API.info("stepName: " + stepName);

    //out with the old
    win.remove(view);

    // in with the new controller
    Ti.include("app/controllers/" + stepName + ".js");
    win.render();
};
