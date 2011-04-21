//
// global app startup
//
Ti.include("debug.js");
// Ti.include("lib/.js");

var winRoot = Ti.UI.createWindow(); // top-level window in this app, intentionally in the global scope.
var App = { // top-level App object, also intentionally in the global scope.
    
    start: function()
    {
        Ti.include("app/controllers/signin.js");
        var w = Signin.render();
        winRoot.add(w);
        w.open();
    },

    tests_enabled: false,

    testing: function()
    {
        Ti.include('/test/enabled.js');
        return this.tests_enabled === true;
    },
    
};

// Ti.include("app/controllers/_base.js");

//
// if testing run the test suite, otherwise render the UI
//
if (App.testing()) {
    Ti.include('test/tests.js');
} else {
    App.start();
}
