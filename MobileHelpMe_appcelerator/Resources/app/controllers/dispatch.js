mcv.create('controller', 'dispatch', {

    //
    // passes control to the next controller
    // accepts an arg that is a {} of data for the call to TaskRequest.build
    //
    userNeedsHelp: function(request_attrs)
    {
        App.d.taskRequest = mcv.m.TaskRequest.build(request_attrs);
        this.n(mcv.c.needhelp1);
    },

    //
    // passes control to the next controller
    //
    userCanHelp: function()
    {
        delete App.d.taskRequest; // clear any existing TaskRequest begun
        this.n(mcv.c.canhelp1);
    },
});
