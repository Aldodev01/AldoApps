import './Portofolio.css'
import { useEffect, useState } from 'react'
import PostPort from '../../components/uploadPortofolio/PostPort'
import db from '../../config/firebase'
import AddAPhotoIcon from '@material-ui/icons/AddAPhotoOutlined'
import Upload from '../../components/uploadPortofolio/Upload'


const Portofolio = () => {

    const [addPort, setAddPort] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect( () => {
        db.collection('portofolio').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id : doc.id,
                post : doc.data()
            })))
        })
    }, [] )

    return(
        <div className="portofolio">
                <h1>Portofolio Saya</h1>

            <div className="portUpload">
                <Upload show={addPort}/>

                <AddAPhotoIcon onClick={() => {
                    setAddPort(!addPort)}}
                    style={{
                        position : 'fixed',
                        color : 'blue',
                        bottom : 0,
                        marginBottom : '30px',
                        fontSize : '2rem',
                        zIndex : '10'
                    }}    
                />
            </div>

           <div className="row">

                {
                    posts.map(({id, post}) => (
                        <PostPort
                            key={id}
                            caption={post.caption}
                            portUrl={post.portUrl}
                        />
                    ))
                }

           </div>
            
        </div>
    )
}

export default Portofolio