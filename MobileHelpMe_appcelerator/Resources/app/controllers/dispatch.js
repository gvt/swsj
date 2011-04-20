Ti.include("app/views/common.js");

//
// setup and display this window
//
var win  = Ti.UI.createWindow();
var view = null;
win.render = function()
{
    Ti.include("app/views/dispatch.js");
    view = view_init(win);
}

win.nextStep = function()
{
    if (App.userCanHelp === true ) {
        stepName = 'canHelp1';
    } else {
        stepName = 'needHelp1';
    }
    Titanium.API.info("stepName: " + stepName);

    //out with the old
    win.remove(view);

    // in with the new controller
    Ti.include("app/controllers/" + stepName + ".js");
    win.render();
};
