import React from 'react'
import './PostPort.css'

const PostPort = ({ portUrl, caption }) => {
    return (
        
        <span className="postPort">   
            <img src={portUrl} alt=""/>
                
                <div className="postText">
                    <h4>{caption}</h4>
                </div>
        </span>
        
    )
}

export default PostPort
