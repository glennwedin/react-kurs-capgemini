import React from 'react';
import ReactDOM from 'react-dom';
import "babel-polyfill";
import Main from './containers/main';
import "!style-loader!css-loader!sass-loader!./style/style.scss";

ReactDOM.render(<Main />, document.getElementById('app'));