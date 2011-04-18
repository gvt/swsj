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
        text:"Enter a brief description of what help you need",
        top:-260,
        left:20,
        font:{fontSize:24}
    });
    var text = Ti.UI.createTextArea({
        top:170,
        width:280,
        height:140,
        color: 'black',
        backgroundColor: 'white',
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        
        returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
        suppressReturn:false, // to allow for newlines to be entered
        
        borderRadius:10,
        font:{fontSize:14}
    });
    var next_button = Ti.UI.createButton({
        title:"Next",
        bottom:20,
        right:20,
        width:150,
        height:35
    });

    next_button.addEventListener('click', function() {
        Titanium.API.debug("button click event...");
        // go to next screen
        win.nextStep();
    });

    // add the components, show the view
    view.add(label, text, next_button);
    win.add(view);
    win.open();
    return view; // return the view so that it can be removed from the window later
}
