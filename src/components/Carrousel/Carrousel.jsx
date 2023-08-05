import Arrowlft from "../../assets/icons/Arrowlft";
import Arrowright from "../../assets/icons/Arrowright";
import { useState } from "react";
import data from '../../location.json';
import { useParams } from 'react-router-dom';
import style from './Carrousel.scss'



const Carrousel = () => {
    const [index, setIndex] = useState(1); 
    const {id} = useParams();
    const location = data.find((item) => item.id === id);
    const length = (location.pictures.length);
    const [indeximg, setIndeximg] = useState(0);

    const prevSlide = () => {
		const newIndex = index ;
        setIndex(newIndex  === 1 ? length  : newIndex - 1);
        const newIndeximg = indeximg ;
        setIndeximg(newIndeximg === 0 ? length -1  : newIndeximg -1);
        
	};

    const handleNext = () => {
        const newIndex = index ;
        setIndex(newIndex === length   ? 1 : newIndex + 1 );
        const newIndeximg = indeximg ;
        setIndeximg(newIndeximg === length  -1 ? 0 : newIndeximg + 1) 
        
        };

    if (location.pictures.length === 1 ) {
        return (
            <span className="caontainmg"><img className='img' src={location.pictures[indeximg]} alt="freelance"/></span>
        )
    }

    return (
        <div>
           <img className='img' src={location.pictures[indeximg]} alt="freelance"/>
             <span className="arrleft" onClick={prevSlide}>
             <Arrowlft  onClick={prevSlide}/>
             </span>
             <span className="arright"  onClick={handleNext}>
             <Arrowright  />
             </span>
            <p className="numero">{index}/{length}</p>
        </div>
        
    )
}

export default Carrousel;