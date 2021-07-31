import React, { useState } from 'react'
import db, { storage } from '../../config/firebase'
import firebase from 'firebase'
import './Upload.css'

const Upload = ({show}) => {

    const [caption, setCaption] = useState(null)
    const [port, setPort] = useState(0)
    // const [video, setVideo] = useState(0)
    const [progress, setProgress] = useState('')

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setPort(e.target.files[0])
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`port/${port.name}`).put(port)
        
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress(progress)
            },
                (error) => {
                    alert(error.message)
                },
            () => {
                storage
                .ref('port')
                .child(port.name)
                .getDownloadURL()
                .then(url => {
                    // post image inside db
                    db.collection('portofolio').add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        portUrl: url,
                    })

                    setProgress(0)
                    setCaption("")
                    setPort(null)
                })
            }
        )
    
    }

    

    return (
        <div className="uploadPort" style={{
            display : show ? 'flex' : 'none',
        }}>
            <h2>Upload Portofolio</h2>

            <progress 
                className="uploadProgress"
                value={progress}
                max="100"
            />

            <input 
                className="inputCaption"
                type="text"
                placeholder="Caption"
                onChange={ e => setCaption(e.target.value) }
                value={caption}
            />

            <input 
                // id="upload"
                type="file"
                className="inputFile"
                onChange={handleChange}
            />

            <button 
                className="uploadButton"
                onClick={handleUpload}
            >
                Upload
            </button>

            
        </div>
    )
}

export default Upload
