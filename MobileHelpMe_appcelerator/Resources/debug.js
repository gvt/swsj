//
// Simple debug output helper
// taken from: https://gist.github.com/465256
//
function debug(message) {
	Ti.API.debug(message);
}

/**
 *
 * @param thisControl The control you wish to dump
 * @param goDeep boolean Do you want deep introspection
 * @param incFuncs boolean Do you want to include functions in the output when going deep
 * @return null
 */
function dumpObj2(thisControl, goDeep, incFuncs) {
	
    // Some sanity checks
    if (thisControl == null) {
        debug("Can't do much with null");
        return;
    }

    // Start simple
    var objectName = typeof thisControl;
    debug("["+objectName+"] thinks it's a "+thisControl.toString());
    debug("The constructor of ["+objectName+"] thinks it's a/an "+typeof thisControl.constructor)

    try {
    	debug("Dynamic Properties: "+JSON.stringify(thisControl.getDynamicProperties()));		
    } catch (e) {
	    debug("No Dynamic Properties");		
    }

    if (goDeep) {
        // thisControl is the item you wish to debug
        for (p in thisControl) {
            // Define a default type
            var typeName = "property";
            try {
                // Grab a handle to allow us to check
                var typeHandle = thisControl[p];
                if (typeof typeHandle == "function") {
                    // We have a function
                    if (!incFuncs) {
                        // Ignore it
                        continue;
                    }
                    typeName = typeHandle;
                }
            } catch (e) {
                // Oops - we have a problem - not an issue
                //Ti.API.info("Exception with "+p);
            }
            // Basic info
            debug("["+typeName+"] "+p);

            switch (typeName) {
    		case "property":
            	try {
                    if ("object" == typeof thisControl[p]) {
                        dumpObj2(thisControl[p]);
                    } else {
                        debug("value type: "+ typeof thisControl[p]);
                        debug("Value: "+thisControl[p]);
                    }	            		
    			} catch (e) {
       			  // TODO: handle exception
    			}
        		break;
	    		
    		case "function":
    			// Nothing
        		break;
	    		
    		case "object":
    			// Recursive for objects
    			try {
	    		  dumpObj2(thisControl[p])
    			} catch (e) {
    			  // Do nothing
    			}
        		break;
	
    		default:
    			// Nothing
        		break;
    	    } // end switch
        }
    }
}
