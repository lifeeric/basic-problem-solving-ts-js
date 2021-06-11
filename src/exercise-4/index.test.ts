const { todayDate } = require('./index')

test('get todays date 6/11/2021', () => {
  expect(todayDate()).toBe('6/11/2021')
})