(function(){
	
	Ti.include('/app/controllers/needHelp2.js');
	
	describe('needHelp2.js', function() {

	    beforeEach(function() {
	        c = mcv.c.needhelp2;
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
                expect(c.n).toHaveBeenCalledWith(mcv.c.needhelp3);
            });

            it("captures user input", function() {
                spyOn(c,'n');
                App.d.taskRequest = {attributes:{location:null}}; // mock this using literals because there are no function calls used that i can mock

                var category_id = 378;
                c.next(category_id);
                expect(App.d.taskRequest.attributes.category_id).toEqual(category_id);
                expect(c.n).toHaveBeenCalledWith(mcv.c.needhelp3);
            });

        });
        
	});
	
})();
