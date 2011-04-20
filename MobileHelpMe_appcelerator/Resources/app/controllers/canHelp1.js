Ti.include("app/views/common.js");

//
// setup and display this window
//
var win  = Ti.UI.createWindow();
win.layout = 'vertical';
var view = null;
win.render = function()
{
    Ti.include("app/views/canHelp1.js");
    view = view_init(win);
}

win.nextStep = function()
{
    stepName = 'canHelp2';
    Titanium.API.info("stepName: " + stepName);

    //out with the old
    win.remove(view);

    // in with the new view
    Ti.include("app/views/" + stepName + ".js");
    view = view_init(win);

    // in with the new controller
    Ti.include("app/controllers/" + stepName + ".js");
    win.render();
};
