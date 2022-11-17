import React, { Component } from 'react'

class Products extends Component {

    // tạo constructor có tham số props và gọi super(props)

    // constructor(props) {
    //     super(props)
    //     console.log(props)
    // }

    onAddToCart2 = () => {
        alert(this.props.name + ' - ' + this.props.price)
    }

    onAddToCart = (text) =>{
        console.log(text)
        alert(text)
    }

    render() {
        return (
            <div>
                
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img  alt="" src={ this.props.image } />
                        <div className="caption">
                            <h3> { this.props.name } </h3>
                            <p>
                                { this.props.price } VNĐ
                            </p>
                            <p>
                                {/* <a href="#" className="btn btn-primary" onClick={ () => { this.onAddToCart('Mua thanh cong') } }>Mua ngay</a> */}
                                {/* <a href="#" className="btn btn-primary" onClick={ () => { this.onAddToCart(this.props.name) } }>Mua ngay</a> */}
                                {/* ở đây phải sử dụng arrow function nếu không thì sẽ không bắt được sự kiện vì ở app đã dùng vòng lặp để hiển thị các sản phẩm ra rồi */}
                                {/* sử dụng constructor */}
                                <a href="#" className="btn btn-primary" onClick={ () => { this.onAddToCart2() } }>Mua ngay_có onclick</a>
                                <a href="#" className="btn btn-primary">Mua ngay</a>
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Products;

// app là cái chính, bao bọc các components nhỏ ở bên trong