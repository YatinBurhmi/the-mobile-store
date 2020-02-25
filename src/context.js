import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
//Provider - Provides information for all the application
//Consumer - To use the information provided by the provider

class ProductProvider  extends Component {

    state= {
        products: storeProducts,
        detailProduct : detailProduct
    }

    handleDetail = () => {
        console.log("From HandleDetails")
    }

    addToCart = () => {
        console.log("From Add to cart")
    }

    render() {
        console.log("State",this.state)
        return (
            <ProductContext.Provider value={
                {
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                }
            }>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
