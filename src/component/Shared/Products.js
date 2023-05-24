import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { shorten , isInCart , quantityCount } from '../../helper/functions';
//context
import { cartContext } from '../../context/CartContextProvider';
//style
import styles from './Products.module.css';
//icon
import trash from "../../icons/trash.svg";

const Products =({productData}) => {
    const { state,dispatch } = useContext(cartContext);

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} style={{width: "200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Detailes</Link>
                <div className={styles.buttonContainer}>
                    {
                        isInCart(state, productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch({type:"INCREASE", payload: productData})}>+</button> :
                        <button onClick={() => dispatch({type:"ADD_ITEM", payload: productData})}>Add to Cart</button>
                    }
                    {
                        quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type:"DECREASE", payload: productData})}> - </button>
                    }
                    {   quantityCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type:"REMOVE_ITEM", payload: productData})}><img src={trash} alt='trash'></img></button>
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;