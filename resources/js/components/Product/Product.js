import React, {Component} from 'react';
require('./image/bg_1.jpg');
require('./image/64266357_451633672062877_229471001589579776_o.jpg');
class Product extends Component {
  constructor(props) {
        super(props);
        this.state = {
          produts:[],
          loading: true
        }

    }

    componentDidMount() {
        fetch('http://webfood.com/api/Product')
            .then(response => response.json())
            .then(responseData =>{
                this.setState({
                  produts: responseData,
                  loading: false
                }
                )}
            )
            .catch(err => console.log(err));
    }

    render() {
        
        if (this.state.loading)
            return (<p>Loading</p>);
        else
            return (
          <div className="App">
            <div className="hero-wrap hero-bread" style={{backgroundImage: 'url("images/bg_1.jpg")'}}>
                <div className="container">
                  <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9 ftco-animate text-center">
                      <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Products</span></p>
                      <h1 className="mb-0 bread">Products</h1>
                    </div>
                  </div>
                </div>
              </div>



          
          {this.state.produts.map(product => {
            return (
           
               <div className="row">
               <div className="col-md-12">
  <div className="product">
    <img key = {product.id} src="{require(`${./product.image}`)}"   crossOrigin="anonymous "/>
    <div className="text py-3 pb-4 px-3 text-center">
      <h3><a href="#">{product.name}</a></h3>
      <div className="d-flex">
        <div className="pricing">
          <p className="price"><span>{product.price}</span></p>
        </div>
      </div>
      <div className="bottom-area d-flex px-3">
        <div className="m-auto d-flex">
          <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
            <span><i className="ion-ios-menu" /></span>
          </a>
          <a href="/Cart" className="buy-now d-flex justify-content-center align-items-center mx-1">
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

                
           





            );
          })}
        


        </div>
        );
    
  }
}



export default Product;