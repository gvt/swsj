//
// setup and display this window
//
var NeedHelp2 = {

    render: function()
    {
        Titanium.API.info("render needHelp2");
        var w = Ti.UI.createWindow({title:"Location"});
        Ti.include("app/views/needHelp2.js");
        view_init(w, this);
        return w;
    },

    next: function(w)
    {
        stepName = 'needHelp3';
        Titanium.API.info("stepName: " + stepName);
        Ti.include("app/controllers/" + stepName + ".js");
        winRoot.open (NeedHelp3.render(), {transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
    },
};
