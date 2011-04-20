Ti.include("/app/views/common.js");

//
// accepts an instance of Ti.UI.Window
//
function view_init(win, tr)
{
    //
    // create a view and 4 labels
    //
    var view = Ti.UI.createView({layout:'vertical', height:'20%', width:'80%', top   :'25%', align:'center'});
    // confirm the help request
    var labelCategory = Ti.UI.createLabel({
            text:"Category: " + App.User.helpCategory,
            height: 40,
            font:{fontSize:24}
    });
    var labelDesc = Ti.UI.createLabel({
            text:"Description: " + App.User.helpDescription,
            height: 40,
            font:{fontSize:24}
    });
    var labelLocation = Ti.UI.createLabel({
            text:"Location: " + App.User.location,
            height: 40,
            font:{fontSize:24}
    });
    var labelFeedback = Ti.UI.createLabel({
            text: (tr.isNewRecord() ? "Unable to submit your request :(": "Your request was submitted and received."),
            height: 40,
            font:{fontSize:24}
    });
    var btnOK = Ti.UI.createButton({
            title:"View status",
            height: 40,
            font:{fontSize:24}
    });

    btnOK.addEventListener('click', function() {
        win.nextStep();
    });

    // add the components, show the view
    view.add(labelCategory, labelDesc, labelLocation);
    win.add(view);
    win.open();
    return view; // return the view so that it can be removed from the window later
}
