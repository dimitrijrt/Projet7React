import img from '../../assets/images/Image-source2.png';
import './Apropos.scss';
import Collapse from "../../components/Collapse/Collapse";


function Apropos() {

    const data = [
        {
            title: 'Fiabilité',
            description: 'Les annonces postées sur Kasa grantissent une fiabilité totale.Les photos sont conformes aux logments et toutes les informations sont régulièrements vérifiées par nos équipes'
        },
        {
            title: 'Respect',
            description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        },        {
            title: 'Service',
            description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },        {
            title: 'Sécurité',
            description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        },
    ]

  return (
    <div className='cardpropos'>
       <img src={img} alt="photo" className="image"  />
       <div className='collapse2'> 
        {data.map((item, index) => (
            <Collapse title={item.title} description={item.description} key={index}/>
        ))}
        </div>
    </div>
  )
}

export default Apropos