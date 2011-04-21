Ti.include("app/views/common.js");

//
// setup and display this window
//
var NeedHelp1 = {
    
    render: function()
    {
        Titanium.API.info("render needHelp1");
        var w = Ti.UI.createWindow({title:"Location"});
        Ti.include("app/views/needHelp1.js");
        view_init(w, this);
        return w;
    },

    next: function(w)
    {
        stepName = 'needHelp2';
        Titanium.API.info("stepName: " + stepName);

        Ti.include("app/controllers/" + stepName + ".js");
        winRoot.open (NeedHelp2.render(), {transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
    },
};
