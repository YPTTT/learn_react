import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom';
import ProductsDetail from '../Components/ProductsDetail'

class Products extends Component {
    render() {

        var products = [
            {
                id : 1,
                // thêm thuộc tính để hiện thị lên url
                slug : "p1",
                name : "Product 1",
                price : 100
            },
            {
                id : 2,
                slug : "p2",
                name : "Product 2",
                price : 200
            },
            {
                id : 3,
                slug : "p3",
                name : "Product 3",
                price : 300
            }
        ]

        var {match} = this.props
        // console.log(match)
        // lấy ra usl của match
        var url = match.url
        // console.log(match)

        var result = products.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`} path={`${url}/${product.slug}`} key = {index}>
                    <li className="list-group-item" >
                        { product.id } -- { product.name } -- { product.price }
                    </li>
                </NavLink>
            )
        })

        return (
            <div className="container">
                <h1>Danh sách sản phẩm</h1>
                <div className="row">
                    <ul className="list-group">
                        { result }
                    </ul>
                </div>
                {/* <div>
                    <div className="row">
                        <Route path='/products/:slug' component={ProductsDetail}/>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Products;

// app là cái chính, bao bọc các components nhỏ ở bên trong