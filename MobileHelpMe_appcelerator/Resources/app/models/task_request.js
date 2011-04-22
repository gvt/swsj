// 
// t.integer  "category_id"
// t.string   "description"
// t.string   "location"
// t.datetime "created_at"
// t.datetime "updated_at"
// t.integer  "amount"
// 
mcv.create('model', 'TaskRequest', {

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
        opts = arguments[0] || {};
        this.attributes = {};
        this.attributes.category_id = opts.category_id;
        this.attributes.description = opts.description;
        this.attributes.location    = opts.location   ;
        this.attributes.amount      = opts.amount     ;
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
            callbackForOnLoad.call(this, evt);
        };
        xhr.onerror = function(evt)
        {
            Ti.API.info('TaskRequest.save :: onerror event...');
            callbackForOnError.call(this, evt);
        };
        try {
            xhr.open("POST","http://localhost:3000/task_requests.js");
            xhr.setRequestHeader("content-type", "application/json");  // need this because rails receives it string-escaped without it. see here: http://developer.appcelerator.com/question/111911/nested-json-to-rails-api
            var json = JSON.stringify({task_request:this.attributes}); // rails likes its JSON with a root object
            xhr.send(json);
        } catch(e) {
            Ti.API.error('TaskRequest.save :: exception encountered: ' + e.message);
            return false;
        }
    },
    
    isNewRecord: function()
    {
        return !!this._new_record;
    }

});
