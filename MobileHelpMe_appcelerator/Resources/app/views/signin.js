Ti.include("/app/views/common.js");
common_view_init(win)

//
// accepts an instance of Ti.UI.Window
//
function view_init(win)
{
    // show the spinner while the rest of the view loads
    win.open();

    //
    // create the first screen: 3 labels and a button
    //
    var scr1_view = Ti.UI.createView();
    var scr1_label_tagline = Titanium.UI.createLabel({
        text:"Get help and help others",
        color:'blue',
        font:{fontSize:24},
        top:80,
        width:'auto',height:'auto',
        textAlign:'center'
    });
    var scr1_label_instructions = Titanium.UI.createLabel({
        text:"Sign-in to get started",
        color:'white',
        font:{fontSize:24},
        top:160,
        width:'auto',height:'auto',
        textAlign:'center'
    });
    var scr1_button_twitter = Titanium.UI.createButton({
        height:24,
        width:151,
        top:240,
        backgroundImage:"iphone/sign-in-with-twitter.png" // dimensions of img 385x65. could use this: http://blog.140proof.com/post/569779156/scalable-sign-in-button
    });
    
    // button click handler
    scr1_button_twitter.addEventListener('click', function() {
        Titanium.API.debug("twitter button click event...");
        if (perform_twitter_auth()) {
            // go to next screen
            Titanium.API.info("twitter auth successful");
            win.nextStep();
        };
    });

    // add the components, hide the spinner, show the view
    scr1_view.add(scr1_label_tagline, scr1_label_instructions, scr1_button_twitter);
    win.add(scr1_view);
    return scr1_view; // return the view so that it can be removed from the window later
}
