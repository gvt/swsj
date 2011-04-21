//
// setup and display this window
//
var win   = Ti.UI.createWindow();
var views = []; // an array of views
win.render = function()
{
    Titanium.API.info("render needHelp4");
    Ti.include("app/views/needHelp4.js");
    // common_view_init(win);
    views = view_init(win);
}

win.nextStep = function()
{
    stepName = 'needHelpEnd';
    Titanium.API.info("stepName: " + stepName);

    //out with the old
    for (var i=0; i<views.length; i++) {
        win.remove(views[i]);
    }

    // in with the new controller
    Ti.include("app/controllers/" + stepName + ".js");
    win.render();
};
