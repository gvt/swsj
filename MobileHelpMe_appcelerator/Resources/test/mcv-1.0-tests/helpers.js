$(document).ready(function() {

	module('Helpers');

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

	//Start test
	test('Basic functionality', function() {
		expect(5);
		ok(mcv.helpers.c.tap, 'The helper has been created');
		ok(mcv.c.water.h('tap'), 'The helper has been attached');
		equal(mcv.c.water.h('tap').close(), 'The tap is now closed.', 'Helper methods are correctly called');
		equal(mcv.v.water.h('tap').print(), 'There are 10 liters of water.', 'Helper methods can reference the caller');
		equal(mcv.c.water.h('tap').v().c(), mcv.c.water.h('tap'), 'Going from the model to the view and back is the identity');
	});

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

	var cat = mcv.create('model', 'cat', {
		legs: 4,
		voice: 'meoow'
	}).add('mammal');

	var dog = mcv.create('model', 'dog', {
		voice: 'woff'
	}).add('mammal');

	cat.h('mammal').tail = true;

	//Start test
	test('Advanced functionality', function() {
		expect(3);
		equal(cat.h('mammal').talk(), 'meoow', 'Helpers can be added with a method');
		equal(dog.h('mammal').tail, false, 'Helpers are independent');
		notEqual(cat.h('mammal'), mcv.helpers.m.mammal, 'Helpers are copied');
	});

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

	var book = mcv.create('model', 'book', {
		color: 'blue',
		title: 'Wuthering heights',
		character: 'Cathy'
	}).add(['characters', 'color']);

	var comic = mcv.create('model', 'comic', {
		color: 'green',
		title: 'Matrix',
		character: 'Neo'
	}).add('characters').add('color');

	//Start test
	test('Multiple helpers', function() {
		expect(4);
		comic.h('missing');
		ok(true, 'Adding missing helpers will not break the script');
		equal(book.h('color').say(), 'My cover is blue', 'Multiple helpers can be added');
		equal(comic.h('color').say(), 'My cover is green', 'Multiple helpers can be added in chains');
		equal(comic.h('characters').say(), 'My main character is Neo', '...and both work');
	});

});
