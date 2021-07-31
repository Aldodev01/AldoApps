import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import db from '../../../config/firebase'
import './SidebarChat.css'

const SidebarChat = ({addNewChat, id, name}) => {

    const [seed, setSeed] = useState('')

    useEffect ( () => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [] )

    const createChat = () => {
        const roomName = prompt("Siapa si yang pengen lu chat?")

        if(roomName) {
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} className="sidebarChatAvatar"/>
                <div className="sidebarChatInfo">
                    <h3>{name}</h3>
                    <p>Last Message</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarCreate">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
