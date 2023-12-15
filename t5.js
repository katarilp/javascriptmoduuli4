//Make an app that retrieves a random Chuck Norris joke and displays it in the console. (2p)
//API to use: chucknorris.io
//Send a request to https://api.chucknorris.io/jokes/random and print only
//the joke to the console (that would be the 'value' property)
//No need to add a form.
//

fetch('https://api.chucknorris.io/jokes/random').then(
  function (response) {
    //console.log('huono vitsi: ', response);
    response.json().then(
      function(json) {
        console.log('tosi huono vitsi:', json.value);
      })
    })