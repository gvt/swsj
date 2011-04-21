(function(){
	
	describe('signin.js', function() {

        it("exists", function() {
            expect(mcv.v.signin).toBeDefined();
        });

        describe('render', function() {
            beforeEach(function() {
                v = mcv.v.signin;
                c = mcv.c.signin;
                expect(v).toBeDefined();
                expect(c).toBeDefined();
                win = Ti.UI.createWindow(); // used as a stub for the call to render()
            });

            describe('signed in', function() {
                it("exists", function() {
                    spyOn(c,'isAlreadySignedIn').andCallFake(function(){return true});
                    v.render(win, c);
                });
            });

            describe('NOT signed in', function() {
                it("exists", function() {
                    spyOn(c,'isAlreadySignedIn').andCallFake(function(){return false});
                    v.render(win, c);
                });
            });

        });
        
	});
	
})();
