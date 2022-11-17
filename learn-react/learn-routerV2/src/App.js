import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import NotFound from './Components/NotFound'
import Menu from './Components/Menu'
import router from './routes'

// custom link
{/* tách ra file cho dễ quản lý ( src/Menu ) */}

class App extends Component {

    showMenu = (router) => {
        var result = null
        if (router.length > 1) {
            result = router.map((router, index) => {
                return <Route key = {index} path={router.path} exact = { router.exact } component={router.main} />
            })
        }
        return result
    }
    
    render() {
        return (
            <Router>
                <div className="App">

                    {/* tách ra file cho dễ quản lý ( src/Menu ) */}
                    <Menu />

                    <Switch>
                        { this.showMenu(router)}
                        {/* <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route component={NotFound} /> */}
                    </Switch>
                    
                </div>
            </Router>

        );
    }
}

export default App;

// app là cái chính, bao bọc các components nhỏ ở bên trong