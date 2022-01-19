import './cart.css'

import CartItem from '../../components/CartItem/cartItem'


import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import {addToCart, removeFromCart} from '../../redux/actions/cartActions';

export default function Cart() {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id,qty)=>{
        dispatch(addToCart(id,qty))
    }

    const removeFromCartHandler = (id)=>{
        dispatch(removeFromCart(id));
    };
    const getCartCount = ()=>{
        return cartItems.reduce((qty,item)=> Number(item.qty) + qty ,0)
    };
    const getPriceCalc = ()=>{
        return cartItems.reduce((price,item)=> (item.price * item.qty) + price ,0 );
    };


    return (
        <div className="cartScreen">
            <div className='cart_screen_left'>
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Cart Empty <Link to='/'>GO back</Link>
                    </div>
                ) : cartItems.map(item => (
                    <CartItem key={item.product}  item={item} qtyChangeHandler={qtyChangeHandler} removeFromCartHandler={removeFromCartHandler}/>
                ))}
            
            </div>
            <div className='cart_screen_right'>
                <div className='cart_screen_right_info'>
                    <p>SubTotal  {getCartCount()}  items</p>
                    <p>${getPriceCalc().toFixed(2)}</p>
                </div>
                <div className='cart_screen_right_checkout'>
                    <button>Checkout</button>
                </div>

            </div>
        </div>
    )
}
