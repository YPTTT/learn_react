import React, { Component } from 'react'
import './App.css';
import Products from './components/products'

class App extends Component {
    render() {

        var products = [
            {
                id : 1,
                name : 'iphone 1',
                image : "https://bizweb.dktcdn.net/100/116/615/products/iphone11-select-2019-family-jpeg-71787158-392a-463f-b84d-3eab1f7a4692.jpg?v=1575888870000",
                status : true,
                price : 10000
            },
            {
                id : 2,
                name : 'iphone 2',
                image : "https://bizweb.dktcdn.net/100/116/615/products/iphone11-select-2019-family-jpeg-71787158-392a-463f-b84d-3eab1f7a4692.jpg?v=1575888870000",
                status : true,
                price : 20000
            },
            {
                id : 3,
                name : 'iphone 3',
                image : "https://bizweb.dktcdn.net/100/116/615/products/iphone11-select-2019-family-jpeg-71787158-392a-463f-b84d-3eab1f7a4692.jpg?v=1575888870000",
                status : false,
                price : 30000
            },
        ]

        let elements = products.map((products, index) =>{
            let result = ''
            if (products.status)
            {
                result = <Products key = { index }
                                   name={ products.name }
                                   price={ products.price }
                                   image = { products.image }
                        />
            }
            return result
        })

        // chỉ những object nào có status bằng true thì mới hiển thị

        return (
            <div>
                <div>
                    <nav className="navbar navbar-inverse">
                        <a className="navbar-brand" href="#">Title</a>

                    </nav>
                </div>

                <div className="container">

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {/* <Products name="iphone 1"
                                      price="10000"
                                      image = "https://bizweb.dktcdn.net/100/116/615/products/iphone11-select-2019-family-jpeg-71787158-392a-463f-b84d-3eab1f7a4692.jpg?v=1575888870000"
                            /> */}
                            { elements }
                            {/* name do mình tự đặt */}
                            {/* name với price ở đây chính là key của props */}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;

// app là cái chính, bao bọc các components nhỏ ở bên trong