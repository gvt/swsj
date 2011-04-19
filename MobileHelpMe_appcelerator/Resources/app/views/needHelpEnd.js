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
    // user instructions
    var label = Ti.UI.createLabel({
        text:"Your Help Request Has Been Sent!",
        top:-260,
        left:20,
        font:{fontSize:24}
    });
    // add the components, show the view
    view.add(label);
    win.add(view);
    win.open();
    return view; // return the view so that it can be removed from the window later
}
