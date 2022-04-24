import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { API_URL, doApiGet } from '../services/apiService'
import { addProdVisitedToLocal } from '../services/localServices';
import InfoProductsList from './infoProductsList';

function ProductInfo(props) {
    const [product, SetProduct] = useState({})
    let params = useParams();
    let nav = useNavigate();
    let location = useLocation
    useEffect(() => {
        doApi();
    }, [location])

    const doApi = async () => {
        let url = API_URL + "/products/single/" + params.id;
        let resp = await doApiGet(url);
        console.log(resp.data);
        SetProduct(resp.data)
        //  save in visited in local
        addProdVisitedToLocal(resp.data.short_id)
    }
    return (
        <div className='container' style={{ minHeight: "85vh" }}>
            <div className='row '>
                <div className='col-md-4'>
                    {/* img-fluid - real width of pics or width 100%  */}
                    <img src={product.img_url || "/images/logo512.png"} alt={product.name} className='img-fluid img-tumbnall shadow' />
                </div>
                <div className='col-md-8 '>
                    <h2 className='display-4'> {product.name}</h2>
                    <p><strong>info: </strong> {product.info}</p>
                    <h3>title: {product.title}</h3>
                    <h2>text: {product.text}</h2>
                    <button onClick={() => {
                        nav(-1);
                    }} className={'btn btn-dark'}>back</button>
                </div>
            </div>
            {product.cat_short_id ?
                <InfoProductsList cat_short_id={product.cat_short_id} />
                : ""}
        </div>
    )
}

export default ProductInfo