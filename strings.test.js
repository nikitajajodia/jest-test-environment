test('Strings', () => {
	const string = 'test';
	expect(string).not.toMatch(/I/);
	expect(string).toMatch(/es/);
});