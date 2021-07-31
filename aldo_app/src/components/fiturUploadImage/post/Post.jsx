import { Avatar, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import './Post.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import logoBrand from '../../../assets/logo512.svg'
import { useStateValue } from '../../../config/stateProvider'

const Post = ({ caption, ava, imageUrl }) => {

    const [like, setLike] = useState(false)
    const [{user}, dispatch] = useStateValue()

    return (
        <div className="post">
            <div className="postHeader">

                    <Avatar 
                        className="postAvatar"
                        alt=""
                        src={user?.photoURL}
                    />

                    <h4 className="postUsername" >{user?.displayName}</h4>
            </div>

            <img src={imageUrl} alt="" className="postImage"/>

            <div className="postIcon">

                    {like ? (
                            <IconButton style={{color: "aliceblue"}}>
                                <FavoriteIcon style={{cursor: "pointer"}} onClick={ (e) => setLike(false) }/>
                            </IconButton>
                        
                        ) : (
                            <IconButton style={{color: "aliceblue"}}>
                                <FavoriteBorderIcon style={{cursor: "pointer"}} onClick={ (e) => setLike(true) }/>
                            </IconButton>
                    )}
               
                    <IconButton style={{color: "aliceblue"}}>
                        <ShareIcon/>
                    </IconButton>
              
                    <IconButton style={{color: "aliceblue"}}>
                        <ClearAllIcon/>
                    </IconButton>
                
            </div>

            <h4 className="postTextCap">
                <strong>{user?.displayName} {" : "}</strong>
                {caption}
            </h4>
        </div>
    )
}

export default Post
