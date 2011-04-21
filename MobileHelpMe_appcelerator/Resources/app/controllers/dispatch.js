mcv.create('controller', 'dispatch', {

    //
    // calls this object's parent n() method to pass control to the next controller.
    //
    next: function()
    {
        this.n(mcv.c.dispatch);
    },

    //
    // passes control to the next controller
    //
    userNeedsHelp: function()
    {
        this.n(mcv.c.needhelp1);
    },

    //
    // passes control to the next controller
    //
    userCanHelp: function()
    {
        this.n(mcv.c.canhelp1);
    },
});
