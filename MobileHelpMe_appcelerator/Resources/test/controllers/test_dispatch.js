(function(){
	
	Ti.include('/app/controllers/dispatch.js');

	describe('dispatch controller', function() {
	    beforeEach(function() {
	        c = mcv.c.dispatch;
	        expect(c).toBeDefined();
	        expect(c).not.toBeNull();
	    });

    	describe('userNeedsHelp', function() {

            it("exists", function() {
                expect(c.userNeedsHelp).toBeDefined();
            });

            it("calls n() as expected", function() {
                spyOn(c,'n');
                c.userNeedsHelp();
                expect(c.n).toHaveBeenCalledWith(mcv.c.needhelp1);
            });

    	});

    	describe('userCanHelp', function() {

            it("exists", function() {
                expect(c.userCanHelp).toBeDefined();
            });

            it("calls n() as expected", function() {
                spyOn(c,'n');
                c.userCanHelp();
                expect(c.n).toHaveBeenCalledWith(mcv.c.canhelp1);
            });

    	});
        
	});
	
})();
