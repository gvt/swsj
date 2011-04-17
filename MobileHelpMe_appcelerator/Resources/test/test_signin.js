(function(){
	
	// To learn how to write Jasmine tests, please read Jasmine documentation:
	// https://github.com/pivotal/jasmine/wiki

	Ti.include('/app/controllers/signin.js');
	
	describe('signin.js', function() {

        it("creates a window", function() {
            expect(winSignin).not.toBeNull();
        });

        it("defines function render", function() {
            expect(winSignin.render).toBeDefined();
        });
        
        it("defines function perform_twitter_auth", function() {
            expect(perform_twitter_auth).toBeDefined();
        });
        
	});
	
})();
