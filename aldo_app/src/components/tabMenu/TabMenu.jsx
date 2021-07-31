import { NavLink } from 'react-router-dom'
import './TabMenu.css'

const TabMenu = ({show}) => {
    return (
        <div 
            className="tabMenu" 
            style ={{transform: show ? 'translateY(0)' : 'translateY(-90vh)',}}
        >
            <NavLink to='/' className="span" activeClassName="spanAktif">
                Home
            </NavLink>

            <NavLink to='/posting' className="span" activeClassName="spanAktif">
                Post
            </NavLink>

            <NavLink to='/portofolio' className="span" activeClassName="spanAktif">
                Portofolio
            </NavLink>

            <NavLink to='/about' className="span" activeClassName="spanAktif">
                About
            </NavLink>
            
        </div>
    )
}

export default TabMenu
