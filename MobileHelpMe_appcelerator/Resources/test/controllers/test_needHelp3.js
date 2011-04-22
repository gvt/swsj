(function(){
	
	Ti.include('/app/controllers/needHelp3.js');

	describe('needhelp3 view', function() {

	    beforeEach(function() {
	        c = mcv.c.needhelp3;
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
                expect(c.n).toHaveBeenCalledWith(mcv.c.needhelp4);
            });

            it("captures user input", function() {
                spyOn(c,'n');
                App.d.taskRequest = {attributes:{description:null}}; // mock this using literals because there are no function calls used that i can mock

                var d = "this is description";
                c.next(d);
                expect(App.d.taskRequest.attributes.description).toEqual(d);
                expect(c.n).toHaveBeenCalledWith(mcv.c.needhelp4);
            });

        });
        
	});
	
})();
