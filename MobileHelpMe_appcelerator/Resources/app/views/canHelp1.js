Ti.include("/app/views/common.js");

//
// accepts an instance of Ti.UI.Window
//
function view_init(win, controller)
{
    //
    // create a view and 2 buttons
    //
    var label = Ti.UI.createLabel({
       text:"Can help." 
    });
    win.add(label);
}
