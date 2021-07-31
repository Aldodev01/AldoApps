
import Card from '../../components/card/Card'
import './Home.css'
import img1 from "../../assets/vrPeople.svg"
import img2 from '../../assets/music.png'
import img3 from '../../assets/game.svg'
import { Face, Search } from '@material-ui/icons'


const Home = () => {
    return(
        <div className="home">

            <div className="homeHeader">
                <h1>Aldo Can be Search Yours</h1>
                <div className="homeSearch">
                    <div className="homeSearchContainer">        
                        <Search style={{ 
                                fontSize: 40, 
                                marginLeft: "20px",
                            }}
                                media="screen and (min-width: 500px) {
                                    
                                }"
                                    
                        />
                        <input type="text" className="homeInput"/>
                    </div>
                        <Face style={{ fontSize: 40, color: "white" }}/>
                </div>

                
            </div>
            
            <Card 
                judul="We make Fiction because We are Fiction"
                deskripsi="It lived us into being and it lives us still"
                pov1="VR IS"
                pov2="FICTION"
                img={img1}
            />

            <Card 
                judul="It Really Matters what You Listen to"
                deskripsi="Select music that will strengthen your spirit"
                pov1="MUSIC IS"
                pov2="NEVER FLAT"
                img={img2}
            />

            <Card 
                judul="Life Is More Fun If You Play Games"
                deskripsi="A Coward Talks To Everyone But You"
                pov1="GAME IS"
                pov2="RELAXATION"
                img={img3}
            />

        </div>
    )
}

export default Home