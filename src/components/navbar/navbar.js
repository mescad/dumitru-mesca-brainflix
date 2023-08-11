import "./Navbar.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import userPic from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <section className="navbar">
      <Link className="navbar__logo--anchor" to='/'><img alt="logo" className="navbar__logo" src={logo} /></Link>
      <div className="navbar__content"> 
      <div className="navbar__group">
        <input className="navbar__search" name="search" placeholder="Search" />

        <img
          alt="avatar"
          className="navbar__avatar navbar__avatar--mobile"
          src={userPic}
        />
      </div>

      <Link className='navbar__button--anchor' to='upload'> <button className="navbar__button">UPLOAD</button></Link>

      <img
        alt="avatar"
        className="navbar__avatar navbar__avatar--tablet"
        src={userPic}
      />
      </div>
    </section>
  );
}

export default NavBar;
