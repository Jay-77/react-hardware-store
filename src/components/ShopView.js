import React, {Component} from 'react';

import ProductList from './ProductList';

class ShopView extends Component{
	render() {
		return(

			 <div className="large-view-box">
			   <h1>Shop</h1>


			   <ProductList

			   productList={this.props.productList}
			   viewMode={'Shop'}
			   addProductToCart={this.addProductToCart} />
			 </div>
		);

	}
}

export default ShopView;        