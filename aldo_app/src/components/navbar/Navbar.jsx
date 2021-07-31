import React, { useState } from 'react'
import './Navbar.css'
import logoBrand from '../../assets/aldoApps.svg'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Mapicon from '../decorations/mapIcon/Mapicon';
import {useStateValue} from '../../config/stateProvider'
import { Avatar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import TabMenu from '../tabMenu/TabMenu';


const Navbar = () => {

    const [ {user}, dispatch ] = useStateValue()

    const [ showTabMenu, setShowTabMenu] = useState(false)


    return ( <>
        <nav className="navbar" style={{opacity : showTabMenu ? 1 : 0.9}}>


            <img src={logoBrand} alt="" className="navbarBrand"/>

                    <TabMenu show={showTabMenu}/>

                    <KeyboardArrowDownIcon className="navbarArrow" onClick={() => {
                        setShowTabMenu(!showTabMenu)
                    }} />
                {/* <Mapicon/> */}
            <div className="navbarMenu">

                <ul className="navbarUlMenu">
                    <NavLink to="/" className="navbarLink">HOME</NavLink>
                    <NavLink to="/posting" className="navbarLink">POST</NavLink>
                    <NavLink to="/portofolio" className="navbarLink">PORTOFOLIO</NavLink>
                    <NavLink to="/about" className="navbarLink">ABOUT</NavLink>
                </ul>
                
            </div>
                <div className="navbarUser">
                    <Avatar src={user?.photoURL}/>
                    <h4>{user?.email}</h4>
                </div>


        </nav>
    </>
    )
}

export default Navbar
