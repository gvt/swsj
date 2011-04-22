(function(){
	
	describe('needhelp2 view', function() {

        it("exists", function() {
            expect(mcv.v.needhelp2).toBeDefined();
        });

        describe('render', function() {
            beforeEach(function() {
                v = mcv.v.needhelp2;
                c = mcv.c.needhelp2;
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
