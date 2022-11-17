import React, { Component } from 'react'
import ProductsList from '../../components/ProductsList/ProductsList'
import ProductItem from '../../components/ProductsItem/ProductsItem'
import { connect } from 'react-redux'
import callApi from '../../utils/apiCaller'
import { Link } from 'react-router-dom'

class ProductsListPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products : []
        }
    }

    componentDidMount(){ // gọi lại để lấy data từ server, ( vì bất đồng bộ, k có thì k gọi data từ server dc)
        callApi('products', 'GET', null).then(res => {
            this.setState({
                products : res.data
            })
        })
    }

    onDelete = (id) => {
        callApi(`products/${id}`, 'DELETE', null).then(res => {
            var { products } = this.state
            if (res.status === 200) {
                var index = this.findIndex(products, id)
                if (index !== -1) {
                    products.splice(index, 1)
                    this.setState({
                        products : products
                    })
                }
            }
        })
    }

    findIndex = (products, id) => {
        var result = -1
        products.forEach((products, index) => {
            result = index
        })
        return result
    }

    showProducts = (products) => {
        var result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return(
                    <ProductItem 
                        onDelete = { this.onDelete }
                        key={index}
                        index={index} //lay ra so thu tu
                        product={product}
                    />
                )
            })
        }
        return result
    }

    render () {
        // var { products } = this.props
        var { products } = this.state
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-info">
                    Thêm sản phẩm
                </Link>
                <ProductsList>
                    { this.showProducts(products) }
                </ProductsList>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

export default connect(mapStateToProps, null)(ProductsListPage)