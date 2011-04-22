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
        var btnNeedHelp = Titanium.UI.createButton({
            title:"I need help!",
            height:100,
            width:220,
            top:100,
            backgroundColor:'red',
            font:{fontSize:36}
        });
        var btnCanHelp = Titanium.UI.createButton({
            title:"I can help.",
            height:100,
            width:220,
            top:250,
            backgroundColor:'green',
            font:{fontSize:36}
        });

        // setup the button click handlers
        btnNeedHelp.addEventListener('click', function() {
            controller.userNeedsHelp();
        });
        btnCanHelp.addEventListener('click', function() {
            controller.userCanHelp();
        });

        // add the components, show the view
        view.add(btnNeedHelp, btnCanHelp);
        win .add(view);
    },

});

