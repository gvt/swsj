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
        text:"Enter a brief description of what help you need",
        top:-260,
        left:20,
        font:{fontSize:24}
    });

    // Flexible Space for Button bars (done, etc)
    var flexSpace = Titanium.UI.createButton({
        systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    // Done Button to release the keyboard
    var done_button = Titanium.UI.createButton({
        systemButton:Titanium.UI.iPhone.SystemButton.DONE
    });
    // form control to enter description
    var textArea = Ti.UI.createTextArea({
        top:170,
        width:280,
        height:140,
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius:10,

        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
        suppressReturn:false, // to allow for newlines to be entered
        keyboardToolbar:[flexSpace,done_button],
        keyboardToolbarColor: '#999',
        keyboardToolbarHeight: 30,
        
        color: 'black',
        backgroundColor: 'white',
        font:{fontSize:14}
    });
    // setup the next button click event handler
    done_button.addEventListener('click', function() {
        Titanium.API.debug("button [done] click event...");
        textArea.blur();
        Titanium.App.fireEvent("hideKeyboardToolbar");
    });
    // next button
    var next_button = Ti.UI.createButton({
        title:"Next",
        bottom:20,
        right:20,
        width:150,
        height:35
    });
    // setup the next button click event handler
    next_button.addEventListener('click', function() {
        Titanium.API.debug("button click event...");
        App.User.helpDescription = textArea.value;
        win.nextStep();
    });
    // add the components, show the view
    view.add(label, textArea, next_button);
    win.add(view);
    win.open();
    return view; // return the view so that it can be removed from the window later
}
