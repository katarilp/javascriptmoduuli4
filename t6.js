
'use strict';
let muotoiltu;
fetch('https://api.chucknorris.io/jokes/search?query={query}').then(
  function (response) {
    response.json().then(
      function(json) {
        console.log('tosi huono vitsi:', json.value);
      })
    })


let kohde = document.getElementById('tyhmävitsi');
