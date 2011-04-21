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
            // expect(mcv.v.mickey.m().v()).toEqual(mcv.v.mickey); //, mcv.v.mickey, 'Going from the model to the view and back is the identity');
            // expect(mcv.v.mickey.whoAmI ).toEqual('view')      ; //, 'view', 'The WhoAmI property reports correctly');
            // expect(mcv.m.mickey.friend ).toEqual('goofy')     ; //, 'goofy', 'Model "mickey" inherits from the base model');
            
        });

    });
	
})();
