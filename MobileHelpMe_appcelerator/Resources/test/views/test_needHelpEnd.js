(function(){
	
	describe('needhelpend view', function() {

        it("exists", function() {
            expect(mcv.v.needhelpend).toBeDefined();
        });

        describe('render', function() {
            beforeEach(function() {
                v = mcv.v.needhelpend;
                c = mcv.c.needhelpend;
                expect(v).toBeDefined();
                expect(c).toBeDefined();
                win = Ti.UI.createWindow(); // used as a stub for the call to render()
                App.d.taskRequest = mcv.m.TaskRequest.build(); // need stubbed for its use in the view
            });

            it("works", function() {
                v.render(win, c);
                expect(true).toEqual(true); // just to verify that it executed
            });

        });
        
	});
	
})();
