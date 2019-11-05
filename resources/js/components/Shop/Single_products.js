import React, {Component} from 'react';

class Single_products extends Component {
	render() {
		return(
			<div>
				<div>
  <div className="hero-wrap hero-bread" style={{backgroundImage: 'url("images/bg_1.jpg")'}}>
    <div className="container">
      <div className="row no-gutters slider-text align-items-center justify-content-center">
        <div className="col-md-9 ftco-animate text-center">
          <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span className="mr-2"><a href="index.html">Product</a></span> <span>Product Single</span></p>
          <h1 className="mb-0 bread">Product Single</h1>
        </div>
      </div>
    </div>
  </div>
  <section className="ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-5 ftco-animate">
          <a href="images/product-1.jpg" className="image-popup"><img src="images/product-1.jpg" className="img-fluid" alt="Colorlib Template" /></a>
        </div>
        <div className="col-lg-6 product-details pl-md-5 ftco-animate">
          <h3>Bell Pepper</h3>
          <div className="rating d-flex">
            <p className="text-left mr-4">
              <a href="#" className="mr-2">5.0</a>
              <a href="#"><span className="ion-ios-star-outline" /></a>
              <a href="#"><span className="ion-ios-star-outline" /></a>
              <a href="#"><span className="ion-ios-star-outline" /></a>
              <a href="#"><span className="ion-ios-star-outline" /></a>
              <a href="#"><span className="ion-ios-star-outline" /></a>
            </p>
            <p className="text-left mr-4">
              <a href="#" className="mr-2" style={{color: '#000'}}>100 <span style={{color: '#bbb'}}>Rating</span></a>
            </p>
            <p className="text-left">
              <a href="#" className="mr-2" style={{color: '#000'}}>500 <span style={{color: '#bbb'}}>Sold</span></a>
            </p>
          </div>
          <p className="price"><span>$120.00</span></p>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.
          </p>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="form-group d-flex">
                <div className="select-wrap">
                  <div className="icon"><span className="ion-ios-arrow-down" /></div>
                  <select name id className="form-control">
                    <option value>Small</option>
                    <option value>Medium</option>
                    <option value>Large</option>
                    <option value>Extra Large</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-100" />
            <div className="input-group col-md-6 d-flex mb-3">
              <span className="input-group-btn mr-2">
                <button type="button" className="quantity-left-minus btn" data-type="minus" data-field>
                  <i className="ion-ios-remove" />
                </button>
              </span>
              <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} min={1} max={100} />
              <span className="input-group-btn ml-2">
                <button type="button" className="quantity-right-plus btn" data-type="plus" data-field>
                  <i className="ion-ios-add" />
                </button>
              </span>
            </div>
            <div className="w-100" />
            <div className="col-md-12">
              <p style={{color: '#000'}}>600 kg available</p>
            </div>
          </div>
          <p><a href="cart.html" className="btn btn-black py-3 px-5">Add to Cart</a></p>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-3 pb-3">
        <div className="col-md-12 heading-section text-center ftco-animate">
          <span className="subheading">Products</span>
          <h2 className="mb-4">Related Products</h2>
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


			 </div>
		);
	}
}


export default Single_products;