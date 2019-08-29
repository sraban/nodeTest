const ommsraban = require('./index.js'); 


const res1 = ommsraban.greeting();
const res2 = ommsraban.greeting('Sraban');
if(res1 !== 'Hello, User!') {
  throw new Error("Test cases are not working perfect");
}

if(res2 !== 'Hello, Sraban!') {
  throw new Error("Test cases are not working perfect");
}


//USAGE
//const ommsraban = require('ommsraban');
//console.log( ommsraban.greeting() );
//console.log( ommsraban.greeting('Santosh') );
//console.log( ommsraban.factorial(10) );
//console.log( ommsraban.getBookRecommendations() );
