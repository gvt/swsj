Ti.include("app/views/common.js");

//
// setup and display this window
//
var Dispatch = {

    render: function()
    {
        var w = Ti.UI.createWindow({title:"Help?"});
        Ti.include("app/views/dispatch.js");
        view_init(w, this);
        return w;
    },

    next: function(w, userNeedsHelp)
    {
        if (userNeedsHelp) {
            stepName = 'needHelp1';
            // win.taskRequest = TaskRequest.build();
        } else {
            stepName = 'canHelp1';
        }
        Titanium.API.info("stepName: " + stepName);
        Ti.include("app/controllers/" + stepName + ".js");
        if (userNeedsHelp) {
            winRoot.nav.open(NeedHelp1.render(), {transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
            // win.taskRequest = TaskRequest.build();
        } else {
            winRoot.nav.open(CanHelp1.render(), {transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
        }
    },
};
