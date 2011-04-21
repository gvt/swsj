(function(){
	
	Ti.include('lib/mcv-1.0-full.js');

	describe('MCV Helpers', function() {

    	describe('Basic functionality', function() {

            beforeEach(function() {
                /**
                 * Testing the helpers
                 *
                 * - Creating helpers
                 * - Checking that helpers are correctly attached
                 * - Calling helpers methods
                 * - Calling helpers methods which use this.caller
                 *
                 */

                mcv.create('controller', 'water', {
                	liters: 10
                });

                mcv.create('view', 'water', {

                });

                mcv.helper('controller', 'tap', {
                	type: 'mixer',
                	open: function() {
                		this.caller.liters += 1;
                	},
                	close: function() {
                		return 'The tap is now closed.';
                	}
                });

                mcv.helper('view', 'tap', {
                	print: function() {
                		return 'There are ' + this.caller.c().liters + ' liters of water.';
                	}
                });

                mcv.add(mcv.c.water, 'tap');
                mcv.add(mcv.v.water, 'tap');
            });

        	it('should work', function() {
            	expect(mcv.helpers.c.tap   ).toBeTruthy();
            	expect(mcv.c.water.h('tap')).toBeTruthy();
            	expect(mcv.c.water.h('tap').close()).toEqual('The tap is now closed.'       );
            	expect(mcv.v.water.h('tap').print()).toEqual('There are 10 liters of water.');
            	expect(mcv.c.water.h('tap').v().c()).toEqual(mcv.c.water.h('tap')           );
        	});

        });

    	describe('Advanced functionality', function() {

            beforeEach(function() {
                /**
                 * Testing more functionality from the helpers
                 *
                 * - Checking that helpers can be added with the add() method
                 * - Helpers on different objects can have different properties
                 * - Helpers on an object are not the same as stored helpers
                 *
                 */

                mcv.helper('model', 'mammal', {
                	talk: function() {
                		return this.caller.voice;
                	},
                	tail: false
                });

                cat = mcv.create('model', 'cat', {
                	legs: 4,
                	voice: 'meoow'
                }).add('mammal');

                dog = mcv.create('model', 'dog', {
                	voice: 'woff'
                }).add('mammal');

                cat.h('mammal').tail = true;
            });

            it('should work', function() {
            	expect(cat.h('mammal').talk()).toEqual('meoow');
            	expect(dog.h('mammal').tail  ).toEqual(false  );
            	expect(cat.h('mammal')       ).not.toEqual(mcv.helpers.m.mammal);
            });

    	});

        describe('Multiple helpers', function() {

            beforeEach(function() {
                /**
                 * Testing multiple helpers
                 *
                 * - Checking that multiple helpers can be added with the add() method
                 * - add() should be chainable
                 *
                 */

                mcv.helper('model', 'color', {
                	say: function() {
                		return 'My cover is ' + this.caller.color;
                	}
                });

                mcv.helper('model', 'characters', {
                	say: function() {
                		return 'My main character is ' + this.caller.character;
                	}
                });

                book = mcv.create('model', 'book', {
                	color: 'blue',
                	title: 'Wuthering heights',
                	character: 'Cathy'
                }).add(['characters', 'color']);

                comic = mcv.create('model', 'comic', {
                	color: 'green',
                	title: 'Matrix',
                	character: 'Neo'
                }).add('characters').add('color');
            });

            it('should work', function() {
            	comic.h('missing');
            	expect(true).toEqual(true); // just any assertion. verifies that Adding missing helpers will not break the script
            	expect(book.h('color').say()      ).toEqual('My cover is blue')        ;
            	expect(comic.h('color').say()     ).toEqual('My cover is green')       ;
            	expect(comic.h('characters').say()).toEqual('My main character is Neo');
            });

        });

    });

	    
    

})();
