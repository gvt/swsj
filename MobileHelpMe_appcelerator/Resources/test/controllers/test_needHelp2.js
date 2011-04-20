(function(){
	
	Ti.include('/app/controllers/needHelp2.js');
	
	describe('needHelp2.js', function() {

        it("creates a window", function() {
            expect(win).not.toBeNull();
        });

        it("defines function win.render", function() {
            expect(win.render).toBeDefined();
        });
        
        it("defines function win.nextStep", function() {
            expect(win.nextStep).toBeDefined();
        });
        
	});
	
})();
