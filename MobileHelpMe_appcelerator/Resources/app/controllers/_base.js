mcv.base('controller', {
    //
    // render the view for this controller, by using the name of this controller
    // renders the screen to a new instance of Ti.UI.Window and returns it UNopened.
    //
	r: function()
	{
	    var n = this.name;
	    Ti.API.debug("controller.base :: r() called for [" + n + "]");
        var w = Ti.UI.createWindow();
        mcv.v[n].render(w,this);
        return w;
	},
    //
	// this method allows for r to be called like super would be
	//
	render: function()
	{
	    Ti.API.debug("controller.base :: render() called for [" + this.name + "]");
        return this.r();
	},

    //
    // pops a window on the stack of the NavGroup and moves to it.
    //
    n: function(nextController)
    {
	    Ti.API.debug("controller.base :: n() called for [" + this.name + "] to nextController [" + nextController.name + "]");
        App.w.nav.open(nextController.render());
    },
});
