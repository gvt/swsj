mcv.create('view', 'needhelp3', {
    
    //
    // accepts an instance of Ti.UI.Window and an instance of mcv controller.
    // accepts an instance of Ti.UI.Window
    //
    render: function(win, controller)
    {
        //
        // create a view and 2 buttons
        //
        var view = Ti.UI.createView();
        // user instructions
        var lblInstructions = Ti.UI.createLabel({
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
        var btnDone = Titanium.UI.createButton({
            systemButton:Titanium.UI.iPhone.SystemButton.DONE
        });
        // form control to enter description
        var taDescription = Ti.UI.createTextArea({
            top:170,
            width:280,
            height:140,
            borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            borderRadius:10,

            keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
            returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
            suppressReturn:false, // to allow for newlines to be entered
            keyboardToolbar:[flexSpace,btnDone],
            keyboardToolbarColor: '#999',
            keyboardToolbarHeight: 30,
        
            color: 'black',
            backgroundColor: 'white',
            font:{fontSize:14}
        });
        // setup the next button click event handler
        btnDone.addEventListener('click', function() {
            Titanium.API.debug("button [done] click event...");
            taDescription.blur();
            Titanium.App.fireEvent("hideKeyboardToolbar");
        });
        // next button
        var btnNext = Ti.UI.createButton({
            title:"Next",
            bottom:20,
            right:20,
            width:150,
            height:35
        });

        // setup the next button click event handler
        btnNext.addEventListener('click', function() {
            controller.next(taDescription.value);
        });

        view.add(lblInstructions, taDescription, btnNext);
        win.add(view);
    },
});
