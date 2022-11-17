import React, { Component } from 'react'
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            txtName : '',
            txtPassword : '',
            txtDesc : '',
            sltGender : 1,
            language : 'anh',
            status : true
            // tên của state phải trùng với tên của name trong input
        }
    }

    onHandleChange = (event) => {
        // console.log(event)
        // console.log(event.target.value)
        // this.setState({
        //     username : event.target.value
        // })

        // bên trên là sử lý một form submit, nếu multi submit thì không xử lý đc

        // cách sử lý multi submit

        var target = event.target // target đến từng ô input
        var name = target.name // target từng name trong ô input
        // var value = target.value // target từng value

        // nếu không có checkbox có thể dùng target từng value, nếu có thì phải check xem nó thuộc kiểu dữ liệu gì nữa

        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name] : value
        })

    }

    onHandleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        // vì các giá trị của input đã lưu vào state rồi
    }

    render() {
        return (
            <div className="container mt-30">
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="panel panel-primary">
                              <div className="panel-heading">
                                    <h3 className="panel-title">Panel title</h3>
                              </div>
                              <div className="panel-body">
                                    {/* tạo form */}

                                    <form action="" method="POST" role="form" onSubmit = { this.onHandleSubmit } >

                                        {/* onSubmit để nhận giá trị của form */}

                                        <div className="form-group">
                                            <label>Username : </label>
                                            <input type="text"
                                                   className="form-control" 
                                                   name = 'txtName'
                                                   value = { this.state.txtName }
                                                   onChange = { this.onHandleChange }

                                                    // onChange để bắt sự kiện, sau khi bắt sự kiện nó sẽ cho một biến event, log nó thử trong hàn onHandleChange mà xem

                                            />


                                            <label>Password : </label>
                                            <input type="password"
                                                   className="form-control" 
                                                   name = 'txtPassword'
                                                   value = { this.state.txtPassword }
                                                   onChange = { this.onHandleChange }

                                                    // onChange để bắt sự kiện, sau khi bắt sự kiện nó sẽ cho một biến event, log nó thử trong hàn onHandleChange mà xem

                                            />

                                            <label>Mô tả : </label>
                                            <textarea name="txtDesc"
                                                id="input"
                                                className="form-control"
                                                rows="3"
                                                value = { this.state.txtDesc }
                                                onChange = { this.onHandleChange }
                                            >
                                            </textarea>
                                        </div>

                                        <select className="form-control" name="sltGender" value={ this.state.sltGender } onChange = { this.onHandleChange }>
                                            {/* có onChange thì phải có value để lấy giá trị */}
                                            <option value={0}>Nữ</option>
                                            <option value={1}>Nam</option>
                                        </select>
                                        <br></br>

                                        <label>Ngôn ngữ : </label>
                                        <div className="radio">
                                            <label>
                                                <input 
                                                    type="radio" 
                                                    name="language" 
                                                    value="anh" 
                                                    onChange = { this.onHandleChange }
                                                    checked = { this.state.language === "anh"}
                                                />
                                                Tiếng Anh
                                            </label><br />
                                            <label>
                                                <input 
                                                    type="radio" 
                                                    name="language" 
                                                    value="em" 
                                                    onChange = { this.onHandleChange }
                                                    checked = { this.state.language === "em"}
                                                />
                                                Tiếng Em
                                            </label>
                                        </div>

                                        <label>Status: </label>
                                        <div className="checkbox">
                                            <label>
                                                <input 
                                                    type="checkbox" 
                                                    name = "status"
                                                    value={ true }
                                                    onChange = { this.onHandleChange }
                                                    checked = { this.state.status === true }
                                                />
                                                Trạng thái
                                            </label>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Lưu lại</button>
                                        <button type="reset" className="btn btn-warning">Xóa</button>
                                    </form>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

// app là cái chính, bao bọc các components nhỏ ở bên trong