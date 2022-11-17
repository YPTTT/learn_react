import React, { Component } from 'react'

class ProductDetail extends Component {
    render() {

        var { match } = this.props
        console.log(match)
        var slug = match.params.slug

        return (
            <div>
                Chi tiết { slug }
            </div>
        );
    }
}

export default ProductDetail;

// app là cái chính, bao bọc các components nhỏ ở bên trong