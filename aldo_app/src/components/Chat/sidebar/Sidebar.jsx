import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { IconButton, Avatar } from '@material-ui/core';
import {   BarChartOutlined, FormatListBulleted, KeyboardBackspace, Search, Telegram, } from '@material-ui/icons';
import SidebarChat from '../sidebarChat/SidebarChat';
import {useStateValue} from '../../../config/stateProvider'
import db from '../../../config/firebase';

const Sidebar = () => {

    const [rooms, setRooms] = useState([])
    const [ {user}, dispatch ] = useStateValue()

    useEffect( () => {
        const unsubscribe = db.collection('rooms')

        db.collection('rooms').onSnapshot((snapshot) => 
            setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            ))

            return () => {
                unsubscribe()
            }
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebarHeader">
                <div className="sidebarHeaderLeft">
                    <IconButton>
                        <KeyboardBackspace/>
                    </IconButton>
                    <h4>Chat</h4>        
                </div>

                <div className="sidebarHeaderRight">
                    <IconButton>
                        <FormatListBulleted/>
                    </IconButton>

                    <IconButton>
                        <Telegram/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebarSearch">
                <div className="sidebarSearchContainer">
                    <Search className="sidebarSearchIcon"/>
                    <input type="text" />
                </div>
                    <BarChartOutlined/>
            </div>
            <div className="sidebarChats">
                {rooms.map((room) => (
                    <SidebarChat
                        key={room.id}
                        id={room.id}
                        name={room.data.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
