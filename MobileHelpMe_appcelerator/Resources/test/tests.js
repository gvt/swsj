(function(){
	Ti.include('test/lib/jasmine-1.0.2.js');
	Ti.include('test/lib/jasmine-titanium.js');
	Ti.include('debug.js');
	
    // controllers
    Ti.include('test/controllers/test_signin.js');
    Ti.include('test/controllers/test_dispatch.js');
    Ti.include('test/controllers/test_needHelp1.js');
    Ti.include('test/controllers/test_needHelp2.js');
    // models
    Ti.include('test/models/task_request_test.js');
	
	jasmine.getEnv().addReporter(new jasmine.TitaniumReporter());
	jasmine.getEnv().execute();
})();