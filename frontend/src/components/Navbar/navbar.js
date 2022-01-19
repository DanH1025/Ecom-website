import './navbar.css'
import {Link} from 'react-router-dom'
import {AddShoppingCart} from '@material-ui/icons'

import { useSelector } from 'react-redux'

export default function Navbar({click}) {

    const cart= useSelector(state=>state.cart);
    const {cartItems} =cart;

    const getCartCount = ()=>{
        return cartItems.reduce((qty,item)=> qty + Number(item.qty), 0);
     };
    return (
        <nav className="navbar">

            {/* Logo part*/}
            <div className="navbar_logo">
                <h3>Electronics Shop</h3>
            </div>

            {/* links*/}
            <ul className="navbar_links">
                <li>
                   <Link to="/cart">
                        {/* logo */}
                        <span className='cartspan'>
                        <AddShoppingCart className='navbar_cart_logo'/>
                        <span className='cartlogo_badge'>{getCartCount()}</span>
                        </span>
                   </Link> 
                </li>
                <li>
                   <Link to="/">
                        Shop
                   </Link> 
                </li>

            </ul>


            {/* colapsuble effect menu*/}
            <div className='colapse_menu' onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </nav>
    )
}
