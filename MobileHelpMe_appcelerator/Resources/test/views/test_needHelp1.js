(function(){
	
	describe('needhelp1 view', function() {

        it("exists", function() {
            expect(mcv.v.needhelp1).toBeDefined();
        });

        describe('render', function() {
            beforeEach(function() {
                v = mcv.v.needhelp1;
                c = mcv.c.needhelp1;
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
