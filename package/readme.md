=========================
#Generate and Use NPM Module
=========================
-------------------------


#Generate Package(index.js)
-------------------------
$npm init
-------------------------
$npm link    - for local usages ($npm unlink)
-------------------------
$npm login
-------------------------
$npm publish  - publishing to repository
-------------------------
-------------------------

#Test Cases 
-------------------------
"scripts": {
    "test": "node index.test.js",
    "prepublish": "npm test"
 },

// $command npm run test
// $command npm run prepublish






#Usage Package(app.js)
-------------------------
$npm init
-------------------------
$npm link ommsraban - using local file ( $npm unlink ommsraban )
-------------------------
$node app.js
-------------------------
--If moudle is published
-------------------------
$npm install ommsraban / ($npm install ommsraban --save)
-------------------------
$node app.js
-------------------------
$npm outdate
-------------------------
$npm update
-------------------------
$node app.js
-------------------------


-------------------------
LEARN - googling
-------------------------
npm scripts
-------------------------
npmjs.com/package/mead-module
-------------------------