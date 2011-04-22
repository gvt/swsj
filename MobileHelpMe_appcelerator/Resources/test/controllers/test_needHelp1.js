(function(){
	
	Ti.include('/app/controllers/needHelp1.js');
	
	describe('needhelp1 controller', function() {

	    beforeEach(function() {
	        c = mcv.c.needhelp1;
            expect(c).toBeDefined();
            expect(c).not.toBeNull
            ();
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

            xit("captures user input", function() {
                spyOn(c,'n');

                var tr = {blah:"..."};
                c.next();
                expect(c.n).toHaveBeenCalledWith(mcv.c.needhelp2);
            });

        });

	});

})();
