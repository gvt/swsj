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
        text:"How much are you willing to pay?",
        top:-260,
        left:20,
        font:{fontSize:24}
    });
    // submit button
    var submit_button = Ti.UI.createButton({
        title:"Send for Help",
        bottom:20,
        center:'50%',
        width:200,
        height:50,
        font:{fontSize:24, fontWeight:'bold'}
    });
    // setup the next button click event handler
    submit_button.addEventListener('click', function() {
        Titanium.API.debug("button click event...");
        // go to next screen
        win.nextStep();
    });
    // add the components, show the view
    view.add(label, submit_button);
    win.add(view);
    win.open();
    return view; // return the view so that it can be removed from the window later
}
