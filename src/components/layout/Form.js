import React,{Component} from 'react'
import {CSRFToken} from '../functions'

class Form extends Component{
    render(){
        return(
            <div className="row">
                <div className='col-10 row mb-3 col-md-4 mx-auto'>
                    <h1> Welcome to Quacker </h1>   
                    <form className="form" method="POST" action="/forms/">
                        <CSRFToken/>
                        <input type="hidden" value="/profile/" name="next"/>
                        <textarea required="required" className="form-control" name="content" placeholder="Whats happening?"></textarea>
                        <br/>
                        <button type="submit" className="btn btn-primary">Quack</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;

