import App from './components/home/HomeApp.js'
import Navbar from './components/layout/Navbar'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <div>
        <Navbar/>
        <App/>
    </div>, document.getElementById("root"))
