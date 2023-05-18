import React from 'react';
import {Link} from 'react-router-dom';
import { shorten } from '../../helper/functions';

const Products =({productData}) => {

    return (
        <div>
            <img src={productData.image} style={{width: "200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Detailes</Link>
                <div>
                    <button>Add to Card</button>
                </div>
            </div>

        </div>
    );
};

export default Products;