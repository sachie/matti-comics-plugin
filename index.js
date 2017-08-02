const comics = require('devcomic')

const options = { sources: ['CommitStrip'] }

module.exports = (session, message) => {
  comic((comics) => session.send('Image'), options)
  return true
}
