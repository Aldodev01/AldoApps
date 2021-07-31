import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import { useStateValue } from '../../config/stateProvider'
import './Profile.css'


const Profile = () => {

    const [ {user}, dispatch ] = useStateValue()

    return (
        <div className="profile">
                <Avatar src={user?.photoURL} enabled className="avatar"/>
            <div className="profileHeader">

                <h3><strong>{user?.displayName}</strong></h3>
                <p>{user?.email}</p>
            </div>

            <div className="profileContainer">
                <p>{user?.phoneNumber}</p>
            </div>
        </div>
    )
}

export default Profile
