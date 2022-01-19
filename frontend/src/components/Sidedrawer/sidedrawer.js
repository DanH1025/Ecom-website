import './sidedrawer.css'
import {Link} from 'react-router-dom';
import {AddShoppingCart} from '@material-ui/icons';
import { useSelector } from 'react-redux'

function SideDrawer({show, click}) {

    
    const cart= useSelector(state=>state.cart);
    const {cartItems} =cart;

    const getCartCount = ()=>{
        return cartItems.reduce((qty,item)=> qty + Number(item.qty), 0);
     };



    const sideDrawerClass = ["side_drawer"];

    if(show){
        sideDrawerClass.push("show");
    }

    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className='side_drawer_links' onClick={click}>
                <li>
                    <Link to="/cart">
                        <span className='side_drawer_cartspan'>
                            <AddShoppingCart className='side_drawer_cart_logo'/>
                            <span className='side_drawer_cartlogo_badge'>{getCartCount()}</span>
                        </span>
                     </Link> 
                </li>
                <li>
                    <Link to="/">
                        Shop
                   </Link> 
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer;

 