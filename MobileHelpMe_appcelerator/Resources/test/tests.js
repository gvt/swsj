// there are tests for the MCV framework too. see test/tests_for_the_mcv_framework.js
(function(){
	Ti.include('test/lib/jasmine-1.0.2.js');
	Ti.include('test/lib/jasmine-titanium.js');
	
    // controllers
    Ti.include('test/controllers/test_signin.js');
    Ti.include('test/controllers/test_dispatch.js');
    Ti.include('test/controllers/test_needHelp1.js');
    Ti.include('test/controllers/test_needHelp2.js');
    Ti.include('test/controllers/test_needHelp3.js');
    Ti.include('test/controllers/test_needHelp4.js');
    // models
    Ti.include('test/models/test_task_request.js');
    // views
    Ti.include('test/views/test_signin.js');
    Ti.include('test/views/test_dispatch.js');
    Ti.include('test/views/test_needhelp1.js');
    Ti.include('test/views/test_needhelp2.js');
    Ti.include('test/views/test_needhelp3.js');
    Ti.include('test/views/test_needhelp4.js');
    Ti.include('test/views/test_needhelpend.js');
    
	
	jasmine.getEnv().addReporter(new jasmine.TitaniumReporter());
	jasmine.getEnv().execute();
})();