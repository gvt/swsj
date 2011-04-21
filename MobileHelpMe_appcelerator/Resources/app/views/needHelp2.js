//
// accepts an instance of Ti.UI.Window
//
function view_init(win, controller)
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
    var tab = Ti.UI.createTableView({
        top:170,
        data:TaskRequest.categories,
        rowHeight: 40,
        height:    40 * TaskRequest.categories.length,
        font:{fontSize:20}
    });
    
    tab.addEventListener('click', function(click_event) {
        Titanium.API.debug("tableView click event... [" + click_event.row.title + "]");
        App.User.helpCategoryId = click_event.row.id;
        controller.next(win);
    });

    view.add(label, tab);
    win.add(view);
};
