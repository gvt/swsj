Ti.include("app/views/common.js");
Ti.include("app/models/task_request.js");

//
// setup and display this window
//
var win  = Ti.UI.createWindow();
var views = []; // an array of views
win.render = function()
{
    Titanium.API.info("render needHelpEnd");
    Ti.include("app/views/needHelpEnd.js");
    this.tr = win.submitTaskRequest();
    views = view_init(win, this.tr);
}

win.nextStep = function()
{
    Titanium.API.info("END");

    //out with the old
    for (var i=0; i<views.length; i++) {
        win.remove(views[i]);
    }

    // in with the new controller
    Ti.include("app/controllers/" + stepName + ".js");
    win.render();
};

/**
 * taken from: http://ziodave.tumblr.com/post/746024933/titanium-implementation-of-twitter-oauth
 * by David Riccitelli http://twitter.com/ziodave
 */
win.submitTaskRequest = function()
{
    var tr = TaskRequest.build({
        category_id : App.User.helpCategoryId,
        description : App.User.helpDescription,
        location    : App.User.location,
    });
    tr.save(Ti.Network.createHTTPClient(), function(){}, function(){});
    return tr;
}