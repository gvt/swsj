(function(){
	
	// To learn how to write Jasmine tests, please read Jasmine documentation:
	// https://github.com/pivotal/jasmine/wiki

	Ti.include('/app/controllers/signin.js');
	
	describe('signin.js', function() {

        it("creates a window", function() {
            expect(win).not.toBeNull();
        });

        it("defines function render", function() {
            expect(win.render).toBeDefined();
        });
        
        it("defines function perform_twitter_auth", function() {
            expect(perform_twitter_auth).toBeDefined();
        });
        
	});
	
})();
