Ti.include("/app/views/common.js");

//
// accepts an instance of Ti.UI.Window
//
function view_init(win)
{
    //
    // create a view and 2 buttons
    //
    var view = Ti.UI.createView();
    var button_need_help = Titanium.UI.createButton({
        title:"I need help!",
        height:100,
        width:220,
        top:100,
        backgroundColor:'red',
        font:{fontSize:36}
    });
    var button_can_help = Titanium.UI.createButton({
        title:"I can help.",
        height:100,
        width:220,
        top:250,
        backgroundColor:'green',
        font:{fontSize:36}
    });
    button_need_help.addEventListener('click', function() {
        Titanium.API.debug("button click event...");
        // go to next screen
        Titanium.API.info("user needs help");
        App.userCanHelp = false;
        Titanium.API.info("win.nextStep()...");
        win.nextStep();
        Titanium.API.info("win.nextStep() done");
    });
    button_can_help.addEventListener('click', function() {
        Titanium.API.debug("button click event...");
        // go to next screen
        Titanium.API.info("user can help");
        App.userCanHelp = true
        Titanium.API.info("win.nextStep()...");
        win.nextStep();
        Titanium.API.info("win.nextStep() done");
    });

    // add the components, show the view
    view.add(button_need_help, button_can_help);
    win.add(view);
    win.open();
    return view; // return the view so that it can be removed from the window later
}
