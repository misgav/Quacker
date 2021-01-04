import Quack from '../layout/Quack.js'
import Form from '../layout/Form.js'
import {getAllNewQuacks} from '../functions'
import React,{Component} from 'react'

class Profile extends Component {

    constructor(){
        super()
        this.state = {
            data:[]
        }
        //this.formCreateQuackSubmit = this.formCreateQuackSubmit.bind(this)
    }

    /*formCreateQuackSubmit(event) {
        //getAllNewQuacks(this)
        //this.forceUpdate()
        var len = this.state.data.length
        getAllNewQuacks(this,len,len+1)
    }*/

    componentDidMount() {
        var len = this.state.data.length
        getAllNewQuacks(this,len,len+5)
    }

    render(){
        if (this.state.data.length>0){
            return(
                <div>
                    <Form/>
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