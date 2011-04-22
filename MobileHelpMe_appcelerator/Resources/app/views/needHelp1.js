mcv.create('view', 'needhelp1', {
    
    //
    // accepts an instance of Ti.UI.Window and an instance of mcv controller.
    // accepts an instance of Ti.UI.Window
    //
    render: function(win, controller)
    {
        //
        // create a view and 2 buttons
        //
        var view  = Ti.UI.createView({layout:'vertical', height:'20%', width:'80%', top:'25%', align:'center'});
        var labelIntructions = Ti.UI.createLabel({
            text:"Let's get your location...",
            height:35,
        });
        var txtLocation = Ti.UI.createTextField({
            height:35,
            borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
        });
        var btnNext = Ti.UI.createButton({
            title:"Next",
            // bottom:20,
            // right:20,
            width:150,
            height:35
        });
        view.add(labelIntructions, txtLocation, btnNext);

    
        Ti.Geolocation.purpose = "Need your location to fulfill your help request"; // required
        var fnGeoHandler = function(locationEvent)
        {
            if (!locationEvent.success) {
                strLocation     = locationEvent.error + " [error code " + locationEvent.code + "]";
                Ti.API.warn("view.needhelp1 :: fnGeoHandler() got an error response: \"" + strLocation + "\"");
                txtLocation.value = strLocation;
                return;
            }
            var lat = locationEvent.coords.latitude, lng = locationEvent.coords.longitude;
            strLocation     = lat + ", " + lng;
            Ti.API.debug("view.needhelp1 :: fnGeoHandler() got response: " + strLocation);
            txtLocation.value = strLocation;
        };
        // actually perform the Geolocation and store it
        Ti.Geolocation.getCurrentPosition(fnGeoHandler);

        btnNext.addEventListener('click', function() {
            controller.next(txtLocation.value);
        });

        win.add(view);
    },
});
