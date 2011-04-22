(function(){
	
	describe('dispatch view', function() {

        it("exists", function() {
            expect(mcv.v.dispatch).toBeDefined();
        });

        describe('render', function() {
            beforeEach(function() {
                v = mcv.v.dispatch;
                c = mcv.c.dispatch;
                expect(v).toBeDefined();
                expect(c).toBeDefined();
                win = Ti.UI.createWindow(); // used as a stub for the call to render()
            });

            it("works", function() {
                v.render(win, c);
                expect(true).toEqual(true); // just to verify that it executed
            });

        });
        
	});
	
})();
