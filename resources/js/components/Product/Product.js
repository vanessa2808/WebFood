import React, {Component} from 'react';
import axios from 'axios';
class Shop extends Component {
	render() {
		return(
			<div>
			<div className="hero-wrap hero-bread" style={{backgroundImage: 'url("./images/bg_1.jpg")'}}>
  <div className="container">
    <div className="row no-gutters slider-text align-items-center justify-content-center">
      <div className="col-md-9 ftco-animate text-center">
        <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Products</span></p>
        <h1 className="mb-0 bread">Products</h1>
      </div>
    </div>
  </div>
</div>

  <section className="ftco-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-10 mb-5 text-center">
        <ul className="product-category">
          <li><a href="#" className="active">All</a></li>
          <li><a href="#">Vegetables</a></li>
          <li><a href="#">Fruits</a></li>
          <li><a href="#">Juice</a></li>
          <li><a href="#">Dried</a></li>
        </ul>
      </div>
    </div>
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
      <div className="col-md-6 col-lg-3 ftco-animate">
        <div className="product">
          <a href="#" className="img-prod"><img className="img-fluid" src="images/product-9.jpg" alt="Colorlib Template" />
            <span className="status">30%</span>
            <div className="overlay" />
          </a>
          <div className="text py-3 pb-4 px-3 text-center">
            <h3><a href="#">Onion</a></h3>
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
          <a href="#" className="img-prod"><img className="img-fluid" src="images/product-10.jpg" alt="Colorlib Template" />
            <div className="overlay" />
          </a>
          <div className="text py-3 pb-4 px-3 text-center">
            <h3><a href="#">Apple</a></h3>
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
          <a href="#" className="img-prod"><img className="img-fluid" src="images/product-11.jpg" alt="Colorlib Template" />
            <div className="overlay" />
          </a>
          <div className="text py-3 pb-4 px-3 text-center">
            <h3><a href="#">Garlic</a></h3>
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
          <a href="#" className="img-prod"><img className="img-fluid" src="images/product-12.jpg" alt="Colorlib Template" />
            <div className="overlay" />
          </a>
          <div className="text py-3 pb-4 px-3 text-center">
            <h3><a href="#">Chilli</a></h3>
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
    <div className="row mt-5">
      <div className="col text-center">
        <div className="block-27">
          <ul>
            <li><a href="#">&lt;</a></li>
            <li className="active"><span>1</span></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">&gt;</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
		);
	}
}


export default Shop;