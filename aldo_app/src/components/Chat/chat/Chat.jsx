import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import db from '../../../config/firebase'
import { useStateValue } from '../../../config/stateProvider'
import firebase from 'firebase'
import { HelpOutline, InsertEmoticonOutlined, Mic, Telegram } from '@material-ui/icons'
import './Chat.css'

const Chat = ({ id }) => {

    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")
    const [roomName, setRoomName] = useState("")
    const {roomId} = useParams()
    const [messages, setMessages] = useState([])
    const [{user}, dispatch] = useStateValue()

    useEffect( () => {
        if (roomId) {
            db.collection("rooms")
              .doc(roomId)
              .onSnapshot((snapshot) => setRoomName(snapshot.data().name))

            db.collection("rooms")
              .doc(roomId)
              .collection('messages')
              .orderBy('timestamp', 'asc')
              .onSnapshot((snapshot) => (setMessages(snapshot.docs.map(doc => doc.data()))
              ))
        }
    }, [roomId] )

    useEffect( () => {
        setSeed(Math.floor(Math.random() * 5000 ))
    }, [] )

    const sendMessage = (e) => {
        e.preventDefault()
        console.log("You Typed >>>", input)

        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("")
    }

    return (
        <Link to={`/rooms/${id}`}>
        <div className="chat">
            <div className="chatHeader">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chatInfo">
                    <h3>{roomName}</h3>
                    <p>Last Seen at ...</p>
                </div>
               
                    <HelpOutline enabled className="helpIcon"/>
                
            </div>

            <div className="charRight">

            </div>

            <div className="chatBody">
                {messages.map((message) => (
                    <p className={`chatMessage ${true && "chatReciver"}`}>
                        <span className="chatName">{message.name}</span>
                        {message.message}
                        <span className="chatTimeStamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ) )}
            </div>

            <div className="chatFooter">
                <InsertEmoticonOutlined/>
                    <form>
                        <input 
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Masukan Pesan"
                        />
                        <button type="submit" onClick={sendMessage}>
                            <IconButton>
                                <Telegram/>
                            </IconButton>
                        </button>
                    </form>
                    <Mic/>
            </div>
        </div>
            
        </Link>
    )
}

export default Chat
