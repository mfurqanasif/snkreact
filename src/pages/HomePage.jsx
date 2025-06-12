import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {

   useEffect(() => {
    // Initialize Owl Carousel for #about-slider after component mounts
    if (window.$ && window.$('#about-slider').owlCarousel) {
      window.$('#about-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
      });
    }
  }, []);
  return (
    <>
      <Header />
      {/* Header Section */}
      <header id="home">
        <div className="bg-img" style={{ backgroundImage: "url('/img/background01.jpg')" }}>
          <div className="overlay"></div>
        </div>
        <div className="home-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div className="home-content">
                  <h1 className="white-text">We're your dedicated partner</h1>
                  <p className="white-text">
                    in efficient goods transport solutions. Specializing in seamless material delivery for businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* About Section */}
      <div id="about" className="section md-padding">
        <div className="container">
          <div className="row">
            <div className="section-header text-center">
              <h2 className="title">
                We are S.N.K Enterprises, where connectivity meets reliability, and your success is our destination.
              </h2>
            </div>
            <div className="col-md-4">
              <div className="about">
                <i className="fa fa-check"></i>
                <h3>Who Are We</h3>
                <p>We are a dynamic and forward-thinking goods transport company committed to redefining industry standards and delivering unparalleled logistics solutions. With a passion for excellence and a customer-centric approach, we stand as a reliable partner for businesses seeking seamless and efficient transportation services.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about">
                <i className="fa fa-check"></i>
                <h3>Vision Statement</h3>
                <p>At S.N.K, we aspire to redefine the standards of excellence in the goods transport industry. Our vision is to be recognized as the foremost choice for reliable, efficient, and innovative transportation solutions. We envision a future where seamless connectivity and sustainability converge, empowering businesses and communities to thrive through our commitment to excellence.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about">
                <i className="fa fa-check"></i>
                <h3>Mission Statement</h3>
                <p>Our mission is to deliver unparalleled transportation services that exceed the expectations of our clients. We are dedicated to providing a comprehensive range of logistics solutions characterized by reliability, timeliness, and sustainability. Through continuous innovation and a customer-centric approach, we aim to optimize supply chains and foster economic growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us */}
      <div id="whyUs" className="section md-padding bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-header">
                <h2 className="title">Why Choose Us</h2>
              </div>
              <p>S.N.K Enterprises has strong plans in pipeline for the future which will strength existing business operation and will also create more diversification to make greater impact on industry and country. Our mission is fueled by a passion for excellence, integrity, and social responsibility. We strive to build lasting partnerships with our clients, employees, and stakeholders, fostering a culture of teamwork and continuous improvement. By embracing cutting-edge technologies and best practices, we are committed to being a driving force in the evolution of the goods transport industry, creating value for all those we serve.</p>
              <div className="feature"><i className="fa fa-check"></i><p>Well Balanced.</p></div>
              <div className="feature"><i className="fa fa-check"></i><p>Your Premier Partner.</p></div>
              <div className="feature"><i className="fa fa-check"></i><p>Loyal to Principles and Clients.</p></div>
              <div className="feature"><i className="fa fa-check"></i><p>National Presence.</p></div>
            </div>
            <div className="col-md-6">
              <div id="about-slider" className="owl-carousel owl-theme">
                <img className="img-responsive" src="/img/1.jpg" alt="" />
                <img className="img-responsive" src="/img/2.jpg" alt="" />
                <img className="img-responsive" src="/img/3.jpg" alt="" />
                <img className="img-responsive" src="/img/4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Numbers */}
      <div id="numbers" className="section sm-padding">
        <div className="bg-img" style={{ backgroundImage: "url('/img/background02.jpg')" }}>
          <div className="overlay"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-xs-6">
              <div className="number">
                <i className="fa fa-handshake-o"></i>
                <h3 className="white-text"><span className="counter">Synergy</span></h3>
              </div>
            </div>
            <div className="col-sm-4 col-xs-6">
              <div className="number">
                <i className="fa fa-leaf"></i>
                <h3 className="white-text"><span className="counter">Nurture</span></h3>
              </div>
            </div>
            <div className="col-sm-4 col-xs-6">
              <div className="number">
                <i className="fa fa-trophy"></i>
                <h3 className="white-text"><span className="counter">Kaizen (Continuous Improvement)</span></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <div id="testimonial" className="section md-padding">
        <div className="bg-img" style={{ backgroundImage: "url('/img/back2.jpg')" }}>
          <div className="overlay"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <p className="white-text" style={{ fontSize: 25, textAlign: "center" }}>
                Connecting Possibilities, Delivering Certainties.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio / Partners */}
      <div id="registration" className="section md-padding bg-grey">
        <div className="container">
          <div className="row">
            <div className="section-header text-center">
              <h2 className="title">Our Business Partners</h2>
            </div>
            <p>Forging Success Together: Nurturing Meaningful Collaborations with Our Valued Business Partners.</p>
            <div className="col-md-6 col-xs-6 work">
              <img className="img-responsive" src="/img/awan.jpg" alt="" />
              <div className="overlay"></div>
              <div className="work-content">
                <span>Trusted Collaborations: Our Valued Business Partnership</span>
                <h3>AWAN TRADING CO (PVT) LTD</h3>
              </div>
            </div>
            {/* Add more partners as needed */}
          </div>
        </div>
      </div>
      {/* Contact */}
      <div id="contact" className="section md-padding">
        <div className="container">
          <div className="row">
            <div className="section-header text-center">
              <h2 className="title">Get in touch</h2>
            </div>
            <div className="col-sm-4">
              <div className="contact">
                <i className="fa fa-phone"></i>
                <h3>Phone</h3>
                <p>+92 333-7944410</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="contact">
                <i className="fa fa-envelope"></i>
                <h3>Email</h3>
                <p>snkenterprises.int@gmail.com</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="contact">
                <i className="fa fa-map-marker"></i>
                <h3>Address</h3>
                <p>Plot No C-17-C 24th Commercial Street, DHA Phase 2 EXT, Karachi, Pakistan</p>
              </div>
            </div>
            <div className="col-md-8 col-md-offset-2">
              <form className="contact-form">
                <input type="text" name="name" className="input" placeholder="Name" />
                <input type="email" name="email" className="input" placeholder="Email" />
                <input type="text" name="subject" className="input" placeholder="Subject" />
                <textarea className="input" name="message" placeholder="Message"></textarea>
                <button className="main-btn" type="submit">Send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}