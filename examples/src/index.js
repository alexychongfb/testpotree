import React from 'react';
import { render} from 'react-dom';
import MyComponent from '../../src/index.js';
const Potree = require('achong-potree');

const App = () => {
   return <MyComponent />;
};
render(<App />, document.getElementById("root"));