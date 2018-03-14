import $ from 'jquery';
import 'bootstrap';
import React from 'react';
import Product from './Product.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';


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
                "name":"salar © 2017-2018 ",
                "des1": "Support",
                "des2": "Privacy",
                "des3": "Terms"
            }   
        }
    }
    render(){
        return(
        <React.Fragment>
            <div className = "row">
                <Header headerdata= {this.state.headerdata} />
                 <div className="col-md-8 order-md-1">
                    <Form />
                 </div>
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-secondary badge-pill">3</span>
                    </h4>
                    {this.state.data.map((book,i) => <Product key= {i} data={book} />)}
                     <br />
                      <form className="card p-2">
                         <div className="input-group">
                           <input type="text" className="form-control" placeholder="Promo code" />
                           <div className="input-group-append">
                             <button type="submit" className="btn btn-secondary">Redeem</button>
                           </div>
                         </div>
                    </form>
                </div>
                 
             </div>
            <Footer footerdata = {this.state.footerdata}/>
        </React.Fragment>
        );
    }    
}
	
ReactDOM.render(<App />, document.getElementById('root'));
