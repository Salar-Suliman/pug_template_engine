import $ from 'jquery';
import 'bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
 render() {
   return (
     <div>
       <h1>Blabla</h1>
       <small>totally noice</small>
     </div>
   );
 }
}
ReactDOM.render(<App />, document.getElementById('root'));