mcv.create('view', 'needhelp2', {
    
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
        var label = Ti.UI.createLabel({
            text:"Choose which category best describes your need",
            top:-260,
            left:20,
            font:{fontSize:24}
        });
        var tab = Ti.UI.createTableView({
            top:170,
            data: mcv.m.TaskRequest.categories,
            rowHeight: 40,
            height:    40 * mcv.m.TaskRequest.categories.length,
            font:{fontSize:20}
        });
    
        tab.addEventListener('click', function(click_event) {
            Titanium.API.debug("view.needhelp2 :: tableView click event.. {title:" + click_event.row.title + ", id:"+ click_event.row.id +"}");
            controller.next(click_event.row.id);
        });

        view.add(label, tab);
        win.add(view);
    },
});
