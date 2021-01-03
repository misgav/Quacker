import React from 'react'
function Quack(prop){
    return (
    <div id={prop.id}>
        <h1>{prop.content}</h1>
    </div>
    );
}

export default Quack;