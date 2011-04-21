$(document).ready(function() {

	module('Core');

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

	//Start test
	test('Basic functionality', function() {
		expect(4);
		ok(mcv.m.mickey, 'The model "mickey" was created');
		equal(mcv.v.mickey.m().v(), mcv.v.mickey, 'Going from the model to the view and back is the identity');
		equal(mcv.v.mickey.whoAmI, 'view', 'The WhoAmI property reports correctly');
		equal(mcv.m.mickey.friend, 'goofy', 'Model "mickey" inherits from the base model');
	});

	/**
	 * Trying the autostart functionality
	 *
	 * - The regular expression correctly matches controller and action
	 *
	 */

	var value = 'fail';

	mcv.create('controller', 'foo', {
		modify: function() {
			value = 'pass';
		}
	});

	document.body.className = 'mcv:notreally controller/action mcv:foo/modify bar';

	mcv.autostart();

	test('Autostart', function() {
			equal(value, 'pass', 'autostart() method calls the correct action');
	});

});
