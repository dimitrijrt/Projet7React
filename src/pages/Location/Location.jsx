import { useParams } from 'react-router-dom';
import data from '../../location.json'
import Card from '../../components/Card/card.jsx'
import Stars from "../../assets/icons/Stars"
import Carrousel from '../../components/Carrousel/Carrousel.jsx'
import Collapse from "../../components/Collapse/Collapse";

import style from './location.scss'




function Location() {
    const {id} = useParams();
    const location = data.find((item) => item.id === id);

    return (
        
        <div className='location'>
         
                <Carrousel />
           
             
            <div className='titrestars'>
                <div className='titre'>
                    <span className='titrelocation'>{location.title}</span>
                    <span className='lieulocation'>{location.location}</span>
                </div>
                 <div className='right'>
                    <span>{location.host.name}</span>
                    <img className="imghost" src={location.host.picture}/>
                 </div>
             </div>
             <div className='linkstars'>
                <div className='link'>

                         {location.tags.map((tag) => (
                        <span className='tagstyle'>{tag} </span>
                    ))}	
                </div>
                <div className='stars'>
                        <Stars/>
                        <Stars/>
                        <Stars/>
                    <span className='greystars'>
                        <Stars fill="#E3E3E3"/>
                        <Stars/> 
                    </span>
                                 
                    </div>
             </div>
             <div className='cardcontainloc'>
                <Collapse
                    title={"Description"}
                    description={location.description}
                />
                 <Collapse
                     title={"Equipements"}
                     description={location.equipments}
                 />

             </div>
        </div>
    )
}

export default Location