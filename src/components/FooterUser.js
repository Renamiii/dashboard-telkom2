import React from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './style.css';

const FooterUser = () => {
  return (
    <div>
          <footer id="footer">
            <hr style={{
                width: '90%',
                margin: '30px auto'
            }}></hr>
            <div style={{
                alignItems: "center",
                textAlign: "center",
                display: 'flex',
                gap: '40px',
                justifyContent: "center"
                
            }}>
            <a><FaInstagram size={30} color='white'/></a>
            <a><FaFacebook size={30} color='white'/></a>
            <a><FaXTwitter size={30} color='white'/></a>
            </div>

        </footer>
    </div>
  )
}

export default FooterUser
