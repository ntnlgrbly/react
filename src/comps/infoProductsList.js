import React, { useEffect, useState } from 'react'
import { API_URL, doApiGet } from '../services/apiService'
import ProductItem from './productItem'


function InfoProductsList(props) {
    let [ar, setAr] = useState([])


    useEffect(() => {
        doApi()
    }, [])

    const doApi = async () => {
        let url = API_URL + "/products?perPage=4&cat=" + props.cat_short_id;
        let resp = await doApiGet(url);
        console.log(resp.data);
        setAr(resp.data);
    }

    return (
        <div>
            <h2 className='text-center'> new product in our store</h2>

            <div className='row'>
                {ar.map(item => {
                    return (
                        <ProductItem key={item._id} item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default InfoProductsList