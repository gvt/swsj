//
// global app startup
//
var App = {
    
    start: function()
    {
        Ti.include("app/views/common.js");
        Ti.include("app/controllers/signin.js");
        winSignin.render();
    },

    tests_enabled: false,

    testing: function()
    {
        Ti.include('/test/enabled.js');
        return this.tests_enabled === true;
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
