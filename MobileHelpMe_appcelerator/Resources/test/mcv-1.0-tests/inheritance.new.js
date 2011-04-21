(function(){
	
	Ti.include('lib/mcv-1.0-full.js');

	describe('MCV Inheritance', function() {

        beforeEach(function() {

        	/**
        	 * Testing inheritance from top objects
        	 *
        	 * - Checking that helpers are actually added to the top objects
        	 * - Checking that helpers can be inherited from the top objects...
        	 * - Even if we already have our own helpers
        	 * - We also check that this refers to the appropriate object
        	 *
        	 */

        	mcv.helper('model', 'geo', {
        		info: function() {
        			return 'I am a big Country';
        		},

        		capital: function() {
        			return 'My capital is ' + this.caller.capital;
        		}
        	});

        	mcv.helper('model', 'monuments', {
        		famous: function() {
        			return 'My most famous monument is the ' + this.caller.monument;
        		}
        	});

        	mcv.add(mcv.model, 'geo');

        	italy = mcv.create('model', 'italy', {
        		capital: 'Rome'
        	});

        	france = mcv.create('model', 'france', {
        		capital: 'Paris',
        		monument: 'Tour Eiffel'
        	}).add('monuments');
            
        });

    	it('Helper inheritance', function() {
    		expect(mcv.model.h('geo').info()   ).toEqual('I am a big Country');
    		expect(italy    .h('geo').info()   ).toEqual('I am a big Country');
    		expect(france   .h('geo').info()   ).toEqual('I am a big Country');
    		expect(italy    .h('geo').capital()).toEqual('My capital is Rome');
    	});

    });

})();
