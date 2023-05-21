import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { shorten , isInCart , quantityCount } from '../../helper/functions';
//context
import { cartContext } from '../../context/CartContextProvider';
const Products =({productData}) => {
    const { state,dispatch } = useContext(cartContext);

    return (
        <div>
            <img src={productData.image} style={{width: "200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Detailes</Link>
                <div>
                    {
                        isInCart(state, productData.id) ?
                        <button onClick={() => dispatch({type:"INCREASE", payload: productData})}>+</button> :
                        <button onClick={() => dispatch({type:"ADD_ITEM", payload: productData})}>Add to Cart</button>
                    }
                    {
                        quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch({type:"DECREASE", payload: productData})}> - </button>
                    }
                    {   quantityCount(state, productData.id) === 1 && <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: productData})}> Remove</button>
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;