Ti.include("/app/views/common.js");

//
// accepts an instance of Ti.UI.Window
//
function view_init(win)
{
    //
    // create a view and 2 buttons
    //
    var view = Ti.UI.createView();
    var label = Ti.UI.createLabel({
        text:"Choose which category best describes your need",
        top:-260,
        left:20,
        font:{fontSize:24}
    });
    var data = [
        {title:"Roadside assistance"},
        {title:"Bring me something"},
        {title:"Fix something"},
        {title:"Carry stuff"},
        {title:"Other"},
    ];
    var tab = Ti.UI.createTableView({
        top:170,
        data:data,
        rowHeight: 40,
        height:    40 * data.length,
        font:{fontSize:20}
    });
    

    tab.addEventListener('click', function(click_event) {
        Titanium.API.debug("tableView click event... [" + click_event.row.title + "]");
        App.needHelpCategory = click_event.row.title;
        // go to next screen
        win.nextStep();
    });

    // add the components, show the view
    view.add(label, tab);
    win.add(view);
    win.open();
    return view; // return the view so that it can be removed from the window later
}
