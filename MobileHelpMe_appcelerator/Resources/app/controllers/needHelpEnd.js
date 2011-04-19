Ti.include("app/views/common.js");

//
// setup and display this window
//
var win  = Ti.UI.createWindow();
var view = null;
win.render = function()
{
    Titanium.API.info("render needHelpEnd");
    Ti.include("app/views/needHelpEnd.js");
    view = view_init(win);
}

win.nextStep = function()
{
    Titanium.API.info("END");
};
