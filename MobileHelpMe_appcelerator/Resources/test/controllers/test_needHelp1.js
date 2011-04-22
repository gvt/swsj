(function(){
	
	Ti.include('/app/controllers/needHelp1.js');
	
	describe('needhelp1 controller', function() {

	    beforeEach(function() {
	        c = mcv.c.needhelp1;
            expect(c).toBeDefined();
            expect(c).not.toBeNull();
	    });

        describe('next', function() {

            it("exists", function() {
                expect(c.next).toBeDefined();
            });

            it("passes to expected next controller", function() {
                spyOn(c,'n');

                c.next();
                expect(c.n).toHaveBeenCalledWith(mcv.c.needhelp2);
            });

            it("captures user input", function() {
                spyOn(c,'n');
                App.d.taskRequest = {attributes:{location:null}}; // mock this using literals because there are no function calls used that i can mock

                var loc = "37.77018737792969, -122.4037094116211";
                c.next(loc);
                expect(App.d.taskRequest.attributes.location).toEqual(loc);
                expect(c.n).toHaveBeenCalledWith(mcv.c.needhelp2);
            });

        });

	});

})();
