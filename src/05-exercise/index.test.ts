const { addNewString } = require('./index');

test('add new "New!" in front of paragraph if it doesn"t contains', () => {
  expect(addNewString("This is Me!")).toBe("New! This is Me!")
  expect(addNewString("New! Life")).toBe("New! Life")
})