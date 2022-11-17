import React, { Component } from 'react'
import callApi from '../../utils/apiCaller'
import { Link } from 'react-router-dom'

class ProductsActionPage extends Component {

    //tao ra state luu gia tri cua form
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }

    componentDidMount(){
        var { match } = this.props
        if (match) {
            var id = match.params.id
            callApi(`products/${id}`, 'GET', null).then(res => {
                var data = res.data
                this.setState({
                    id : data.id,
                    txtName : data.name,
                    txtPrice : data.price,
                    chkbStatus : data.status
                })
            })
        }
    }

    onChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name] : value
        })
    }

    onSave = (event) => {
        event.preventDefault()
        var { id, txtName, txtPrice, chkbStatus } = this.state
        var { history } = this.props
        if (id) { //update
            callApi(`products/${id}`, 'PUT', {
                name : txtName,
                price : txtPrice,
                status : chkbStatus
            }).then(res => {
                history.goBack()
            })
        } else { // them moi
            callApi('products', 'POST', {
                name : txtName,
                price : txtPrice,
                status : chkbStatus
            }).then(res => {
                console.log(res)
                history.goBack()
            })
        }
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit = { this.onSave }>
                    <div className="form-group">
                        <label>Tên sản phẩm : </label>
                        <input
                            type="text"
                            className="form-control"
                            id placeholder="Input field"
                            name="txtName"
                            value = { this.state.txtName }
                            onChange = { this.onChange }
                        />
                    </div>
                    <div className="form-group">
                        <label>Giá sản phẩm : </label>
                        <input
                            type="number"
                            className="form-control"
                            id placeholder="Input field"
                            name="txtPrice"
                            value = { this.state.txtPrice }
                            onChange = { this.onChange }
                        />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="chkbStatus"
                                value = { this.state.chkbStatus }
                                onChange = { this.onChange }
                                checked = { this.state.chkbStatus }
                            />
                            Còn Hàng
                        </label>
                    </div>
                    <Link to="/product-list" className="btn btn-danger">
                        Trở lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
            </div>
        )
    }
}

export default ProductsActionPage