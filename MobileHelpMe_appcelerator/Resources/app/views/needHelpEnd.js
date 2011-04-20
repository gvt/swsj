Ti.include("/app/views/common.js");

//
// accepts an instance of Ti.UI.Window
//
function view_init(win)
{
    //
    // create a view and 2 buttons
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


    // add the components, show the view
    view.add(labelCategory, labelDesc, labelLocation);
    win.add(view);
    win.open();
    return view; // return the view so that it can be removed from the window later
}
