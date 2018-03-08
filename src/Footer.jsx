import React from 'react';
class Footer extends React.Component {
		render(){
          return (
				
			<footer className="my-5 pt-5 text-muted text-center text-small">
				<p className="mb-1">{this.props.footerdata.name}</p>
				<ul className="list-inline">
					<li className="list-inline-item">
						<a href="#">{this.props.footerdata.des1}</a>
					</li>
					<li className="list-inline-item">
						<a href="#">{this.props.footerdata.des2}</a>
					</li>
					<li className="list-inline-item">
						<a href="#">{this.props.footerdata.des3}</a>
					</li>
				</ul>
			</footer>
                );
      }
  }

 export default Footer;
