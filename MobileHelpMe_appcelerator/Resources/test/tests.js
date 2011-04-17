(function(){
	Ti.include('/test/lib/jasmine-1.0.2.js');
	Ti.include('/test/lib/jasmine-titanium.js');
	
	// Include all the test files
    Ti.include('/test/test_signin.js');
    Ti.include('/test/test_dispatch.js');
    Ti.include('/test/test_needHelp1.js');
    Ti.include('/test/test_needHelp2.js');
	
	jasmine.getEnv().addReporter(new jasmine.TitaniumReporter());
	jasmine.getEnv().execute();
})();