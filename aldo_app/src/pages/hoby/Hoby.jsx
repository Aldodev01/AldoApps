
import './Hoby.css'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { useEffect, useState } from 'react';
import ImageUpload from '../../components/fiturUploadImage/upload/ImageUpload';
import Post from '../../components/fiturUploadImage/post/Post';
import db from '../../config/firebase';
import image3d1 from '../../assets/3d1.png'
import image3d2 from '../../assets/3d2.png'
import Navbar from '../../components/navbar/Navbar';
import Profile from '../../components/profile/Profile';


const Hoby = () => {
    const [addPhoto, setAddPhoto] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect( () => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id : doc.id,
                post : doc.data()
            })))
        })
    }, [])


    return(<>
        
        
        <main className="hoby">
                <div className="hobyProfile">
                    <Profile/>
                </div>  

                <div className="img1">
                    <img src={image3d2} alt=""/>
                </div>

                <div className="hobyUpload">

                    <ImageUpload show={addPhoto} />
                    
                    <AddAPhotoIcon 
                        onClick = { () => {setAddPhoto(!addPhoto)}}
                        style={{
                            position : 'fixed',
                            color : 'white',
                            bottom : 0,
                            marginBottom : '30px',
                            fontSize : '2rem',
                            zIndex : '10'
                        }}
                        />

                </div>

                

                <div className="img2">
                    <img src={image3d1} alt=""/>
                </div>

                <div className="hobyPosts">
                        {
                            posts.map(({id, post}) => (
                                <Post
                                    className=""
                                    key={id}
                                    caption={post.caption}
                                    imageUrl={post.imageUrl}
                                />
                            ))
                        }
                </div>
           
            

                    
               
                
           
                

                {/* <Post
                    ava="https://images.unsplash.com/photo-1612338719430-d3727f009b21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"  
                    username="Aldodevv"
                    caption=" : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, impedit nemo nam cumque quos quis pariatur corporis nulla iusto nihil unde exercitationem, expedita illo, in excepturi adipisci quae suscipit. Saepe?" 
                    imageUrl="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                /> */}
            

            {/* <img src={image3d1} alt="" className="d31"/> */}
            
        </main>

    </>)
}

export default Hoby