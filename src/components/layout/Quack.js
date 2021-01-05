import React from 'react'

function handleLiked(quack_id, count){
     
}

function Quack(prop){
    return (
    <div className="col-12 mb-3 col-md-10 mx-auto border rounded py-3" id={prop.id}>
        <p>{prop.content}</p>
        <div>
            <button className="btn btn-primary btn-small" onClick={handleLiked(prop.id,prop.likes)}>
                {prop.likes} Like
            </button> 
            <button className="btn btn-primary btn-small">Retweet</button>
            <button className="btn btn-primary btn-small">Comment</button>
            <button type="hidden" className="btn btn-primary btn-small">Delete</button>
        </div>
    </div>
    );
}

export default Quack;