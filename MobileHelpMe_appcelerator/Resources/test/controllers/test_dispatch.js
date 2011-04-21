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

            it("captures user input and calls n()", function() {
                spyOn(c,'n');
                expect(App.d.taskRequest).not.toBeDefined();
                
                var tr = {description:"just testing"};
                c.userNeedsHelp(tr);
                
                expect(App.d.taskRequest.attributes.description).toEqual("just testing");
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

            it("clears any TaskRequest already begun", function() {
                spyOn(c,'n');
                App.d.taskRequest = {};
                expect(App.d.taskRequest).toBeDefined();

                c.userCanHelp();
                expect(App.d.taskRequest).not.toBeDefined();
                expect(c.n).toHaveBeenCalledWith(mcv.c.canhelp1);
            });

    	});
        
	});
	
})();
