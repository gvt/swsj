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
    		expect(mcv.c.signin.isAlreadySignedIn).toBeDefined();
    		expect(mcv.c.signin.doTwitterAuth  ).toBeDefined();
        });
        
        it("should have some expected properties", function() {
    		expect(mcv.c.signin.oAuthAdapter).toBeDefined();
        });

        describe("render", function() {

            it("should work", function() {
                spyOn(Ti.UI,'createWindow').andCallThrough();
                var w = mcv.c.signin.render()
                expect(w).not.toBeNull();
                expect(w.open).toBeDefined();
            });

        });

        describe("next", function() {

            it("should work", function() {
                w = Ti.UI.createWindow();
                spyOn(mcv.c.dispatch,'render');

                f = mcv.c.signin.next(w);
                expect(typeof f).toEqual('function');
                expect(mcv.c.dispatch.render).toHaveBeenCalled();
            });

        });

        describe("isAlreadySignedIn", function() {
            beforeEach(function() {
                c = mcv.c.signin;
                spyOn(c.oAuthAdapter,'loadAccessToken');
            });

            it("should work for no", function() {
                spyOn(c.oAuthAdapter,'isAuthorized').andReturn(false);
                expect(c.isAlreadySignedIn()).toEqual(false);
            });

            it("should work for yes", function() {
                spyOn(c.oAuthAdapter,'isAuthorized').andReturn(true);
                expect(c.isAlreadySignedIn()).toEqual(true);
            });

        });
    });
	
})();
