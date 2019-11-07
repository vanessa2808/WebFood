import React, {Component} from 'react';

class Wishlist extends Component {
	render() {
		return(
			<div>
				<div>
  <div className="hero-wrap hero-bread" style={{backgroundImage: 'url("images/bg_1.jpg")'}}>
    <div className="container">
      <div className="row no-gutters slider-text align-items-center justify-content-center">
        <div className="col-md-9 ftco-animate text-center">
          <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Wishlist</span></p>
          <h1 className="mb-0 bread">My Wishlist</h1>
        </div>
      </div>
    </div>
  </div>
  <section className="ftco-section ftco-cart">
    <div className="container">
      <div className="row">
        <div className="col-md-12 ftco-animate">
          <div className="cart-list">
            <table className="table">
              <thead className="thead-primary">
                <tr className="text-center">
                  <th>&nbsp;</th>
                  <th>Product List</th>
                  <th>&nbsp;</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="product-remove"><a href="#"><span className="ion-ios-close" /></a></td>
                  <td className="image-prod"><div className="img" style={{backgroundImage: 'url("images/product-1.jpg")'}} /></td>
                  <td className="product-name">
                    <h3>Bell Pepper</h3>
                    <p>Far far away, behind the word mountains, far from the countries</p>
                  </td>
                  <td className="price">$4.90</td>
                  <td className="quantity">
                    <div className="input-group mb-3">
                      <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={1} min={1} max={100} />
                    </div>
                  </td>
                  <td className="total">$4.90</td>
                </tr>{/* END TR*/}
                <tr className="text-center">
                  <td className="product-remove"><a href="#"><span className="ion-ios-close" /></a></td>
                  <td className="image-prod"><div className="img" style={{backgroundImage: 'url(images/product-2.jpg)'}} /></td>
                  <td className="product-name">
                    <h3>Bell Pepper</h3>
                    <p>Far far away, behind the word mountains, far from the countries</p>
                  </td>
                  <td className="price">$15.70</td>
                  <td className="quantity">
                    <div className="input-group mb-3">
                      <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={1} min={1} max={100} />
                    </div>
                  </td>
                  <td className="total">$15.70</td>
                </tr>{/* END TR*/}
                <tr className="text-center">
                  <td className="product-remove"><a href="#"><span className="ion-ios-close" /></a></td>
                  <td className="image-prod"><div className="img" style={{backgroundImage: 'url(images/product-3.jpg)'}} /></td>
                  <td className="product-name">
                    <h3>Bell Pepper</h3>
                    <p>Far far away, behind the word mountains, far from the countries</p>
                  </td>
                  <td className="price">$15.70</td>
                  <td className="quantity">
                    <div className="input-group mb-3">
                      <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={1} min={1} max={100} />
                    </div>
                  </td>
                  <td className="total">$15.70</td>
                </tr>{/* END TR*/}
                <tr className="text-center">
                  <td className="product-remove"><a href="#"><span className="ion-ios-close" /></a></td>
                  <td className="image-prod"><div className="img" style={{backgroundImage: 'url(images/product-4.jpg)'}} /></td>
                  <td className="product-name">
                    <h3>Bell Pepper</h3>
                    <p>Far far away, behind the word mountains, far from the countries</p>
                  </td>
                  <td className="price">$15.70</td>
                  <td className="quantity">
                    <div className="input-group mb-3">
                      <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={1} min={1} max={100} />
                    </div>
                  </td>
                  <td className="total">$15.70</td>
                </tr>{/* END TR*/}
                <tr className="text-center">
                  <td className="product-remove"><a href="#"><span className="ion-ios-close" /></a></td>
                  <td className="image-prod"><div className="img" style={{backgroundImage: 'url(images/product-5.jpg)'}} /></td>
                  <td className="product-name">
                    <h3>Bell Pepper</h3>
                    <p>Far far away, behind the word mountains, far from the countries</p>
                  </td>
                  <td className="price">$15.70</td>
                  <td className="quantity">
                    <div className="input-group mb-3">
                      <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={1} min={1} max={100} />
                    </div>
                  </td>
                  <td className="total">$15.70</td>
                </tr>{/* END TR*/}
                <tr className="text-center">
                  <td className="product-remove"><a href="#"><span className="ion-ios-close" /></a></td>
                  <td className="image-prod"><div className="img" style={{backgroundImage: 'url(images/product-6.jpg)'}} /></td>
                  <td className="product-name">
                    <h3>Bell Pepper</h3>
                    <p>Far far away, behind the word mountains, far from the countries</p>
                  </td>
                  <td className="price">$15.70</td>
                  <td className="quantity">
                    <div className="input-group mb-3">
                      <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={1} min={1} max={100} />
                    </div>
                  </td>
                  <td className="total">$15.70</td>
                </tr>{/* END TR*/}
              </tbody>
            </table>
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


export default Wishlist;