import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav id="nav" className="navbar top-navbar navbar-expand-md navbar-light">
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <img src="/img/SNkjp.jpeg" alt="logo" style={{ height: 80, width: 160, marginTop: -10 }} />
          </Link>
          <div className="nav-collapse"><span></span></div>
        </div>
        <ul className="main-nav nav navbar-nav navbar-right">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#registration">Registrations</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#whyUs">Why Us?</a></li>
          <li><a href="#team">Partners</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}