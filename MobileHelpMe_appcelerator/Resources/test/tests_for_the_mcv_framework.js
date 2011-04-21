//
// uncomment the lib includes below to run this test suite by itself.
// leave the libs commented to run inconjuction with the app code tests (test/test.js)
// if the lib files are included twice (here and in test.js) you'll get an stack too deep error.
//
(function(){
    // Ti.include('test/lib/jasmine-1.0.2.js');
    // Ti.include('test/lib/jasmine-titanium.js');
	
    // framework
    Ti.include('test/mcv-1.0-tests/core.new.js');
    Ti.include('test/mcv-1.0-tests/inheritance.new.js');
    Ti.include('test/mcv-1.0-tests/helpers.new.js');
	
	jasmine.getEnv().addReporter(new jasmine.TitaniumReporter());
	jasmine.getEnv().execute();
})();