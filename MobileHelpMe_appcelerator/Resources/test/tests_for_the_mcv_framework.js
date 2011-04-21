(function(){
    //
    // leave the lib includes below uncommented to run this test suite by itself.
    // comment them out to run inconjuction with the app code tests (test/test.js)
    // if the lib files are included twice (here and in test.js) you'll get an stack too deep error.
    //
    Ti.include('test/lib/jasmine-1.0.2.js');
    Ti.include('test/lib/jasmine-titanium.js');
	
    // framework
    Ti.include('test/mcv-1.0-tests/core.js');
    Ti.include('test/mcv-1.0-tests/inheritance.js');
    Ti.include('test/mcv-1.0-tests/helpers.js');
	
	jasmine.getEnv().addReporter(new jasmine.TitaniumReporter());
	jasmine.getEnv().execute();
})();