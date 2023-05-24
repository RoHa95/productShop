import { useContext } from 'react';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

//context
import { cartContext } from '../../context/CartContextProvider';

//style
import styles from "./NavBar.module.css";

//icon
import shop from '../../icons/shop.svg';
const NavBar = () => {
    const { state } = useContext( cartContext );

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link to="/products" className={styles.productLink}>Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"> <img src={shop} alt='logo'></img> </Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;