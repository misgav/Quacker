import React from 'react'

const xhr = new XMLHttpRequest()
const method = 'GET'
const url = '/quacks'
const responseType = 'json'

function getAllNewQuacks(obj,start,end){
    xhr.responseType = responseType
    xhr.open(method,url)
    xhr.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest")
    xhr.setRequestHeader("X-Requested-with","XMLHttpRequest")
    xhr.onload = () => {
        const serverResponse = xhr.response
        //show me the first 20 newst quacks
        for (let i = start; i <= end; i++){
            let length = serverResponse.length
            if (serverResponse[length - i] != null){
                let element = serverResponse[length - i]
                var j = obj.state.data.concat([{element}]);
                obj.setState({data:j})
            }
        }
    }
    xhr.send()
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const CSRFToken = () => {
    var csrftoken = getCookie('csrftoken') || "";
    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
};

export {getAllNewQuacks,CSRFToken};