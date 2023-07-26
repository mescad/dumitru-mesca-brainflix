import "./navbar.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import userPic from "../../assets/images/Mohan-muruge.jpg";
function NavBar() {
  return (
    <section className='navbar'>
      <img className="navbar__logo" src={logo} />
      <div className='navbar__group'> 
      <input className="navbar__search" name="search" placeholder="Search" />
      
      <img className="navbar__avatar navbar__avatar--mobile" src={userPic} />
      </div>
      <button className="navbar__button">Upload</button>
    
      <img className="navbar__avatar navbar__avatar--tablet" src={userPic} />
    </section>
  );
}

export default NavBar
