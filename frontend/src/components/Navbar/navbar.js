import './navbar.css'
import {Link} from 'react-router-dom'
import {AddShoppingCart} from '@material-ui/icons'


export default function Navbar({click}) {
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
                        <span className='cartlogo_badge'>0</span>
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
