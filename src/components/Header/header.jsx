import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/LOGO.png';
import stylepage from './header.scss'
import {useNavigate} from "react-router-dom";







function Header() {
  const navigate = useNavigate();
  return (
    <Nav className='nav'>
    <div className="logo">
        <HeaderImage className='headerimg' src={logo} alt="freelance"  />
    </div>
      
      <div className='liens'>
        <div>
          <span className='styledlink' onClick={() => navigate(`/`)}><a href="/">Accueil</a></span>
        <hr className='hr'></hr>
        </div>
        <div>
      <span  className='styledlink' onClick={() => navigate(`/apropos`)}><a href="/apropos">A propos</a></span>
        <hr className='hr'></hr>
        </div>
      </div>
      
      
      
    </Nav>
    
    
      
    
      
   
    
   
   
  )
}

const Nav = styled.nav `

`



const HeaderImage = styled.img`
  
`



export default Header