import { Link } from 'react-router-dom';

export default function NJSoftwaresPage() {
  return (
    <div className="fix-header fix-sidebar">
      {/* Preloader */}
      <div className="preloader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
        </svg>
      </div>
      {/* Main wrapper */}
      <div className="error-page" id="wrapper">
        <div className="error-box">
          <div className="error-body text-center">
            <h1 style={{ fontSize: '40px' }}>NJ Softwares Worldwide</h1>
            <h3 className="text-uppercase">Contact</h3>
            <p className="text-muted m-t-30 m-b-30">+92-333-7596992</p>
            <Link className="btn btn-info btn-rounded waves-effect waves-light m-b-40" to="/">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}