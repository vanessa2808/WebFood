import React, {Component} from 'react';

class Content extends Component {
  render() {
    return(
      <div>
  <section id="home-section" className="hero">
    <div className="home-slider owl-carousel">
      <div className="slider-item" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>
        <div className="overlay" />
        <div className="container">
          <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
            <div className="col-md-12 ftco-animate text-center">
              <h1 className="mb-2">We serve Fresh Vegestables &amp; Fruits</h1>
              <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
              <p><a href="#" className="btn btn-primary">View Details</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-item" style={{backgroundImage: 'url(images/bg_2.jpg)'}}>
        <div className="overlay" />
        <div className="container">
          <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
            <div className="col-sm-12 ftco-animate text-center">
              <h1 className="mb-2">100% Fresh &amp; Organic Foods</h1>
              <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
              <p><a href="#" className="btn btn-primary">View Details</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  <section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
    <div className="container py-4">
      <div className="row d-flex justify-content-center py-5">
        <div className="col-md-6">
          <h2 style={{fontSize: '22px'}} className="mb-0">Subcribe to our Newsletter</h2>
          <span>Get e-mail updates about our latest shops and special offers</span>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <form action="#" className="subscribe-form">
            <div className="form-group d-flex">
              <input type="text" className="form-control" placeholder="Enter email address" />
              <input type="submit" defaultValue="Subscribe" className="submit px-3" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

    );
  }
}


export default Content;
