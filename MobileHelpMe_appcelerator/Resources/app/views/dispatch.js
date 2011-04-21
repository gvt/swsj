mcv.create('view', 'dispatch', {
    
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
        var button_need_help = Titanium.UI.createButton({
            title:"I need help!",
            height:100,
            width:220,
            top:100,
            backgroundColor:'red',
            font:{fontSize:36}
        });
        var button_can_help = Titanium.UI.createButton({
            title:"I can help.",
            height:100,
            width:220,
            top:250,
            backgroundColor:'green',
            font:{fontSize:36}
        });

        // setup the button click handlers
        button_need_help.addEventListener('click', function() {
            Titanium.API.info("user needs help");
            controller.userNeedsHelp(win);
        });
        button_can_help.addEventListener('click', function() {
            Titanium.API.info("user can help");
            controller.userCanHelp(win);
        });

        // add the components, show the view
        view.add(button_need_help, button_can_help);
        win .add(view);
    },

});

