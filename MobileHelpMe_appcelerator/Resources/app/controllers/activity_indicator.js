//
//  CREATE CUSTOM LOADING INDICATOR
//
var ActivityIndicator = {
    
    win: null,
    indicator: null,

    show: function()
    {
    	if (Ti.Platform.osname != 'android')
    	{
    		// window container
    		this.win = Titanium.UI.createWindow({
    			height:150,
    			width:150
    		});

    		// black view
    		var indView = Titanium.UI.createView({
    			height:150,
    			width:150,
    			backgroundColor:'#000',
    			borderRadius:10,
    			opacity:0.8
    		});
    		this.win.add(indView);
    	}

    	// loading indicator
    	this.indicator = Titanium.UI.createActivityIndicator({
    		style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG,
    		height:30,
    		width:30,
    	});

    	if (Ti.Platform.osname != 'android')
    	{
    		this.win.add(this.indicator);

    		// message
    		var message = Titanium.UI.createLabel({
    			text:'Loading',
    			color:'#fff',
    			width:'auto',
    			height:'auto',
    			font:{fontSize:20,fontWeight:'bold'},
    			bottom:20
    		});
    		this.win.add(message);
    		this.win.open();
    	} else {
    		this.indicator.message = "Loading";
    	}
    	this.indicator.show();

    },

    hide: function()
    {
    	this.indicator.hide();
    	if (Ti.Platform.osname != 'android') {
    		this.win.close({opacity:0,duration:500});
    	}
    }
    
}
