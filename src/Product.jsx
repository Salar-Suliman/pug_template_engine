import React from 'react'
class Product extends React.Component {
   constructor(props){
              super(props);
              this.state ={liked:false }
              this.handeleClick = this.handeleClick.bind(this)
            }
            handeleClick(e) {
                 this.state.liked=!this.state.liked
                 this.setState(this)
            }
		render(){

          return (
		     
	<div>
       <li className = "list-group-item d-flex justify-content-between lh-condensed ">
  	   	<div>
  	   	   <h6 className = "my-0">{this.props.data.name} </h6>
  		      <span className= "text-muted">{this.props.data.release}</span>
  		  </div>
         <button type="button"  className={this.state.liked ? 'btn btn-outline-danger' : 'btn btn-outline-success' }
                            onClick={(e) => this.handeleClick(e)}>
                            {this.state.liked ? 'Liked' : 'Like' } 
                          
         </button>
  	   	<div className = "d-flex flex-column">
  		   	<span className = "text-muted d-flex justify-content-center align-items-baseline">
  		      <button className= "btn btn-sm btn-light">-</button>
         	  <button className= "btn btn-sm btn-light">.</button>
  			 </span>
  			 <span className= "badge" > {"Product" + this.props.data.id}</span>
       	</div>

        </li>
        
    </div>
   );
 }
}
export default Product;