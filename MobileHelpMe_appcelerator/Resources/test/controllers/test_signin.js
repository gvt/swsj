(function(){
	
	Ti.include('/app/controllers/signin.js');
	
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
            beforeEach(function() {
                w         = Ti.UI.createWindow();
                App.w     = Ti.UI.createWindow();
                App.w.nav = { open:function(){} }
            });

            it("should work", function() {
                spyOn(mcv.c.dispatch,'render');

                f = mcv.c.signin.next(w);
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
