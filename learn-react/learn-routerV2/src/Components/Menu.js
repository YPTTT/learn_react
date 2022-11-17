import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

const menus = [
    {
        name : 'Trang chu',
        path : '/',
        exact : true
    },
    {
        name : 'Gioi thieu',
        path : '/about',
        exact : false
    },
    {
        name : 'San pham',
        path : '/products',
        exact : false
    },
    {
        name : 'Đăng nhập',
        path : '/login',
        exact : false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return <Route path={to} exact = {activeOnlyWhenExact} children = {({match}) =>{
        var active = match ? "active" : ""
        return (
            <li className={active}>
                <Link to ={to} className="my-link">
                    { label }
                </Link>
            </li>
        )
    }}/>
}

class About extends Component {

    showMenus = (menus) => {
        var result = null
        if (menus.length > 0)
        {
            result = menus.map((menu, index) => {
                return <MenuLink key={index} label = {menu.name} activeOnlyWhenExact = {menu.exact} to = {menu.path}/>
            })
        }
        return result
    }

    render() {

        return (

            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    {/* <li> */}

                        {/* Sử dụng NavLink */}

                        {/* <Link to='/'>Trang chủ</Link> */}

                        {/* sử dụng activeStyle */}
                        {/* <NavLink exact activeStyle = {{ color : 'white' }} to='/'>Trang chủ</NavLink> */}

                        {/* sử dụng activeClass */}
                        {/* <NavLink activeClassName="active" to='/'>Trang chủ</NavLink> */}

                        {/* sử dụng MenuLink */}
                        {/* <MenuLink label = "Trang chủ" activeOnlyWhenExact = {true} to = "/"/> */}

                        {/* tách ra để dễ quản lý hơn */}
                        { this.showMenus(menus) }

                    {/* </li> */}
                    {/* <li> */}

                        {/* <Link to='/about'>About</Link> */}
                        {/* <NavLink activeClassName="active" to='/about'>About</NavLink> */}
                        {/* <MenuLink label = "Giới thiệu" activeOnlyWhenExact = {false} to = "/about"/> */}
                    {/* </li> */}
                </ul>
            </nav>
        );
    }
}

export default About;

// app là cái chính, bao bọc các components nhỏ ở bên trong