import React, {Component} from 'react';

class Cart extends Component {
	render() {
		return(
			<div>
  
  <section className="ftco-section ftco-cart">
    <div className="container">
      <div className="row">
        <div className="col-md-12 ftco-animate">
          <div className="cart-list">
            <table className="table">
              <thead className="thead-primary">
                <tr className="text-center">
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                  <th>Product name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="product-remove"><a href="#"><span className="ion-ios-close" /></a></td>
                  <td className="image-prod"><div className="img" style={{backgroundImage: 'url(./images/product-3.jpg)'}} /></td>
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
                  <td className="image-prod"><div className="img" style={{backgroundImage: 'url(./images/product-4.jpg)'}} /></td>
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
      <div className="row justify-content-end">
        <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
          <div className="cart-total mb-3">
            <h3>Coupon Code</h3>
            <p>Enter your coupon code if you have one</p>
            <form action="#" className="info">
              <div className="form-group">
                <label htmlFor>Coupon code</label>
                <input type="text" className="form-control text-left px-3" placeholder />
              </div>
            </form>
          </div>
          <p><a href="#" className="btn btn-primary py-3 px-4">Apply Coupon</a></p>
        </div>
        <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
          <div className="cart-total mb-3">
            <h3>Estimate shipping and tax</h3>
            <p>Enter your destination to get a shipping estimate</p>
            <form action="#" className="info">
              <div className="form-group">
                <label htmlFor>Country</label>
                <input type="text" className="form-control text-left px-3" placeholder />
              </div>
              <div className="form-group">
                <label htmlFor="country">State/Province</label>
                <input type="text" className="form-control text-left px-3" placeholder />
              </div>
              <div className="form-group">
                <label htmlFor="country">Zip/Postal Code</label>
                <input type="text" className="form-control text-left px-3" placeholder />
              </div>
            </form>
          </div>
          <p><a href="#" className="btn btn-primary py-3 px-4">Estimate</a></p>
        </div>
        <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
          <div className="cart-total mb-3">
            <h3>Cart Totals</h3>
            <p className="d-flex">
              <span>Subtotal</span>
              <span>$20.60</span>
            </p>
            <p className="d-flex">
              <span>Delivery</span>
              <span>$0.00</span>
            </p>
            <p className="d-flex">
              <span>Discount</span>
              <span>$3.00</span>
            </p>
            <hr />
            <p className="d-flex total-price">
              <span>Total</span>
              <span>$17.60</span>
            </p>
          </div>
          <p><a href="#" className="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
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


export default Cart;