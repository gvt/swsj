//
//  create custom loading indicator -- not working (null objects in hide())
//
var AI_win       = null; // globals needed to keep state
var AI_indicator = null; // globals needed to keep state
var ActivityIndicator = {
    
    show: function()
    {
    	if (Ti.Platform.osname != 'android')
    	{
    		// window container
    		AI_win = Titanium.UI.createWindow({
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
    		AI_win.add(indView);
    	}

    	// loading indicator
    	AI_indicator = Titanium.UI.createActivityIndicator({
    		style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG,
    		height:30,
    		width:30,
    	});

    	if (Ti.Platform.osname != 'android')
    	{
    		AI_win.add(AI_indicator);

    		// message
    		var message = Titanium.UI.createLabel({
    			text:'Loading',
    			color:'#fff',
    			width:'auto',
    			height:'auto',
    			font:{fontSize:20,fontWeight:'bold'},
    			bottom:20
    		});
    		AI_win.add(message);
    		AI_win.open();
    	} else {
    		AI_indicator.message = "Loading";
    	}
    	AI_indicator.show();

    },

    hide: function()
    {
    	if (AI_indicator) AI_indicator.hide();
    	if (Ti.Platform.osname != 'android') {
    		AI_win.close({opacity:0,duration:500});
    	}
    }
    
}
