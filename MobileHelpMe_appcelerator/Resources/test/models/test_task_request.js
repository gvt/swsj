(function(){
	
	Ti.include('/app/models/task_request.js');
	
	describe('TaskRequest', function() {

        it("exists", function() {
           expect(TaskRequest).not.toBeNull(); 
        });

        it("has a member called categories", function() {
            expect(TaskRequest.categories).not.toBeNull();
        });

        it("has a member called attributes", function() {
            expect(TaskRequest.attributes).not.toBeNull();
        });

        describe('function build', function() {

            it("exists", function() {
                expect(TaskRequest.build).not.toBeNull();
            });

            it("works", function() {
                opts = {category_id:'qwerty cat', description:'functional desc here', location:'37.77018737792969, -122.4037094116211'};
                tr   = TaskRequest.build(opts);
                expect(tr.attributes.category_id).toEqual(opts.category_id);
                expect(tr.attributes.description).toEqual(opts.description);
                expect(tr.attributes.location   ).toEqual(opts.location   );
                expect(tr.isNewRecord()         ).toBe   (true            );
            });
        });

        describe('function save', function() {
            it("exists", function() {
                expect(TaskRequest.save).not.toBeNull();
            });

            it("works", function() {
                opts = {category_id:'qwerty cat', description:'functional desc here', location:'37.77018737792969, -122.4037094116211'};
                tr   = TaskRequest.build(opts);
                // mock out the API call to NOOPs instead
                var xhr_mock = { open:function(){}, send:function(){} }; 
                spyOn(xhr_mock,'open');
                spyOn(xhr_mock,'send');

                expect(tr.save(xhr_mock)).toBe(true);

                expect(xhr_mock.open).toHaveBeenCalled();
                expect(xhr_mock.send).toHaveBeenCalled();
            });
        });

	});
	
})();
