import React, {Component} from 'react';

class Shop extends Component {
  constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            image: '',
            description: '',
            price: '',
            created_at: '',
            updated_at: '',
            loading: true
        }
    }

    componentDidMount() {
        fetch('http://webfood.com/api/Product')
            .then(response => response.json())
            .then(responseData =>
                this.setState({
                    id: responseData.id,
                    name: responseData.name,
                    image: responseData.image,
                    description: responseData.description,
                    price: responseData.price,
                    created_at: responseData.created_at,
                    updated_at: responseData.updated_at,
                    loading: false
                })
            )
            .catch(err => console.log(err));
    }

    render() {
        
        if (this.state.loading)
            return <p>Loading</p>;
        else
            return (
                <div className="App">
                    <p>id: {this.state.id} </p>
                    <p>name: {this.state.name}</p>
                    
                    <img src={this.state.image} alt="Weather icon"/>
                    <p>Description: {this.state.description}</p>
                    <p>price: {this.state.price}</p>
                     <p>created_at: {this.state.created_at}</p>
                      <p>updated_at: {this.state.updated_at}</p>
                </div>
            );
    
  }
}



export default Shop;