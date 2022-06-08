import React from "react";
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import './Footer.css';

export default function Footer(){
    return (
       <footer>
           <ul>
               <li><FaFacebook/></li>
               <li><FaInstagram/></li>
               <li><FaTwitter/></li>
           </ul>
           <p>
            <span>Costs</span> &copy;2022
            </p>
       </footer>
    )
}

