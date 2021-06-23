const { moveCharsForward } = require('./index')

test('move forward char from abcd to bcde', () => {
  expect(moveCharsForward("xyz")).toEqual('yza')
  expect(moveCharsForward("abcd")).toBe('bcde')
})