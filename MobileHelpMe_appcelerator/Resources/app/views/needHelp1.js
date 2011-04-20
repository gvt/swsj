Ti.include("/app/views/common.js");

//
// accepts an instance of Ti.UI.Window
//
function view_init(win)
{
    //
    // create a view and 2 buttons
    //
    var view  = Ti.UI.createView({layout:'vertical', height:'20%', width:'80%', top:'25%', align:'center'});
    var labelIntructions = Ti.UI.createLabel({
        text:"Let's get your location...",
        // top:-300,
        // left:20
    });
    var txtLocation = Ti.UI.createTextField({
        // top:180,
        // left:20,
        // width:280,
        height:35,
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
    });
    var btnNext = Ti.UI.createButton({
        title:"Next",
        bottom:20,
        right:20,
        width:150,
        height:35
    });
    view.add(labelIntructions, txtLocation, btnNext);

    
    Ti.Geolocation.purpose = "Need your location to fulfill your help request"; // required
    var gpsCallBack = function(locationEvent)
    {
        Ti.API.debug("gpsCallBack...");
        
        if (locationEvent.success === false) {
            gps_display     = locationEvent.error + " [error code " + locationEvent.code + "]";
            txtLocation.value = gps_display;
            return;
        }

        var lat = locationEvent.coords.latitude, lng = locationEvent.coords.longitude;
        gps_display     = lat + ", " + lng;
        txtLocation.value = gps_display;
    };
    // actually perform the Geolocation and store it
    Ti.Geolocation.getCurrentPosition(gpsCallBack);

    btnNext.addEventListener('click', function() {
        Titanium.API.debug("button click event...");
        // go to next screen
        win.nextStep();
    });

    win.add(view);
    win.open();
    return view; // return the view so that it can be removed from the window later
}
