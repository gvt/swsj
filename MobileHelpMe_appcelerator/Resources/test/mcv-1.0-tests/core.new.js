(function(){
	
	Ti.include('lib/mcv-1.0-full.js');

	describe('Core', function() {

        beforeEach(function() {

        	/**
        	 * Testing the core functionality
        	 *
        	 * - Creating objects
        	 * - Moving between model and view
        	 * - Checking that whoAmI is set
        	 * - Checking that base models can be safely changed
        	 * - Checking that base models can be altered in a second time
        	 *
        	 */
        	mcv.base('model', {
        		friend: 'goofy'
        	});
        	mcv.create('model', 'mickey', {
        		fiancee: 'minnie'
        	});
        	mcv.create('view', 'mickey', {
        	});
        	mcv.base('view', {
        		hometown: 'mousetown'
        	});
            
        }); // beforeEach

    	//Start test
    	it('Basic functionality', function() {
    		expect(mcv.m.mickey).toBeTruthy();
    		expect(mcv.v.mickey.m().v()).toEqual(mcv.v.mickey); //, mcv.v.mickey, 'Going from the model to the view and back is the identity');
    		expect(mcv.v.mickey.whoAmI ).toEqual('view')      ; //, 'view', 'The WhoAmI property reports correctly');
    		expect(mcv.m.mickey.friend ).toEqual('goofy')     ; //, 'goofy', 'Model "mickey" inherits from the base model');
    	});

    });
	
})();
