const css = require('./app.scss');


import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Home Page</h1>,
  document.getElementById('root')
);









// 	To enable ES6 and JSX :
// 	
// 	Need to install Babel (JS Compiler : takes your ES6 and return an output of all the JS )
// 	> npm i -D babel babel-preset-react babel-preset-es2015
// 	
// 	and Need to enable these presets in ".babelrc" file
// 	
// 	https://reactjs.org/docs/installation.html


// 	"babel loader" :
// 	
// 	Need it to run the React code above :
// 	ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );