//
// global app startup
//
var App = {
    
    start: function()
    {
        Ti.include("app/controllers/signin.js");
        win.render();
    },

    tests_enabled: false,

    testing: function()
    {
        Ti.include('/test/enabled.js');
        return this.tests_enabled === true;
    },
    
    userCanHelp: false, // default to opt-in
    location: "" // to contain geolocation
};

//
// if testing run the test suite, otherwise render the UI
//
if (App.testing()) {
    Ti.include('/test/tests.js');
} else {
    App.start();
}
