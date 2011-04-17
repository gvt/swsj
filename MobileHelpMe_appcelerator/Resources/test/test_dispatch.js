(function(){
	
	Ti.include('/app/controllers/dispatch.js');
	
	describe('dispatch.js', function() {

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
