(function(){
	
	describe('needhelp4 view', function() {

        it("exists", function() {
            expect(mcv.v.needhelp4).toBeDefined();
        });

        describe('render', function() {
            beforeEach(function() {
                v = mcv.v.needhelp4;
                c = mcv.c.needhelp4;
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
