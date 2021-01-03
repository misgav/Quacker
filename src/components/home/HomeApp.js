import Quack from './Quack.js'
import React,{Component} from 'react'

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            data: []
        }
        console.log("READY")
        const quakcsElement = document.getElementById("quacks")
        const xhr = new XMLHttpRequest()
        const method = 'GET'
        const url = '/quacks'
        const responseType = 'json'

        xhr.responseType = responseType
        xhr.open(method,url)
        xhr.onload = () => {
            const serverResponse = xhr.response
            //quakcsElement.innerText = ""
            serverResponse.response.forEach(element => {
                //quakcsElement.innerHTML += quackElement(element)
                var joined = this.state.data.concat([{element}]);
                //console.log(joined)
                this.setState({data:joined})
            });
        }
        xhr.send()
    }

    componentDidMount() {
        //something here
    }

    render() {
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
};

export default App;