import './product.css';

import { useState,useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { getProductsDetails} from '../../redux/actions/productActions';
import {addToCart} from '../../redux/actions/cartActions';



export default function Product({match,history}) {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state=> state.getProductsDetails);
    const {loading, error, product}= productDetails;

    useEffect(()=>{
        if(product && match.params.id !== product._id){
            dispatch(getProductsDetails(match.params.id))
        }
    },[dispatch, product, match]);  

    const addToCartHandler = () =>{
        dispatch(addToCart(product._id , qty));
        history.push("/cart");
    }

    return (
        <div className='productScreen'>
            {loading? <h3>Loading...</h3> :error ? <h3>{error}</h3> : (
            <>
                <div className='product_left'>
                    <div className='product_left_img'>
                        <img src={product.imageUrl} 
                        alt={product.name} />
                        <div className='product_left_info'>
                            <p className='product_left_info_name'>{product.name}</p>
                            <p className='product_left_info_price'>Price: {product.price}</p>
                            <p className='product_left_info_description'>Description: {product.description}</p>
                        </div>
                        
                    </div>
                </div>
                <div className='product_right'>
                    <div className='product_right_info'>
                        <p className='product_right_info_price'>Price: <span>${product.price}</span></p>
                        <p className='product_right_info_status'>Status: <span> {product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span></p> 
                        <p className='product_right_info_quantity'>Qty: 
                                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                {[...Array(product.countInStock).keys()].map((x) => (
                                     <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                     </option>
                                 ))}
                                </select>
                        </p>
                        <p className='product_right_info_btn_wrapper'>
                            <button className='product_right_info_btn' type="button" onClick={addToCartHandler} >Add to cart</button>
                        </p>       
                    </div>
                </div>
                
            </>
            )}
           
        </div>
    )
}
