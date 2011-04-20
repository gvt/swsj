Ti.include("app/views/common.js");

//
// setup and display this window
//
var win  = Ti.UI.createWindow();
var view = null;
win.render = function()
{
    Titanium.API.info("render needHelp1");
    Ti.include("app/views/needHelp1.js");
    view = view_init(win);
}

win.nextStep = function()
{
    stepName = 'needHelp2';
    Titanium.API.info("stepName: " + stepName);

    //out with the old
    win.remove(view);

    // in with the new controller
    Ti.include("app/controllers/" + stepName + ".js");
    win.render();
};
