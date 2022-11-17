import React, { Component } from 'react'

class Products extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <img src="https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg" />
                    <div className="thumbnail">
                        <div className="caption">
                            <h3>Dien thoai 1</h3>
                            <p>
                                1.000.000 VNĐ
                            </p>
                            <p>
                                <a href="#" className="btn btn-primary">Action</a>
                                <a href="#" className="btn btn-default">Action</a>
                            </p>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-danger">Buy</button>
            </div>
        );
    }
}

export default Products;