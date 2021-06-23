const { getFileExtension } = require('./index')

test('get the extension of learn.ts file is ts', () => {
  expect(getFileExtension('learn.ts')).toEqual('.ts')
  expect(getFileExtension('webpack.config.ts')).toEqual('.ts')
})