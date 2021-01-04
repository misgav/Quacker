import Quack from '../layout/Quack.js'
import React,{Component} from 'react'
import {getAllNewQuacks} from '../functions.js'

class Home extends Component {

    constructor(){
        super()
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        var len = this.state.data.length
        getAllNewQuacks(this,len,len+5)
    }

    render() {
        if (this.state.data.length>0){
            return(
                <div id="quacks" className="container-fluid">
                    {this.state.data.map((elmt, index) =>
                        <Quack 
                        key={index}
                        id={elmt.element.id}
                        likes={elmt.element.likes}
                        content={elmt.element.content}/>
                    )}
                </div>
            );
         }
        return <div id="quacks" className="container-fluid"></div>
    }
};

export default Home;