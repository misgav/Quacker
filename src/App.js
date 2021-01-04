import Home from './components/pages/Home.js'
import Profile from './components/pages/Profile.js'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React,{Component} from 'react'

const SERVER = "127.0.0.1:8000"

class App extends Component{
    render(){
        return(
            <div className="App">
               <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/home/" exact component={() => <Home/>} />
                        <Route exact path="/profile/" exact component={() => <Profile/>} />
                    </Switch>
                </Router>
            </div>
        );
    }
};

//<Route exact path="/profile/" exact component={() => <Profile/>} />

export default App;