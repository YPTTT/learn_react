import React, { Component } from 'react'
import './App.css';

class App extends Component {


    constructor(props) {
        super(props)

        // tạo các state ở trong đây

        // có 2 state là products và isActive

        // Gọi state: this.state.key ( key ở đây đang là products và isActive )
        this.state = {
            products : [
                {
                    id: 1,
                    name: 'iphone 1',
                    image: "https://bizweb.dktcdn.net/100/116/615/products/iphone11-select-2019-family-jpeg-71787158-392a-463f-b84d-3eab1f7a4692.jpg?v=1575888870000",
                    status: true,
                    price: 10000
                },
                {
                    id: 2,
                    name: 'iphone 2',
                    image: "https://bizweb.dktcdn.net/100/116/615/products/iphone11-select-2019-family-jpeg-71787158-392a-463f-b84d-3eab1f7a4692.jpg?v=1575888870000",
                    status: true,
                    price: 20000
                },
                {
                    id: 3,
                    name: 'iphone 3',
                    image: "https://bizweb.dktcdn.net/100/116/615/products/iphone11-select-2019-family-jpeg-71787158-392a-463f-b84d-3eab1f7a4692.jpg?v=1575888870000",
                    status: true,
                    price: 30000
                }
            ],
            isActive : true
        }
    }

    onSetState = () => {
        // if (this.state.isActive === true)
        // {
        //     this.setState({
        //         isActive : false
        //     })
        // }
        // else
        // {
        //     this.setState({
        //         isActive : true
        //     })
        // }

        this.setState({
            isActive : !this.state.isActive
            // ! ở đầu là lấy trường hợp ngược lại của isActive
        })
    }

    render() {
        let elements = this.state.products.map((products, index) => {
            let result = ''
            if (products.status) {
                result = <tr key={ index + 1 }>
                            <td>{ index + 1 }</td>
                            <td>{ products.name }</td>
                            <td>
                                <span className="label label-success">{ products.price }</span>
                            </td>
                        </tr>
            }
            return result
        })

        // chỉ những object nào có status bằng true thì mới hiển thị

        return (
            <div>
                <div>
                    <nav className="navbar navbar-inverse">
                        <a className="navbar-brand" href="#">State</a>

                    </nav>
                </div>

                <div className="container">

                    <div className="row">
                        <div className="row">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên</th>
                                        <th>Giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { elements }
                                </tbody>
                            </table>
                            <button type="button" className="btn btn-warning" onClick = { this.onSetState }>
                                Active : { this.state.isActive === true ? 'true' : 'false' }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

// app là cái chính, bao bọc các components nhỏ ở bên trong