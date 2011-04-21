mcv.base('controller', {
    //
    // render the view for this controller, by using the name of this controller
    // renders the screen to a new instance of Ti.UI.Window and returns it UNopened.
    //
	render: function()
	{
        var w = Ti.UI.createWindow();
        mcv.v[this.name].render(w,this);
        return w;
	},

    //
    // pops a window on the stack of the NavGroup and moves to it.
    //
    n: function(nextC)
    {
        App.w.nav.open(nextC.render());
    },
});
