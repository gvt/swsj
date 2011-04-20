(function(){
	
	Ti.include('/app/controllers/dispatch.js');
	
	describe('dispatch.js', function() {

        it("creates a window", function() {
            expect(win).not.toBeNull();
        });

        it("defines function win.render", function() {
            expect(win.render).toBeDefined();
        });
        

    	describe('function nextStep', function() {

            it("exists", function() {
                expect(win.nextStep).toBeDefined();
            });

            it("works for NEED help", function() {
                spyOn(win,'remove');
                win.nextStep(true);
                expect(win.remove).toHaveBeenCalledWith(null);
                // expect().toBeDefined();
            });

            it("works for CAN help", function() {
                expect(win.nextStep).toBeDefined();
            });

    	});
        
	});
	
})();
