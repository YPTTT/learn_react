import React, { Component } from 'react'
import './App.css';
import Header from './components/header'
import Products from './components/products'

class App extends Component {
    render() {
        return (
            <div>
                {/* <h1>Day la component</h1> */}
                <Header />
                {/* đây là cách viết ngắn gọn nếu components k có nội dung gì */}
                {/* viết đầy đủ nếu có cả nội dung */} {/* <Header></Header> */}
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Products />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Products />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

// app là cái chính, bao bọc các components nhỏ ở bên trong