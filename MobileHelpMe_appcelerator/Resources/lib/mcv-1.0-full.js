/*jslint rhino:true, eqeqeq:true, onevar:false, undef:true, white:false, plusplus:false nomen:false */
/*global document */

/**
 * Model-View-Controller manager for Javascript 
 *
 * @author      ferrettiandrea@gmail.com
 * @copyright   Copyright 2010-2011 Andrea Ferretti
 * @version     1.0
 * @link        http://projects.andreaferretti.it/mcv
 * @license     MIT http://www.opensource.org/licenses/mit-license.php
 *
 */

/**
 * Objects listing available models, controllers and views
 *
 */

var mcv = {
	m: {},
	c: {},
	v: {}
};

/**
 * Basic function for inheritance
 *
 * child is assumed to be an object literal.
 * Only a shallow copy of child is performed.
 *
 */

mcv.extend = function(parent, child) {
	function F() {}
	F.prototype = parent;

	var o = new F();
	o.uber = parent;
	for (var i in child) {
		if (child.hasOwnProperty(i)) {
			o[i] = child[i];
		}
	}

	return o;
};

/**
 * Creates a base model, controller or view
 *
 */

mcv.base = function(type, what) {
	if (type !== 'model' && type !== 'controller' && type !== 'view') {
		return;
	}

	var o = {
		add: function(helper) {
			mcv.add(this, helper);
			return this;
		},
		whoAmI: type,
		m: function() {
			return mcv.model;
		},
		c: function() {
			return mcv.controller;
		},
		v: function() {
			return mcv.view;
		}
	};
	delete o[type[0]];

	mcv[type] = this.extend(o, what);
	this.manager(mcv[type]);

	return mcv[type];
};

/**
 * Creates a new model, controller or view
 *
 * The created object has a prototype link to mcv.model, mcv.controller or mcv.view respectively
 * It is added one of thes lists mcv.m, mvc.c or mcv.v
 *
 */

mcv.create = function(type, name, what) {
	if (type !== 'model' && type !== 'controller' && type !== 'view') {
		return;
	}

	var o =  this.extend(mcv[type], what);
	mcv[type[0]][name] = o;
	this.manager(o);

	//Quick access to related objects.
	//From a controller you can obtain the related view as this.v()
	//and the related model as this.m(); similarly for the others
	o.m = function() {
		return mcv.m[name];
	};
	o.c = function() {
		return mcv.c[name];
	};
	o.v = function() {
		return mcv.v[name];
	};
	delete o[type[0]];
	o.name = name;

	return o;
};

/**
 * Calls a controller method based on the body class
 *
 * Declare the action and controller as
 * <body class="mcv:CONTROLLER/ACTION">
 *
 */

mcv.autostart = function() {
	if (document) {
		var bodyClass = document.body.className,
		mcvRegEx = new RegExp('mcv:([a-zA-Z1-9]+)/([a-zA-Z1-9]+)'),
		matches = mcvRegEx.exec(bodyClass),
		controller = matches[1],
		action = matches[2] || 'index';
		mcv.c[controller][action]();
	}
};

/**
 * Object listing available helpers
 *
 */

mcv.helpers = {
	m: {},
	c: {},
	v: {}
};

/**
 * Creates a new helper
 *
 */

mcv.helper = function(type, name, what) {
	if (type !== 'model' && type !== 'controller' && type !== 'view') {
		return;
	}

	what.m = function() {
		return this.caller.m().h(name);
	};
	what.c = function() {
		return this.caller.c().h(name);
	};
	what.v = function() {
		return this.caller.v().h(name);
	};
	delete what[type[0]];

	mcv.helpers[type[0]][name] = what;

};

/**
 * A more or less reliable test for arrayness
 *
 */

mcv.isArray = function(what) {
	return what &&
	typeof what === 'object' &&
	typeof what.length === 'number' &&
	typeof what.splice === 'function' &&
	!(what.propertyIsEnumerable('length'));
};

/**
 * Adds a function to manage helpers to an object
 *
 */

mcv.manager = function(what) {
	var helpers = {};

	what.h = function(helperName, helperObject) {
		if (typeof helperName !== 'string') {
			return;
		}

		//caller keeps track of the object which asked for the helper
		var caller;
		if (this.caller) {
			caller = this.caller;
			delete this.caller;
		}
		else {
			caller = this;
		}

		if (helperObject === undefined) {
			if (helpers.hasOwnProperty(helperName)) {
				helpers[helperName].caller = caller;
				return helpers[helperName];
			}
			else if (this.uber && typeof this.uber.h === 'function') {
				this.uber.caller = caller;
				return this.uber.h(helperName);
			}
		}
		else {
			helpers[helperName] = helperObject;
		}
	};
};

mcv.base('model', {});
mcv.base('controller', {});
mcv.base('view', {});

/**
 * Adds a helper to a model, controller or view
 *
 */

mcv.add = function(base, helper) {
	//We first consider the case that an array of helpers has been passed
	if (this.isArray(helper)) {
		for (var i = 0; i < helper.length; i++) {
			this.add(base, helper[i]);
		}
		return base;
	}

	var helperObject = mcv.helpers[base.whoAmI[0]][helper],
		o = this.extend(helperObject, {});
//	The following quickly becomes expensive
//	but assures that helpers are completely independent
//	var o = this.deepCopy(helperObject);

	//Initialize the helper
	if (typeof helperObject.__init__ === 'function') {
		helperObject.__init__(base);
	}
	//Attach the helper
	base.h(helper, o);
	return base;
};
