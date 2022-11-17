import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProductsItem extends Component {

    onDelete = (id) => {
        if (confirm('ban co chac chan muon xoa ?')) { //eslint-disable-line
            this.props.onDelete(id)
        }
    }

    render () {
        var { index, product } = this.props
        var statusName = product.status ? 'Con Hang' : 'Het Hang'
        var statusClass = product.status ? 'warning' : 'default'
        return (
            <tr>
                <td>{ index + 1 }</td>
                <td>{ product.id } </td>
                <td>{ product.name }</td>
                <td>{ product.price }</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-success">
                        Sửa
                    </Link>
                    <button type="button" className="btn btn-danger" onClick = { () => this.onDelete(product.id) }>
                        xóa
                    </button>
                </td>
            </tr>
        )
    }
}

export default ProductsItem