const fetch = require('node-fetch');


var sendWord = function(input) {
  let sent = {
    word: {
      value: `${input}`
    }
  }
  console.log(JSON.stringify(sent))
  return new Promise((resolve, reject) => {

    fetch("http://localhost:3000/api/v1/words", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(sent)
    })
    .then(response => resolve(response.json()))
    .catch(error => reject(error))
  })
}

var getTopWord = function () {
  return new Promise((resolve, reject) => {

    fetch("http://localhost:3000/api/v1/top_word", {
      method: 'get'
  })
  .then(response => resolve(response.json()))
  .catch(error => reject(error))
  })
}

module.exports = {
  sendWord: sendWord,
  getTopWord: getTopWord
};
