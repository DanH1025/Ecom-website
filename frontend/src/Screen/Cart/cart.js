import './cart.css'

import CartItem from '../../components/CartItem/cartItem'

export default function Cart() {
    return (
        <div className="cartScreen">
            <div className='cart_screen_left'>
                <h2>Shopping Cart</h2>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />

            
            </div>
            <div className='cart_screen_right'>
                <div className='cart_screen_right_info'>
                    <p>SubTotal (0) items</p>
                    <p>$1999.99</p>
                </div>
                <div className='cart_screen_right_checkout'>
                    <button>Checkout</button>
                </div>

            </div>
        </div>
    )
}
