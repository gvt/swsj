mcv.create('view', 'needhelpend', {

    //
    // accepts an instance of Ti.UI.Window and an instance of mcv controller.
    // accepts an instance of Ti.UI.Window
    //
    render: function(win, controller)
    {
        var tr = App.d.taskRequest;
        //
        // create a view and 4 labels
        //
        var view = Ti.UI.createView({layout:'vertical', height:'20%', width:'80%', top   :'25%', align:'center'});
        // confirm the help request
        var lblCategory = Ti.UI.createLabel({
                text:"Category: " + tr.attributes.category_id,
                height: 40,
                font:{fontSize:24}
        });
        var lblDescription = Ti.UI.createLabel({
                text:"Description: " + tr.attributes.description,
                height: 40,
                font:{fontSize:24}
        });
        var lblLocation = Ti.UI.createLabel({
                text:"Location: " + tr.attributes.location,
                height: 40,
                font:{fontSize:24}
        });
        var lblFeedback = Ti.UI.createLabel({
                text: (tr.isNewRecord() ? "Unable to submit your request :(": "Your request was submitted successfully."),
                height: 80,
                font:{fontSize:16},
                backgroundColor: 'white'
        });
        var btnOK = Ti.UI.createButton({
                title:"View status",
                height: 40,
                font:{fontSize:24}
        });

        btnOK.addEventListener('click', function() {
            alert("you've reached the end, for now.");
        });

        view.add(lblCategory, lblDescription, lblLocation, lblFeedback);
        win.add(view);
    },
});
