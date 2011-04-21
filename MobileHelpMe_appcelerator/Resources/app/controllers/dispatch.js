mcv.create('controller', 'dispatch', {

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
