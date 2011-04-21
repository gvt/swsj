mcv.create('view', 'signin', {
    
    //
    // accepts an instance of Ti.UI.Window and an instance of <generic controller>
    // returns an instance of Ti.UI.View
    //
    render: function(win, controller)
    {
        if (controller.isAlreadySignedIn()) {

            var lblFeedback = Titanium.UI.createLabel({
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
            win.add(lblFeedback, btnContinue);

            return;
        }

        win.title = "Sign In";
        //
        // create the first screen: 3 labels and a button
        //
        var lblAppname = Titanium.UI.createLabel({
            text:"Brownie Points",
            font:{fontSize:48},
            color:'white',
            height:'auto',
            top:0,
            textAlign:'center'
        });
        var lblTagline = Titanium.UI.createLabel({
            text:"Get help and help others",
            color:'blue',
            font:{fontSize:24},
            height:'auto',
            top:25,
            textAlign:'center'
        });
        var lblInstructions = Titanium.UI.createLabel({
            text:"Sign-in to get started",
            color:'white',
            font:{fontSize:24},
            height:'auto',
            top:50,
            textAlign:'center'
        });
        var btnTwitter = Titanium.UI.createButton({
            height: 24,
            width:151,
            top:75,
            backgroundImage:"iphone/sign-in-with-twitter.png" // dimensions of img 385x65. could use this: http://blog.140proof.com/post/569779156/scalable-sign-in-button
        });

        // button click handler
        btnTwitter.addEventListener('click', function() {
            Titanium.API.debug("twitter button click event...");
            if (controller.isAlreadySignedIn()) {
                controller.next(win);
            } else {
                //
                // TODO: why is this not working right?
                //
                controller.doTwitterAuth(function(){
                    Titanium.API.info("twitter auth successful");
                    controller.next(win);
                });
            }
        });

        // add the components, hide the spinner, show the view
        var view = Ti.UI.createView({layout:'vertical', height:'100%', width:'80%', align:'center'}); //, borderColor:'red'   , borderWidth:2});
        view.add(lblAppname, lblTagline, lblInstructions, btnTwitter);
        win.add(view);
    },

});
