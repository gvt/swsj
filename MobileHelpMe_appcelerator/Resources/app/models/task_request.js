// 
// t.integer  "category_id"
// t.string   "description"
// t.string   "location"
// t.datetime "created_at"
// t.datetime "updated_at"
// 
var TaskRequest = {

    categories: [
        {title:"Roadside assistance", id: 123},
        {title:"Bring me something" , id: 123},
        {title:"Fix something"      , id: 123},
        {title:"Carry stuff"        , id: 123},
        {title:"Other"              , id: 123},
    ],

    attributes: {},
    _new_record: true,

    build: function()
    {
        opts = arguments[0];
        this.attributes = {};
        this.attributes.category_id = opts.category_id;
        this.attributes.description = opts.description;
        this.attributes.location    = opts.location   ;
        return this;
    },

    //
    // make the web service call to the rails app here via XHR POST.
    //
    save: function(xhr, callbackForOnLoad, callbackForOnError)
    {
        xhr.onload = function(evt)
        {
            Ti.API.info('TaskRequest.save :: onload event...');
            this._new_record = false;
            callbackForOnLoad.apply(this, evt);
        };
        xhr.onerror = function(evt)
        {
            Ti.API.info('TaskRequest.save :: onerror event...');
            callbackForOnError.apply(this, evt);
        };
        try {
            xhr.open("POST","http://localhost:3000/task_requests.js");
            xhr.send(this.attributes);
        } catch(e) {
            Ti.API.error('TaskRequest.save :: exception encountered: ' + e.message);
            return false;
        }
        return true;
    },
    
    isNewRecord: function()
    {
        return !!this._new_record;
    }
};


/*
//
// XHR GET
//
var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function()
{
	Ti.API.info('in utf-8 onload for GET');
	l2.value = this.responseText;
};
xhr.onerror = function()
{
	Ti.API.info('in utf-8 error for GET');
};
xhr.open("GET","http://api.appcelerator.net/p/v1/echo");
xhr.send({"a":"€漢字"});

//
// XHR POST
//
var xhr2 = Titanium.Network.createHTTPClient();
xhr2.onload = function()
{
	Ti.API.info('in utf-8 onload for POST');
	l4.value = this.responseText;
};
xhr2.onerror = function()
{
	Ti.API.info('in utf-8 error for POST');
};
xhr2.open("POST","http://api.appcelerator.net/p/v1/echo");
xhr2.send({"a":"€漢字", "b":"aöbäcüd"});

//
// XHR GET with Query String
//
var xhr3 = Titanium.Network.createHTTPClient();
xhr3.onload = function()
{
	Ti.API.info('in utf-8 onload for GET with QS');
	l6.value = this.responseText;
};
xhr3.onerror = function(e)
{
	Ti.API.info('in utf-8 error for GET with QS:' + e.error);
};
xhr3.open("GET","http://api.appcelerator.net/p/v1/echo?a=€漢字");
xhr3.send();

*/