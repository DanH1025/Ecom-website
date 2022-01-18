import { Link } from 'react-router-dom'
import './products.css'



export default function Products({imageUrl, name , price , description, productId}) {
    return (
        <div className='products'>
            <img src={imageUrl} alt={name}></img>

            <div className='products_info'>
                <p className='products_info_name'>{name} 1</p>
                <p className='products_info_description'>{description.substring(0,80)}...</p>
                <p className='products_info_price'>${price}</p>
                
                {/* Note there was a problem with the collon before */}
                <Link to={`/products/${productId}`} className="products_info_button">View</Link>
            </div>



        </div>
    )
}
