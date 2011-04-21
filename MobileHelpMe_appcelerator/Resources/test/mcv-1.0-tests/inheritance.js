$(document).ready(function() {

	module('Inheritance');

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

	var italy = mcv.create('model', 'italy', {
		capital: 'Rome'
	});

	var france = mcv.create('model', 'france', {
		capital: 'Paris',
		monument: 'Tour Eiffel'
	}).add('monuments');

	test('Helper inheritance', function() {
		expect(4);
		equal(mcv.model.h('geo').info(), 'I am a big Country', 'Base objects can get helpers');
		equal(italy.h('geo').info(), 'I am a big Country', 'Helpers are inherited from base objects');
		equal(france.h('geo').info(), 'I am a big Country', '..even if the object has other helpers');
		equal(italy.h('geo').capital(), 'My capital is Rome', 'Inherited helper methods reference correctly');
	});

});
