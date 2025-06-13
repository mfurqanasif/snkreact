import React, { useState } from "react";

function DeveloperInfoModal({ onClose }) {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(30, 41, 59, 0.85)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      animation: "fadeIn 0.3s"
    }}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .dev-modal-content {
            animation: popIn 0.4s;
          }
          @keyframes popIn {
            0% { transform: scale(0.7); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .dev-modal-btn:hover {
            background: #0d47a1;
            color: #fff;
            box-shadow: 0 2px 8px rgba(30,41,59,0.15);
          }
        `}
      </style>
      <div className="dev-modal-content" style={{
        background: "linear-gradient(135deg, #fff 70%, #e3f2fd 100%)",
        padding: "2.5rem 2rem 2rem 2rem",
        borderRadius: "18px",
        maxWidth: "420px",
        width: "90%",
        textAlign: "center",
        boxShadow: "0 8px 32px rgba(30,41,59,0.25)",
        position: "relative"
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            background: "transparent",
            border: "none",
            fontSize: "1.7rem",
            color: "#1976d2",
            cursor: "pointer",
            fontWeight: "bold"
          }}
          aria-label="Close"
        >
          ×
        </button>
        <img
          src="/a/../../PVS.jpeg"
          alt="Developer Logo"
          style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            marginBottom: 18,
            boxShadow: "0 2px 8px rgba(30,41,59,0.10)"
          }}
        />
        <h2 style={{
          color: "#1976d2",
          fontWeight: 700,
          marginBottom: 8,
          fontSize: "2rem",
          letterSpacing: "1px"
        }}>
          PropVenture Softwares
        </h2>
        <div style={{ color: "#374151", fontSize: "1.1rem", marginBottom: 18 }}>
          <p>Website developed and maintained by <b>PropVenture Softwares</b>.</p>
          <p>
            <span style={{ fontWeight: 500 }}>Contact:</span> <a href="tel:+923123158944" style={{ color: "#1976d2", textDecoration: "underline" }}>+92-312-3158944</a>
          </p>
        </div>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="dev-modal-btn"
          style={{
            display: "inline-block",
            background: "#1976d2",
            color: "#fff",
            padding: "0.7rem 2.2rem",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "1.1rem",
            textDecoration: "none",
            transition: "background 0.2s, color 0.2s, box-shadow 0.2s"
          }}
        >
          Website Comming Soon
        </a>
      </div>
    </div>
  );
}

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer id="footer" className="sm-padding bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-logo">
                <a href="/"><img src="/img/IMG_2908.png" alt="logo" /></a>
              </div>
              <ul className="footer-follow">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61553818818004&mibextid=9R9pXO">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                </li>
              </ul>
              <div className="footer-copyright">
                <p>
                  Copyright © 2023. All Rights Reserved by S.N.K Enterprises.
                  <span
                    style={{
                      color: "#1976d2",
                      fontWeight: 600,
                      cursor: "pointer",
                      marginLeft: 8,
                      fontSize: "1.1rem",
                      textDecoration: "underline",
                      letterSpacing: "0.5px"
                    }}
                    onClick={() => setShowModal(true)}
                    onMouseOver={e => e.target.style.color = "#0d47a1"}
                    onMouseOut={e => e.target.style.color = "#1976d2"}
                  >
                    Developed by NJ Softwares Worldwide
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {showModal && <DeveloperInfoModal onClose={() => setShowModal(false)} />}
    </>
  );
}
