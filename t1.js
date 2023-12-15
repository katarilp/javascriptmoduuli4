'use strict';
async function fetcInfo() {
   try {
     const response = await fetch('https://api.tvmaze.com/search/shows');
     const tiedot = await response.json();
     console.log('info', tiedot);
   } catch (error) {
     console.log('fetch error', error);

   }
}
fetchInfo();


//Make an app that retrieves information about a TV series you enter and displays
// it in the console. (2p)
// API to use: TVMaze API
// First, make a valid HTML page with a search form. Example form:
// <form action="https://api.tvmaze.com/search/shows">
//   <input id="query" name="q" type="text">
//   <input type="submit" value="Search">
// </form>
// Test the form. The result should be a page full of JSON formatted data.