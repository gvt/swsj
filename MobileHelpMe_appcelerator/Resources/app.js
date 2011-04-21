//
// app dependencies and startup
//
// for debugging
Ti.include("debug.js");
// the framework
Ti.include('lib/mcv-1.0-full.js');
// app code: controllers
Ti.include("app/controllers/_base.js"      );
Ti.include("app/controllers/canHelp1.js"   );
Ti.include("app/controllers/dispatch.js"   );
Ti.include("app/controllers/needHelp1.js"  );
Ti.include("app/controllers/needHelp2.js"  );
Ti.include("app/controllers/needHelp3.js"  );
Ti.include("app/controllers/needHelp4.js"  );
Ti.include("app/controllers/needHelpEnd.js");
Ti.include("app/controllers/signin.js"     );
// app code: models
Ti.include("app/models/task_request.js");
// app code: views
// Ti.include("app/views/_base.js"      );
Ti.include("app/views/canHelp1.js"   );
Ti.include("app/views/dispatch.js"   );
Ti.include("app/views/needHelp1.js"  );
Ti.include("app/views/needHelp2.js"  );
Ti.include("app/views/needHelp3.js"  );
Ti.include("app/views/needHelp4.js"  );
Ti.include("app/views/needHelpEnd.js");
Ti.include("app/views/signin.js"     );


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
    // Ti.include('test/tests_for_the_mcv_framework.js');
} else {
    App.start();
}
