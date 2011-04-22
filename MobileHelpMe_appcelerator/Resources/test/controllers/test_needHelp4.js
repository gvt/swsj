(function(){
	
	Ti.include('/app/controllers/needHelp4.js');

	describe('needhelp4 view', function() {

	    beforeEach(function() {
	        c = mcv.c.needhelp4;
            expect(c).toBeDefined();
            expect(c).not.toBeNull();
	    });

        describe('next', function() {

            it("exists", function() {
                expect(c.next).toBeDefined();
            });

            it("passes to expected next controller", function() {
                spyOn(c,'submitTaskRequest');

                c.next();
                expect(c.submitTaskRequest).toHaveBeenCalled();
            });

            it("captures user input", function() {
                spyOn(c,'submitTaskRequest');
                App.d.taskRequest = {attributes:{description:null}}; // mock this using literals because there are no function calls used that i can mock

                var n = 12;
                c.next(n);
                expect(App.d.taskRequest.attributes.amount).toEqual(n);
                expect(c.submitTaskRequest).toHaveBeenCalled();
            });

        });

        describe('submitTaskRequest', function() {

            it("exists", function() {
                expect(c.submitTaskRequest).toBeDefined();
            });

            it("works as expected", function() {
                var m  = mcv.m.TaskRequest;
                var tr = {save: function(){} };
                spyOn(tr,'save');
                spyOn(m,'build').andReturn(tr);

                c.submitTaskRequest();
                
                expect(m.build).toHaveBeenCalled();
                expect(tr.save).toHaveBeenCalled();
            });

        });
        
	});
	
})();
