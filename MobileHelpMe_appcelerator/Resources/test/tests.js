(function(){
	Ti.include('/test/lib/jasmine-1.0.2.js');
	Ti.include('/test/lib/jasmine-titanium.js');
	
	// Include all the test files
	Ti.include('/test/test_signin.js');
	
	jasmine.getEnv().addReporter(new jasmine.TitaniumReporter());
	jasmine.getEnv().execute();
})();