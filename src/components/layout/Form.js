import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {CSRFToken} from '../functions'

class Form extends Component{

    constructor(props){
        super(props)
        this.formCreateQuackSubmit = this.formCreateQuackSubmit.bind(this)
    }
    
    formCreateQuackSubmit(event) {
        event.preventDefault()
        const myForm = event.target
        const myData = new FormData(myForm)
        const method = myForm.getAttribute("method")
        const alert = document.getElementById("quack-form-error")
        const url = myForm.getAttribute("action")
        const xhr = new XMLHttpRequest()
        const responseType = 'json'
        xhr.responseType = responseType
        xhr.open(method,url)
        xhr.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest")
        xhr.setRequestHeader("X-Requested-with","XMLHttpRequest")
        xhr.onload = () => {
            const serverResponse = xhr.response

            if (xhr.status===201){

                alert.setAttribute("className","d-none alert alert-danger")
                alert.innerText =  ""

                //console.log(this.props,this.props.sendData)
                //this.props.sendData(serverResponse)
                myForm.reset()
            }
            else if (xhr.status===400){
                console.log(serverResponse.content[0])
                alert.setAttribute("className","d-block alert alert-danger")
                alert.innerText = serverResponse.content[0]
            }
            else if (xhr.status===401 || xhr.status===403){
                window.alert("Please login to post")
                window.location.href = "/login"
            }
            else if (xhr.status===500){
                window.alert("There was a server error, please try again")
            }
        }
        xhr.onerror = () => {
            window.alert("something went wrong, please try again.")
        }
        xhr.send(myData)
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener('submit', this.formCreateQuackSubmit);
    }
    
    componentWillUnmount() {
        ReactDOM.findDOMNode(this.state.form).removeEventListener('submit', this.formCreateQuackSubmit);
    }

    render(){
        return(
            <div className="row">
                <div className='col-10 row mb-3 col-md-4 mx-auto'>
                    <h1> Welcome to Quacker </h1>   
                    <form className="form" method="POST" action="/forms/">
                        <CSRFToken/>
                        <div className="d-none alert alert-danger" id = "quack-form-error"></div>
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

