Ti.include("app/views/common.js");

//
// setup and display this window
//
var CanHelp1 = {
    
    render: function()
    {
        var w = Ti.UI.createWindow({title:"Can Help"});
        Ti.include("app/views/canHelp1.js");
        view_init(w, this);
        return w;
    },

    // TODO: this function needs updated per the new render paradigm
    next: function()
    {
        // stepName = 'canHelp2';
        // Titanium.API.info("stepName: " + stepName);
        // 
        // //out with the old
        // win.remove(view);
        // 
        // // in with the new view
        // Ti.include("app/views/" + stepName + ".js");
        // view = view_init(win);
        // 
        // // in with the new controller
        // Ti.include("app/controllers/" + stepName + ".js");
        // win.render();
    },
};

