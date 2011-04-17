(function(){
	
	// To learn how to write Jasmine tests, please read Jasmine documentation:
	// https://github.com/pivotal/jasmine/wiki

	Ti.include('/app/signin.js');
	
	describe('app/signin.js', function() {

        it("creates a window", function() {
            expect(win).not.toBeNull();
        });

        it("creates a view", function() {
            expect(scr1_view).not.toBeNull();
        });

        it("creates a label", function() {
            expect(scr1_label_appname).not.toBeNull();
        });

        it("creates a label 2", function() {
            expect(scr1_label_tagline).not.toBeNull();
        });

        it("creates a label 3", function() {
            expect(scr1_label_instructions ).not.toBeNull();
        });

        it("creates a button", function() {
            expect(scr1_button_twitter).not.toBeNull();
        });

        it("defines function perform_twitter_auth", function() {
            expect(perform_twitter_auth).toBeDefined();
        })
	});
	
})();
