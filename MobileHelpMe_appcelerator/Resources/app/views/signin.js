// Ti.include("/app/views/common.js");
// common_view_init(winRoot);

//
// accepts an instance of Ti.UI.Window and an instance of <generic controller>
// returns an instance of Ti.UI.View
//
function view_init(win, controller)
{
    if (controller.alreadySignedIn()) {

        var labelFeedback = Titanium.UI.createLabel({
            text:"You are signed in.",
            color:'white',
            font:{fontSize:24},
            top:160,
            width:'auto',height:'auto',
            textAlign:'center'
        });
        var btnContinue = Titanium.UI.createButton({
                title:"Continue",
                height: 40,
                font:{fontSize:24}
        });
        btnContinue.addEventListener('click', function() {
            controller.next(win);
        });
        win.add(labelFeedback, btnContinue);
        return;
    }

    //
    // create the first screen: 3 labels and a button
    //
    var label_appname = Titanium.UI.createLabel({
        text:"Brownie Points",
        font:{fontSize:48},
        color:'white',
        top:0,
        width:'auto',height:'auto',
        textAlign:'center'
    });
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
        if (controller.perform_twitter_auth()) {
            Titanium.API.info("twitter auth successful");
            controller.next(win);
        };
    });

    // add the components, hide the spinner, show the view
    scr1_view.add(label_appname, scr1_label_tagline, scr1_label_instructions, scr1_button_twitter);
    win.add(scr1_view);
}
