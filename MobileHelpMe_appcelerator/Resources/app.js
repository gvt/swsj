//
// global app startup
//
Ti.include("debug.js");

var App = {
    
    start: function()
    {
        Ti.include("app/controllers/dispatch.js");
        win.render();
    },

    tests_enabled: false,

    testing: function()
    {
        Ti.include('/test/enabled.js');
        return this.tests_enabled === true;
    },
    
    User: {
        canHelp         : false, // default to opt-in
        location        : ""   , // to contain geolocation
        helpCategoryId  : null ,
        helpDescription : ""   ,
        helpAmount      : 0    ,
    }
};

//
// if testing run the test suite, otherwise render the UI
//
if (App.testing()) {
    Ti.include('/test/tests.js');
} else {
    App.start();
}
