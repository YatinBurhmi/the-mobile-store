import React, { Component } from 'react'


const ProductContext = React.createContext();
//Provider - Provides information for all the application
//Consumer - To use the information provided by the provider

class ProductProvider  extends Component {
    render() {
        return (
            <ProductContext.Provider value="Hello from product context">
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
