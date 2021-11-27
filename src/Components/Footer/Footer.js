import React from "react";
import "./Footer.css";





function Footer() {
  return (
    //elements with class social-icon are only visible in mobile and elements with class
    // footer__links3 and footer__links4 get hidden at various breakpoints.
    <div className="footer">
      <div className="footer__content">
        <h3>Questions? Call 000-800-040-1843</h3>
        <div className="footer__links">
          <ul>
            <li><a className="social-icon" href="https://openconnect.netflix.com/en/faq/" style={{color:`grey`, textDecoration:`none`}} target="blank">FAQ</a></li>
            
            
            <li><a className="social-icon" href="www.youtube.com" style={{color:`grey`, textDecoration:`none`}}>INVESTOR RELATIONS</a></li>
            <li><a className="social-icon" href="www.youtube.com" style={{color:`grey`, textDecoration:`none`}}>WAYS TO WATCH</a></li>
            <li><a className="social-icon" href="www.youtube.com" style={{color:`grey`, textDecoration:`none`}}>PRIVACY</a></li>
           
            <li><a className="social-icon" href="www.youtube.com" style={{color:`grey`, textDecoration:`none`}}>SPEED TEST</a></li>
            <li><a className="social-icon" href="www.youtube.com" style={{color:`grey`, textDecoration:`none`}}>NETFLIX ORIGINALS</a></li>
          </ul>
          <ul>
            <li><a className="social-icon" href="https://help.netflix.com/" style={{color:`grey`, textDecoration:`none`}}>HELP CENTRE</a></li>
         
            <li><a className="social-icon" href="www.youtube.com" style={{color:`grey`, textDecoration:`none`}}>MEDIA CENTRE</a></li>
            
            <li><a className="social-icon" href="www.youtube.com" style={{color:`grey`, textDecoration:`none`}}>JOBS</a></li>
           
            <li><a className="social-icon" href="www.youtube.com" style={{color:`grey`, textDecoration:`none`}}>COOKIE PREFERENCES</a></li>
            
            <li><a className="social-icon" href="www.youtube.com" style={{color:`grey`, textDecoration:`none`}}>LEGAL NOTICE</a></li>
          </ul>
          <ul>
            <li><a className="social-icon" href="www.youtube.com" style={{color:`grey`, textDecoration:`none`}}>ACCOUNT</a></li>
            
            <li><a className="social-icon" href="https://help.netflix.com/en/contactus" style={{color:`grey`, textDecoration:`none`}}>CONTACT US</a></li>
          
            <li><a className="social-icon" href="www.youtube.com" style={{color:`grey`, textDecoration:`none`}}>INFORMATION</a></li>
           
            <li><a className="social-icon" href="www.youtube.com" style={{color:`grey`, textDecoration:`none`}}>PROGRAMS</a></li>
            
          </ul>
          <ul>
            <li>< a className="social" href="https://www.facebook.com/NetflixIN" target="blank" style={{color:`#3b5998`}}><i className="fab fa-facebook" style={{fontSize:`40px`}}/></a></li>
            <li>< a className="social" href="https://www.instagram.com/netflix/?hl=en" target="blank" style={{color:`#fccc63`}}><i className="fab fa-instagram" style={{fontSize:`40px`}}/></a></li>
            <li>< a className="social" href="https://twitter.com/netflixindia?lang=en" target="blank" style={{color:`#1DA1F2`}}><i className="fab fa-twitter" style={{fontSize:`40px`}}/></a></li>
            <li>< a className="social" href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw" target="blank" style={{color:`	#FF0000`}}><i className="fab fa-youtube" style={{fontSize:`40px`}}/></a></li>
           
           
           
            </ul>
          
          
         
        </div>
      </div>
    </div>
  );
}

export default Footer;
