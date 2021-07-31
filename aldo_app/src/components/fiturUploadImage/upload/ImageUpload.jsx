import React, { useState } from 'react'
import "./ImageUpload.css"
import db, { storage, } from '../../../config/firebase'
import firebase from 'firebase'


const ImageUpload = ({show}) => {

    const [caption, setCaption] = useState(null)
    const [image, setImage] = useState(0)
    const [progress, setProgress] = useState('')

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image)

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
                .ref('images')
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    // post image inside db
                    db.collection('posts').add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        imageUrl: url,
                    })

                    setProgress(0)
                    setCaption("")
                    setImage(null)
                })
            }
        )       
    } 

    return (
        <div className="imageUpload" style={{
            display : show ? 'flex' : 'none',
            // transform : show ? "translateY(0)" : "translateY(-65vh)"
        }}>
            <h1>Upload Image Kalian</h1>

            <progress 
                className="imageUploadProgress" 
                value={progress}
                max="100"
            />

            <input 
                className="imageInputCaption"
                type="text" 
                onChange={e => setCaption(e.target.value)}
                placeholder="Masukan Caption"
                value={caption}
            />
            <input 
                className="imageInputFile"
                id="upload"
                type="file" 
                onChange={handleChange}
            />
            
            <button  
                className="imageUploadButton"
                onClick={handleUpload}
                >
                Gasskeun
            </button>
        </div>
    )
}

export default ImageUpload
