(function(){
	
	Ti.include('/app/controllers/signin.js');
	
	xdescribe('signin.js', function() {

        it("creates a window", function() {
            expect(win).not.toBeNull();
        });

        it("defines function render", function() {
            expect(win.render).toBeDefined();
        });
        
        it("defines function doTwitterAuth", function() {
            expect(doTwitterAuth).toBeDefined();
        });
        
	});

    describe("signin mcv controller", function() {

        it("should work", function() {
    		expect(mcv.c.signin).toBeTruthy();
        });

        it("should have some expected methods", function() {
    		expect(mcv.c.signin.render         ).toBeDefined();
    		expect(mcv.c.signin.next           ).toBeDefined();
    		expect(mcv.c.signin.alreadySignedIn).toBeDefined();
    		expect(mcv.c.signin.doTwitterAuth  ).toBeDefined();
        });
        
        it("should have some expected properties", function() {
    		expect(mcv.c.signin.oAuthAdapter).toBeDefined();
        });

        describe("function render", function() {

            it("should work", function() {
                spyOn(Ti.UI,'createWindow').andCallThrough();
                // spyOn(Ti,'include');

                var w = mcv.c.signin.render()
                expect(w).not.toBeNull();

                // expect(Ti.UI.createWindow    ).toHaveBeenCalled();
                // expect(Ti.include            ).toHaveBeenCalledWith("app/views/signin.js");
            });

        });
    });
	
})();
