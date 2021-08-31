"use strict";

fetch('https://api.spacexdata.com/v4/launches')
  .then((response) => { 
    return response.json();
  })
  .then((data) => {
    console.log("Parsed response", data);
  })
  .catch( (err) => console.log(err));