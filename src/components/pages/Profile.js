import Quack from '../layout/Quack.js'
import Form from '../layout/Form.js'
import {getAllNewQuacks} from '../functions'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class Profile extends Component {

    constructor(){
        super()
        this.state = {
            data:[]
        }
        //this.addQuack = this.addQuack.bind(this)
    }

    addQuack = (ref) => {
        const joined = this.state.data.concat([{ref}])
        this.setState({data:joined})
    }

    render(){
        if (this.state.data.length>0){
            return(
                <div>
                    <Form sendData={this.addQuack}/>
                    <div id="quacks" className="container-fluid">
                        {this.state.data.map((elmt, index) =>
                            <Quack 
                            key={index}
                            id={elmt.element.id}
                            likes={elmt.element.likes}
                            content={elmt.element.content}/>
                        )}
                    </div>
                </div>
            );
         }
        return <div><Form/></div>
    }
}

export default Profile;