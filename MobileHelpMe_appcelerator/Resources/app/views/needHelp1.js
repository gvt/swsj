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
    var label = Ti.UI.createLabel({
       text:"Need help." 
    });

    // add the components, show the view
    view.add(label);
    win.add(view);
    win.open();
    return view; // return the view so that it can be removed from the window later
}
