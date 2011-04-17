
var App = {
    
    start: function()
    {
        Ti.include("app/activity_indicator.js");
        Ti.include("app/signin.js");
    },

    tests_enabled: false,

    testing: function()
    {
        Ti.include('/test/enabled.js');
        return this.tests_enabled === true;
    }
};

Ti.env = {
    
};

if (App.testing()) {
    Ti.include('/test/tests.js');
} else {
    App.start();
}
