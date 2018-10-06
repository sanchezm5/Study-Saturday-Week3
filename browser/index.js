import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main'

// const hello = function() {
//     console.log('Hello Webpack!');
// }

//when using ReactDOM.render(1st arg is always a jsx elem, 2nd arg is the same, string name is based on the index.html form)
ReactDOM.render(<Main/>, document.getElementById('app'));
