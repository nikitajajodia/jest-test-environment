test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('0', () => {
	const n = 0;
	expect(n).not.toBeUndefined();
	expect(n).toBeFalsy();
	expect(n).toBeDefined();
	expect(n).not.toBeNull();
	expect(n).not.toBeTruthy();
});