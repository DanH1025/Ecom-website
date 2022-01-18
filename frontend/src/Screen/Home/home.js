import './home.css'

//components
import Products from '../../components/Products/products'
import {Cached} from '@material-ui/icons';


// states
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
//Actions
import { getProducts as listProducts } from '../../redux/actions/productActions'


export default function Home() {

    const dispatch = useDispatch();
    const getProducts= useSelector(state=>state.getProducts);

    const { products, error, loading } = getProducts;

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch]);

    return (
        <div className='homeScreen'>
            <h3 className='homeScreen_title'>Our Products</h3>
            <div className='homeScreen_products'>
                {loading ? <h3>Loading...</h3> : error ? <h3>{error}</h3> : products.map(product =>(
                    <Products 
                    key={product._id}
                    productId={product._id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}
