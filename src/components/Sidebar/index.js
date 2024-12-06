import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from  '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className ="nav-bar">
        <Link className="logo" to='/'>
         <img src={LogoS} alt = "logo" />
         <img className="sub-logo" src={LogoSubtitle} alt = "logoMerda" />
        </Link>
     <nav>
        <NavLink exact = "true" activeClassName ='active' to='/'>
        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink exact = "true" activeClassName ='active' class='about-link' to='/about'>
        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink exact = "true" activeClassName ='active' to='/contact'>
        <FontAwesomeIcon icon={faEnvelope} className="contact-link" color='#4d4d4e' />
        </NavLink>
     </nav>
     <ul>
         <li>
            <a target='_blank' rel='noreferrer' href=''>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
         </li>
         <li>
            <a target='_blank' rel='noreferrer' href=''>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
         </li>
         <li>
            <a target='_blank' rel='noreferrer' href=''>
                <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
            </a>
         </li>
     </ul>
    </div>
)


export default Sidebar;