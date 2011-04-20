Ti.include("app/views/common.js");

//
// setup and display this window
//
var win  = Ti.UI.createWindow();
var views = []; // an array of views
win.render = function()
{
    Titanium.API.info("render needHelpEnd");
    Ti.include("app/views/needHelpEnd.js");
    // common_view_init(win);
    views = view_init(win);
}

win.nextStep = function()
{
    Titanium.API.info("END");

    //out with the old
    for (var i=0; i<views.length; i++) {
        win.remove(views[i]);
    }
};

/**
 * taken from: http://ziodave.tumblr.com/post/746024933/titanium-implementation-of-twitter-oauth
 * by David Riccitelli http://twitter.com/ziodave
 */
function submitTaskRequest()
{
    var tr = TaskRequest.build({
        category_name : App.User.helpCategory,
        description   : App.User.helpDescription,
        location      : App.User.location,
    });
    tr.save
    return tr
}