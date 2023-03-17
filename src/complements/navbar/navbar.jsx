import { FiInstagram } from 'react-icons/fi';
import { FaFacebookSquare } from 'react-icons/fa';
import { GiJewelCrown } from 'react-icons/gi';


export const Navbar = () => {
  return (
    <section className="navbar">
      <p className="welcome-message"><GiJewelCrown /> Roca Amatista </p>
      <ul className="Link-list">
        <li><a href="https://www.instagram.com/roca.amatista/" target="_blanck"><FiInstagram /></a></li>
        <li><a href="https://www.facebook.com/roca.amatista" target="_blanck"><FaFacebookSquare /></a></li>
      </ul>
    </section>
  )
}



export default Navbar
