import React from 'react'
import ArticelsCatgoryList from './articelsCatgoryList'
import ArticlsStrip from './articelsStrip'
import "./css/articelsUser.css"
import ProductArticels from './productArticels'
function ArticelsUser(props) {
    return (
        <React.Fragment>
            <ArticlsStrip />
            <ArticelsCatgoryList />
            <ProductArticels />
        </React.Fragment>
    )
}

export default ArticelsUser