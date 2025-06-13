import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer" className="sm-padding bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-logo">
              <a href="/"><img src="/img/IMG_2908.png" alt="logo" /></a>
            </div>
            <ul className="footer-follow">
              <li><a href="https://www.facebook.com/profile.php?id=61553818818004&mibextid=9R9pXO"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
            <div className="footer-copyright">
              <p>
                Copyright © 2023. All Rights Reserved by S.N.K Enterprises.
                {/* Developed by <Link to="/njsoftwares" className="blue-link">NJ Softwares Worldwide</Link>*/}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
