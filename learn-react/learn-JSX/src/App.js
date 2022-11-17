import React, { Component } from 'react'
import './App.css';

class App extends Component {

    // hiển thị bằng function
    showInfo = (object) => {
        if (object.status === true)
        {
            return <h3>
                        id : { object.id } <br />
                        name : { object.name } <br />
                        price : { object.price } VNĐ <br />
                        status : { object.status ? 'Active' : 'Pending' }
                    </h3>
        }
    }

    render() {

        // được phép tạo biến ở trong đây, còn ngoài render đẻ tạo các props, state, và các function
        var a = 5;
        var b = 6;
        var name = "huy 123"
        var object = {
            id : 1,
            name : 'iphone xsmax',
            price : 10000,
            status : true
        }

        var users = [
            {
                id : 1,
                name : "user 1",
                age : 18
            },
            {
                id : 2,
                name : "user 2",
                age : 19
            },
            {
                id : 3,
                name : "user 3",
                age : 20
            },
        ]

        var elements = users.map((users, index) => {
            return  <div key={ users.id }>
                        <h3>Ho ten : { users.name }</h3>
                        <p>Tuoi : { users.age }</p>
                    </div>
        })

        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand" href="#">Title</a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                    </ul>
                </nav>
                <div className="ml-30">
                    <h2>
                        a : { a } <br />
                        b : { b } <br />
                        a + b = { a + b } <br />
                        {/* hiển thị giá trị của a */}
                        name : { name }
                        {/* hiển thị giá trị của name */}
                    </h2>
                    <br />
                    <h4>Hiển thị các object</h4>
                    {/* Hiển thị object */}
                    {/* gọi function để hiển thị  */}
                    { this.showInfo(object) }
                    <br />

                    <h2>Viết kiểu biến</h2>

                    { elements }

                </div>
            </div>
        );
    }
}

export default App;

// app là cái chính, bao bọc các components nhỏ ở bên trong