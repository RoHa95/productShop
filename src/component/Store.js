import React from 'react';
import { useContext } from 'react';
import Products from './Shared/Products';
//context
import { ProductsContext } from '../context/ProductContextProvider';
//style
import styles from './Store.module.css';
const Store = () => {
    const products = useContext( ProductsContext);
    
    return (
        <div className={styles.container}>
            {products.map(item => <Products 
                                        key={item.id} 
                                        productData ={item} />)}
        </div>
    );
};

export default Store;