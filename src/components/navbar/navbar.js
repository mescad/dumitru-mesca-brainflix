import "./navbar.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import userPic from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <section className="navbar">
      <img alt="logo" className="navbar__logo" src={logo} />
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
    </section>
  );
}

export default NavBar;
