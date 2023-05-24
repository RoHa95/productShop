import React, {useContext} from 'react';

//context
import { cartContext } from '../../context/CartContextProvider';

//functions
import { shorten } from '../../helper/functions';
//style
import styles from '../Shared/Cart.module.css';
//icon
import trash from '../../icons/trash.svg';

const Cart = (props) => {
    const {image, title, price, quantity} = props.data;
    const {dispatch} = useContext(cartContext);

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt='product'></img>
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $ </p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                    <button onClick={()=> dispatch({type:"DECREASE", payload: props.data})}> - </button>
                    :<button onClick={()=> dispatch({type:"REMOVE_ITEM", payload: props.data})}><img src={trash} alt='trash'></img></button>
                }
                <button onClick={()=>dispatch({type:"INCREASE", payload: props.data})}>+</button>
                

            </div>

        </div>
    );
};

export default Cart;