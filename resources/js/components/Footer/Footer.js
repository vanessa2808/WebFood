import React, {Component} from 'react';

class Footer extends Component {
	render() {
		return(
        <footer className="ftco-footer ftco-section">
        <div className="container">
        <div className="row mb-5">
        <div className="col-md">
        <div className="ftco-footer-widget mb-4">
          <h2 className="ftco-heading-2">Vegefoods</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
            <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
            <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
            <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
          </ul>
        </div>
        </div>
        <div className="col-md">
        <div className="ftco-footer-widget mb-4 ml-md-5">
        <h2 className="ftco-heading-2">Menu</h2>
        <ul className="list-unstyled">
        <li><a href="#" className="py-2 d-block">Shop</a></li>
        <li><a href="#" className="py-2 d-block">About</a></li>
        <li><a href="#" className="py-2 d-block">Journal</a></li>
        <li><a href="#" className="py-2 d-block">Contact Us</a></li>
        </ul>
        </div>
        </div>

        <div className="col-md">
        <div className="ftco-footer-widget mb-4">
     
        <div className="block-23 mb-3">
        <ul>
        <li><span className="icon icon-map-marker" /><span className="text">54 Nguyen Khang</span></li>
        <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
        <li><a href="#"><span className="icon icon-envelope" /><span className="text">yenrion@yourdomain.com</span></a></li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        </div>
        </footer>
		);
	}
}


export default Footer;