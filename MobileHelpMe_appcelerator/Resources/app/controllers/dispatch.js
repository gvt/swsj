//
// setup and display this window
//
mcv.create('controller', 'dispatch', {

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
});
