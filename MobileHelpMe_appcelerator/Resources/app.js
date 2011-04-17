
var App = {
    
    start: function()
    {
        Ti.include("app/controllers/signin.js");
    },

    tests_enabled: false,

    testing: function()
    {
        Ti.include('/test/enabled.js');
        return this.tests_enabled === true;
    }
};

if (App.testing()) {
    Ti.include('/test/tests.js');
} else {
    App.start();
}
