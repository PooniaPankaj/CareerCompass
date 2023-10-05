import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footercontainer">
        <div className="footerrow">
            <div className="footer-col">
                <h4>company</h4>
                <ul>
                    <li><Link to="#">about us</Link></li>
                    <li><Link to="#">our services</Link></li>
                    <li><Link to="#">privacy policy</Link></li>
                    <li><Link to="#">affiliate program</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>get help</h4>
                <ul>
                    <li><Link to="#">FAQ</Link></li>
                    <li><Link to="#">Our Values</Link></li>
                    <li><Link to="#">Alumni connect</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Interview Experience</h4>
                <ul>
                    <li><Link to="#">Microsoft</Link></li>
                    <li><Link to="#">Apple</Link></li>
                    <li><Link to="#">Google</Link></li>
                    <li><Link to="#">Meta</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>follow us</h4>
                <div className="footersocial-links">
                    <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                    <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
