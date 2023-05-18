import React from 'react';
import { useContext } from 'react';
import Products from './Shared/Products';
//context
import { ProductsContext } from '../context/ProductContextProvider';

const Store = () => {
    const products = useContext( ProductsContext);
    
    return (
        <div style={{display:"flex" , justifyContent:"space-between", flexWrap:"wrap"} }>
            {products.map(item => <Products 
                                        key={item.id} 
                                        productData ={item} />)}
        </div>
    );
};

export default Store;