
import React from 'react'
function Header(props) {
		
          return (

				<div className="py-5 text-center">
					<img className="d-block mx-auto mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg"alt="" width="72" height="72"/>
					<h2>{props.headerdata.title}</h2>
					<h3>A verry long descriptions with test and bla</h3>
					<p className="lead">{props.headerdata.desc}</p>
				</div>
                );
      
  }

 export default Header;
