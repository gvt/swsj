Ti.include("/app/views/common.js");

//
// accepts an instance of Ti.UI.Window
//
function view_init(win)
{
    //
    // create a view and 2 buttons
    //
    var view = Ti.UI.createView();
    var label = Ti.UI.createLabel({
        text:"Let's get your location...",
        top:-200,
        left:20
    });
    var loc_field = Ti.UI.createTextField({
        top:160,
        left:20,
        width:280,
        height:35,
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
    });
    var next_button = Ti.UI.createButton({
        title:"Next",
        top:'auto',
        right:20,
        width:150,
        height:35
    });
    
    var gpsCallBack = function(location_event)
    {
        Titanium.API.debug("gpsCallBack...");
        if (location_event.success === true) {
            gps_display     = location_event.coords.latitude + ", " + location_event.coords.longitude;
            loc_field.value = gps_display;
        } else {
            gps_display     = location_event.error + " [error code " + location_event.code + "]";
            loc_field.value = gps_display;
        }
    };

    Ti.Geolocation.purpose = "Need your location to fulfill your help request"; // required
    App.location = Ti.Geolocation.getCurrentPosition(gpsCallBack);

    next_button.addEventListener('click', function() {
        Titanium.API.debug("button click event...");
        // go to next screen
        win.nextStep();
    });

    // add the components, show the view
    view.add(label, loc_field, next_button);
    win.add(view);
    win.open();
    return view; // return the view so that it can be removed from the window later
}
