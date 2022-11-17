import React, { Component } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import NotFound from './Components/NotFound'

const router = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/about',
        exact : false,
        main : () => <About />
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound />
    }
]

export default router