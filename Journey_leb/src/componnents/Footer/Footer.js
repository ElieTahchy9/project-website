import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

const Footer = () => {
  return (
  <div className="main-footer">
    <div className="container">
         <div className="row">
            {/* Colunm1 */}
            <div className="col">
                <h4>JOURNEYLEB <i class="bi bi-backpack2-fill"></i></h4>
                <ul className="list-unstyled">
                    <li>+961-717-55803</li>
                    <li>Beirut, LEBANON</li>
                    <li>123 Street South North</li>
                </ul>
            </div>
             {/* Colunm2 */}
             <div className="col">
                <h4>Others <i class="bi bi-info-circle"></i></h4>
                <ul className="list-unstyled">
                    <li><a href="\About">Terms of Service </a></li>
                    <li><a href="\About">Privacy Policy</a></li>
                    <li><a href="\About">Lisence</a></li>
                </ul>
            </div>
             {/* Colunm3 */}
             <div className="col">
                <h4>Help <i class="bi bi-question-circle"></i></h4>
                <ul className="list-unstyled">
                    <li><a href="\About">Support</a></li>
                    <li><a href="\About">Troubleshooting</a></li>
                    <li><a href="\About">Contact us</a></li>
                </ul>
            </div>
            <div className="col">
                <h5>  Follow us on Social Media: </h5>
                <h4 class="text-secondary text-center"><strong>JOURNEYLEB</strong> <i class="bi bi-backpack2-fill"></i></h4>
                <div class="h3">                                                                          
                
                    <div keyof typeof icon class="d-flex justify-content-evenly align-items-center social-icons">
                        <a href="https://twitter.com"><i class="bi bi-twitter-x"></i></a>
                        <a href="https://linkedin.com" ><i class="bi bi-linkedin"></i></a>
                         <a href="https://facebook.com" ><i class="bi bi-facebook"></i></a>
                        <a href="https://instagram.com" ><i class="bi bi-instagram"></i></a>
                        <a href="https://tiktok.com" >   <i class="bi bi-tiktok"></i></a>
                        <a href="https://t.me" ><i class="bi bi-telegram"></i></a>
                    </div>
                </div>
            </div>
            </div>
            <hr />
            <div className="row">
            <div className="col-sm text-center text-slate-700 my-2">
                &copy;{new Date().getFullYear()} JOURNEYLEB INC | All right reserved | Terms Of Service | Privacy 
            </div> 
            </div> 
         </div>
    </div>
  );
};

export default Footer;