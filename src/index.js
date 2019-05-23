import $ from 'jquery'
let api = require('./modules/functions.js')

const fetch = require('node-fetch');
let topWord;
let frequency;

$(document).ready(() => {
  displayTop();

  function displayTop() {
    api.getTopWord()
    .then(response => {
      topWord = Object.keys(response.word)[0]
      frequency = response.word[topWord]
      $('.word-count').text(`${topWord.toUpperCase()} Count: ${frequency}`)
    });

  }

  $('#breakdown').click(function() {
    var text = $('#input').val();
    var words = text.match(/\b(\w+)\b/g)
    console.log(words)
    let i;
    for (i=0; i < words.length; i++) {
      api.sendWord(words[i])
        .then(response => {
          console.log(response);
          displayTop();
        })
    }
  });
})
