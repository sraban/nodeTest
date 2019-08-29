module.exports.greeting = (name = 'User') => {
  return `Hello, ${name}!`;
};

module.exports.factorial = (number = 0 ) => {

  var i, fact;
  fact = 1;
  for(i=1; i<=number; i++)  
  {
    fact= fact*i;
  }

  return `Factorial of ${number} = ${fact}`;
};

module.exports.getBookRecommendations = getBookRecommendations;

function getBookRecommendations() {
    return [
        {id: 1, title: "The Guards", author: "Ken Bruen"},
        {id: 2, title: "The Stand", author: "Steven King"},
        {id: 3, title: "The Postman Always Rings Twice", author: "James M. Cain"}
    ];
}