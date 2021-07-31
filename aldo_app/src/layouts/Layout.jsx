import './Layout.css';
import Navbar from '../components/navbar/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Contact from '../pages/contact/Contact';
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import Footer from '../components/footer//Footer'

import Login from '../pages/login/Login';
import { useStateValue } from '../config/stateProvider';
import Hoby from '../pages/hoby/Hoby';
import Portofolio from '../pages/portofolio/Portofolio';
import ChatPage from '../pages/chat/ChatPage';
import Chat from '../components/Chat/chat/Chat';
import Sidebar from '../components/Chat/sidebar/Sidebar';

const Layout = () => {
  const [ {user}, dispatch ] = useStateValue()   

    return (
      <div className="app">
  
        {!user ? (
          <Login/>
        ) : (
          
            <BrowserRouter>
    
            <Navbar/>
            {/* <Sidebar/> */} 
            {/* style={{ marginTop : "10vh" }} */}
            <main className="layout"  > <>
              <Switch>

                <Route path="/posting">
                  <Hoby/>
                </Route>

                <Route path="/rooms/:roomId">
                  <Chat/>
                </Route>

                <Route path="/rooms/">
                  <Sidebar/>
                </Route>

                <Route path="/portofolio">
                  <Portofolio/>
                </Route>

                <Route path="/about">
                  <About/>
                </Route>

                <Route path="/">
                  <Home/>
                </Route>
 
              </Switch>
              </>
            </main>
              {/* <Footer/> */}
    
            </BrowserRouter>
    
    
          
        ) }
    </div>
    )
}

export default Layout;
