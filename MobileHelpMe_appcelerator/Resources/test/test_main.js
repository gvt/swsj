(function(){
	
	// To learn how to write Jasmine tests, please read Jasmine documentation:
	// https://github.com/pivotal/jasmine/wiki
	
	describe('MobileHelpMe_appcelerator.main', function() {

		it('should return correct result', function() {
			expect(MobileHelpMe_appcelerator.myMethod()).toBeTruthy();
		});	
	
		it('should fail', function() {
			expect(MobileHelpMe_appcelerator.myMethod()).toBeFalsy();
		});	
	
		it('should fail with other error messages', function() {
			expect(MobileHelpMe_appcelerator.myMethod()).toBe('the result');
			expect(new Date()).toBe('another date');
		});
		
		it('should fail half of the tests and pass half', function() {
			expect('po' + 'ker').toBe('poker');
			expect('po' + 'ker').toBe('another thing');
			expect(12 + 12).toBe(24);
			expect(12 + 12).toBe(12);
		});
		
		it('should not break with tests cantaining a huge amount of nonsense text in the test title', function() {
			expect(true).toBe(false);
		});

	});
	
})();