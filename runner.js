const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjNlNDE0OTY5LTc3OGMtNGRiMS1hZjAwLWY5NGUwZjExMjkzNi0xNzY5NjEwNzEyNjA0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNDY3ZDZkODYtMjc1OC00NDk4LTg1MmUtYmNjNjA0MWYwNzIzIiwidHlwZSI6InQifQ.Pg5Q0ag_9zLF21gJWwWABM9X01Mgi7LhfSxoT5p8w9A'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
