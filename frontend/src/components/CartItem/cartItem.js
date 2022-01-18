import './cartItem.css'
import { Link } from 'react-router-dom'

import {DeleteOutline} from '@material-ui/icons'

export default function CartItem() {
    return (
        <div className='cartItem'>
            <div className='cartItem_img'>
            <img src='https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
             alt='products name' />
            </div>

            <Link to={`/product/${111}`}>
                <p className='cartItem_name'>Product 1</p>            
            </Link>
            <p className='cartItem_price'>$1999.99</p>
            <select className='cartItem_select'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </select>
            <button className='cartItem_delete_btn'>
                <DeleteOutline />
            </button>
        </div>
    )
}
