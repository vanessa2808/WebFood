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
  <section className="ftco-section">
    <div className="container">
      <div className="row no-gutters ftco-services">
        <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services mb-md-0 mb-4">
            <div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
              <span className="flaticon-shipped" />
            </div>
            <div className="media-body">
              <h3 className="heading">Free Shipping</h3>
              <span>On order over $100</span>
            </div>
          </div>      
        </div>
        <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services mb-md-0 mb-4">
            <div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
              <span className="flaticon-diet" />
            </div>
            <div className="media-body">
              <h3 className="heading">Always Fresh</h3>
              <span>Product well package</span>
            </div>
          </div>    
        </div>
        <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services mb-md-0 mb-4">
            <div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
              <span className="flaticon-award" />
            </div>
            <div className="media-body">
              <h3 className="heading">Superior Quality</h3>
              <span>Quality Products</span>
            </div>
          </div>      
        </div>
        <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services mb-md-0 mb-4">
            <div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
              <span className="flaticon-customer-service" />
            </div>
            <div className="media-body">
              <h3 className="heading">Support</h3>
              <span>24/7 Support</span>
            </div>
          </div>      
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-category ftco-no-pt">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6 order-md-last align-items-stretch d-flex">
              <div className="category-wrap-2 ftco-animate img align-self-stretch d-flex" style={{backgroundImage: 'url(images/category.jpg)'}}>
                <div className="text text-center">
                  <h2>Vegetables</h2>
                  <p>Protect the health of every home</p>
                  <p><a href="#" className="btn btn-primary">Shop now</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="category-wrap ftco-animate img mb-4 d-flex align-items-end" style={{backgroundImage: 'url(images/category-1.jpg)'}}>
                <div className="text px-3 py-1">
                  <h2 className="mb-0"><a href="#">Fruits</a></h2>
                </div>
              </div>
              <div className="category-wrap ftco-animate img d-flex align-items-end" style={{backgroundImage: 'url(images/category-2.jpg)'}}>
                <div className="text px-3 py-1">
                  <h2 className="mb-0"><a href="#">Vegetables</a></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="category-wrap ftco-animate img mb-4 d-flex align-items-end" style={{backgroundImage: 'url(images/category-3.jpg)'}}>
            <div className="text px-3 py-1">
              <h2 className="mb-0"><a href="#">Juices</a></h2>
            </div>    
          </div>
          <div className="category-wrap ftco-animate img d-flex align-items-end" style={{backgroundImage: 'url(images/category-4.jpg)'}}>
            <div className="text px-3 py-1">
              <h2 className="mb-0"><a href="#">Dried</a></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-3 pb-3">
        <div className="col-md-12 heading-section text-center ftco-animate">
          <span className="subheading">Featured Products</span>
          <h2 className="mb-4">Our Products</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
      </div>      
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="product">
            <a href="#" className="img-prod"><img className="img-fluid" src="images/product-1.jpg" alt="Colorlib Template" />
              <span className="status">30%</span>
              <div className="overlay" />
            </a>
            <div className="text py-3 pb-4 px-3 text-center">
              <h3><a href="#">Bell Pepper</a></h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
                </div>
              </div>
              <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                  <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu" /></span>
                  </a>
                  <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart" /></span>
                  </a>
                  <a href="#" className="heart d-flex justify-content-center align-items-center ">
                    <span><i className="ion-ios-heart" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="product">
            <a href="#" className="img-prod"><img className="img-fluid" src="images/product-2.jpg" alt="Colorlib Template" />
              <div className="overlay" />
            </a>
            <div className="text py-3 pb-4 px-3 text-center">
              <h3><a href="#">Strawberry</a></h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price"><span>$120.00</span></p>
                </div>
              </div>
              <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                  <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu" /></span>
                  </a>
                  <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart" /></span>
                  </a>
                  <a href="#" className="heart d-flex justify-content-center align-items-center ">
                    <span><i className="ion-ios-heart" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="product">
            <a href="#" className="img-prod"><img className="img-fluid" src="images/product-3.jpg" alt="Colorlib Template" />
              <div className="overlay" />
            </a>
            <div className="text py-3 pb-4 px-3 text-center">
              <h3><a href="#">Green Beans</a></h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price"><span>$120.00</span></p>
                </div>
              </div>
              <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                  <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu" /></span>
                  </a>
                  <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart" /></span>
                  </a>
                  <a href="#" className="heart d-flex justify-content-center align-items-center ">
                    <span><i className="ion-ios-heart" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="product">
            <a href="#" className="img-prod"><img className="img-fluid" src="images/product-4.jpg" alt="Colorlib Template" />
              <div className="overlay" />
            </a>
            <div className="text py-3 pb-4 px-3 text-center">
              <h3><a href="#">Purple Cabbage</a></h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price"><span>$120.00</span></p>
                </div>
              </div>
              <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                  <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu" /></span>
                  </a>
                  <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart" /></span>
                  </a>
                  <a href="#" className="heart d-flex justify-content-center align-items-center ">
                    <span><i className="ion-ios-heart" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="product">
            <a href="#" className="img-prod"><img className="img-fluid" src="images/product-5.jpg" alt="Colorlib Template" />
              <span className="status">30%</span>
              <div className="overlay" />
            </a>
            <div className="text py-3 pb-4 px-3 text-center">
              <h3><a href="#">Tomatoe</a></h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
                </div>
              </div>
              <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                  <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu" /></span>
                  </a>
                  <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart" /></span>
                  </a>
                  <a href="#" className="heart d-flex justify-content-center align-items-center ">
                    <span><i className="ion-ios-heart" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="product">
            <a href="#" className="img-prod"><img className="img-fluid" src="images/product-6.jpg" alt="Colorlib Template" />
              <div className="overlay" />
            </a>
            <div className="text py-3 pb-4 px-3 text-center">
              <h3><a href="#">Brocolli</a></h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price"><span>$120.00</span></p>
                </div>
              </div>
              <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                  <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu" /></span>
                  </a>
                  <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart" /></span>
                  </a>
                  <a href="#" className="heart d-flex justify-content-center align-items-center ">
                    <span><i className="ion-ios-heart" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="product">
            <a href="#" className="img-prod"><img className="img-fluid" src="images/product-7.jpg" alt="Colorlib Template" />
              <div className="overlay" />
            </a>
            <div className="text py-3 pb-4 px-3 text-center">
              <h3><a href="#">Carrots</a></h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price"><span>$120.00</span></p>
                </div>
              </div>
              <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                  <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu" /></span>
                  </a>
                  <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart" /></span>
                  </a>
                  <a href="#" className="heart d-flex justify-content-center align-items-center ">
                    <span><i className="ion-ios-heart" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="product">
            <a href="#" className="img-prod"><img className="img-fluid" src="images/product-8.jpg" alt="Colorlib Template" />
              <div className="overlay" />
            </a>
            <div className="text py-3 pb-4 px-3 text-center">
              <h3><a href="#">Fruit Juice</a></h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price"><span>$120.00</span></p>
                </div>
              </div>
              <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                  <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu" /></span>
                  </a>
                  <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart" /></span>
                  </a>
                  <a href="#" className="heart d-flex justify-content-center align-items-center ">
                    <span><i className="ion-ios-heart" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <hr />
  <section className="ftco-section ftco-partner">
    <div className="container">
      <div className="row">
        <div className="col-sm ftco-animate">
          <a href="#" className="partner"><img src="images/partner-1.png" className="img-fluid" alt="Colorlib Template" /></a>
        </div>
        <div className="col-sm ftco-animate">
          <a href="#" className="partner"><img src="images/partner-2.png" className="img-fluid" alt="Colorlib Template" /></a>
        </div>
        <div className="col-sm ftco-animate">
          <a href="#" className="partner"><img src="images/partner-3.png" className="img-fluid" alt="Colorlib Template" /></a>
        </div>
        <div className="col-sm ftco-animate">
          <a href="#" className="partner"><img src="images/partner-4.png" className="img-fluid" alt="Colorlib Template" /></a>
        </div>
        <div className="col-sm ftco-animate">
          <a href="#" className="partner"><img src="images/partner-5.png" className="img-fluid" alt="Colorlib Template" /></a>
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
