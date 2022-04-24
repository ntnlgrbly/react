import React from 'react'
import { Link } from 'react-router-dom';

function ProductItem(props) {
    let item = props.item;
    return (
        <div className='product-item col-md-3 p-2'>
            <div className='shadow'>
                <div style={{ backgroundImage: `url(${item.img_url || "/images/logo512.png"})` }} className='product-img'></div>
                <div className='p-2'>
                    <h4>{item.name}</h4>
                    <div className='text-start'>info: {item.info}</div>
                    <div className='text-center my-2'>
                        <Link className='btn btn-dark w-50' to={"/productInfo/" + item._id}>More info</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem