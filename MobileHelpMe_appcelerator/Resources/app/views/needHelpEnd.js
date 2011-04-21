mcv.create('view', 'needhelpend', {

    //
    // accepts an instance of Ti.UI.Window and an instance of mcv controller.
    // accepts an instance of Ti.UI.Window
    //
    render: function(win, controller)
    {
        var task_request = controller.task_request;
        //
        // create a view and 4 labels
        //
        var view = Ti.UI.createView({layout:'vertical', height:'20%', width:'80%', top   :'25%', align:'center'});
        // confirm the help request
        var labelCategory = Ti.UI.createLabel({
                text:"Category: " + task_request.category_id,
                height: 40,
                font:{fontSize:24}
        });
        var labelDesc = Ti.UI.createLabel({
                text:"Description: " + task_request.description,
                height: 40,
                font:{fontSize:24}
        });
        var labelLocation = Ti.UI.createLabel({
                text:"Location: " + task_request.location,
                height: 40,
                font:{fontSize:24}
        });
        var labelFeedback = Ti.UI.createLabel({
                text: (task_request.isNewRecord() ? "Unable to submit your request :(": "Your request was submitted successfully."),
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

        view.add(labelCategory, labelDesc, labelLocation, labelFeedback);
        win.add(view);
    },
});
