
import styled from 'styled-components'
import logo from '../../assets/images/Image-source1.png'
import style from '../../style.scss'
import {useNavigate} from "react-router-dom";
import data from '../../location.json';
import stylepage from './home.scss'




function Home() {
    const navigate = useNavigate();
    const locationFiltered = data;

  return (
    <div className='home'>


       <img className="homeimg" src={logo} alt="freelance"  />
       <h1 className='titlekasa'>Chez vous, et partout ailleurs</h1>
       <div className='cardcontain'>
           {locationFiltered.map((location, index) => (
               <div className='card' key={index} onClick={() => navigate(`/location/${location.id}`)}>
                  <img className='images' src={location.pictures[0]}></img>
                   <span className='titrehome'>{location.title}</span>
               </div>
           ))}
       </div>
    </div>
  )
    
    
}



export default Home
