import React, {Component} from 'react';
class Shop extends Component {
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
              <p>
               
                <img key = {product.id} src={product.image}  crossOrigin="anonymous "/>
               
                <p key = {product.name}> {product.name}</p>
                
                <p key = {product.price}>price: {product.price}</p>
                
            </p>





            );
          })}
        


        </div>
        );
    
  }
}



export default Shop;