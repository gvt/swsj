//
// global app startup
//
Ti.include("debug.js");

var App = {
    
    start: function()
    {
        Ti.include("app/controllers/needHelp1.js");
        win.render();
    },

    tests_enabled: false,

    testing: function()
    {
        Ti.include('/test/enabled.js');
        return this.tests_enabled === true;
    },
    
    userCanHelp: false, // default to opt-in
    location: "", // to contain geolocation
    needHelpCategory: ""
};

//
// if testing run the test suite, otherwise render the UI
//
if (App.testing()) {
    Ti.include('/test/tests.js');
} else {
    App.start();
}
