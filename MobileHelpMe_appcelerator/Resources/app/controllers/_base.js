mcv.base('controller', {
	render: function()
	{
        var w = Ti.UI.createWindow();
        Ti.include("app/views/signin.js");
        view_init(w, this);
        return w;
	},
	next: function()
	{
	},
});
