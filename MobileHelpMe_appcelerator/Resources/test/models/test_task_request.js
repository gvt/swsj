(function(){
	
	Ti.include('/app/models/task_request.js');
	
	describe('TaskRequest model', function() {
	    beforeEach(function() {
	        m = mcv.m.TaskRequest;
	    });

        it("exists", function() {
           expect(m).not.toBeNull(); 
        });

        describe('categories', function() {

            it("is an Array", function() {
                expect(m.categories).not.toBeNull();
                expect(m.categories.length).toEqual(5);
            });

            it("should contain simple objects", function() {
                expect(m.categories[0].title).toEqual('Roadside assistance');
                expect(m.categories[0].id   ).toEqual(123);
            });

        });

        it("has a member called attributes", function() {
            expect(m.attributes).not.toBeNull();
        });

        describe('function build', function() {

            it("exists", function() {
                expect(m.build).not.toBeNull();
            });

            it("works", function() {
                opts = {category_id:'qwerty cat', description:'functional desc here', location:'37.77018737792969, -122.4037094116211', amount:11};
                tr   = m.build(opts);
                expect(tr.attributes.category_id).toEqual(opts.category_id);
                expect(tr.attributes.description).toEqual(opts.description);
                expect(tr.attributes.location   ).toEqual(opts.location   );
                expect(tr.attributes.amount     ).toEqual(opts.amount     );
                expect(tr.isNewRecord()         ).toEqual(true            );
            });
        });

        describe('function save', function() {
            it("exists", function() {
                expect(m.save).not.toBeNull();
            });

            it("works", function() {
                opts = {category_id:'qwerty cat', description:'functional desc here', location:'37.77018737792969, -122.4037094116211'};
                tr   = m.build(opts);
                // mock out the API call to NOOPs instead
                var xhr_mock = { open:function(){}, send:function(){}, setRequestHeader:function(){} }; 
                spyOn(xhr_mock,'open');
                spyOn(xhr_mock,'send');
                spyOn(xhr_mock,'setRequestHeader');
                // var callbacks = {
                //     callbackForOnLoad:  function(){},
                //     callbackForOnError: function(){}
                // };
                // spyOn(callbacks,'callbackForOnLoad' );
                // spyOn(callbacks,'callbackForOnError');

                tr.save(xhr_mock/*, callbackForOnLoad*/);
                var json = JSON.stringify({task_request:tr.attributes}); // how rails likes its JSON
                expect(xhr_mock.setRequestHeader).toHaveBeenCalled();
                expect(xhr_mock.open).toHaveBeenCalledWith("POST","http://localhost:3000/task_requests.js");
                expect(xhr_mock.send).toHaveBeenCalledWith(json);
                
                // TODO: verify the callbacks
                // expect(callbacks.callbackForOnLoad ).toHaveBeenCalled();
                // expect(callbacks.callbackForOnError).toHaveBeenCalled();
            });
        });

	});
	
})();
