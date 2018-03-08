import $ from 'jquery';
import 'bootstrap';
import React from 'react';
import Product from './Product.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
            super(props);
            this.state =  {
                data:
            [
                {
                    "id":0,
                    "name":"javaScript:The Definitive Guide, 6t Edition",
                    "release":"September 2010",
                    "amount":1,
                    "price":"2.99"
                },
                {
                    "id":1,
                    "name":"Ruby on Rails: Up and Running",
                    "release":"March 2007",
                    "amount":1,
                    "price":"30.99"    
                }
            ], 
            headerdata: {
                "title":"Hello from React",
                "desc": "Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
            },
            footerdata : {
                "name":"salar &copy; 2017-2018 ",
                "des1": "Support",
                "des2": "Privacy",
                "des3": "Terms"
            }   
        }
    }
    render(){
        return(
            <div>
            <Header headerdata= {this.state.headerdata} />
            {this.state.data.map((book,i) => <Product key= {i} data={book} />)}
            <Footer footerdata = {this.state.footerdata}/>
            </div>
        );
    }    
}
	
ReactDOM.render(<App />, document.getElementById('root'));
