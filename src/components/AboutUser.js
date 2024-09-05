import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import './style.css';
import NavbarUser from './NavbarUser';
import FooterUser from './FooterUser';


const AboutUser = () => {
  return (
    <div>

      {/* NAVBAR */}
      <NavbarUser/>

 
      {/* SIDEBAR */}
      <div className="relative-container">
          <aside className="menu ml-5 mt-5 mb-5">
              <p class="menu-label">Menu</p> 
              <ul class="menu-list">
                  <li><Link to={"/"}>Dashboard</Link></li>
                  <li><Link to={"/"}>Table</Link></li>
                  <li><Link>About</Link></li>
                  <li><a href='#footer'>Contact Us</a></li>
              </ul>

          </aside>

      </div>

      {/* MAIN */}
      <div style={{
        marginLeft: "30rem",
        marginRight: "20rem",
        marginBottom: "10rem",
        lineHeight: '2',
        textAlign: "justify"
      }}>
      <p style={{
        marginBottom: "2rem"
      }}>Selamat datang di Dashboard Monitoring Barang Material Telkom!

      Website ini dirancang khusus untuk memudahkan pengelolaan dan pemantauan barang material yang masuk dan keluar di lingkungan PT Telkom. Dengan platform ini, kami berusaha memberikan solusi yang efisien dalam manajemen inventaris, memastikan setiap pergerakan barang dapat dipantau secara real-time.
      
      Fitur-fitur utama yang kami sediakan meliputi:
      </p>

      <ul style={{
        listStyleType: 'circle'
      }}>
      <li>
        Pemantauan Stok: Melacak jumlah barang yang tersedia di gudang secara akurat.
      </li>
      
      <li>
        Logistik Barang: Memastikan barang yang masuk dan keluar tercatat dengan baik, mulai dari penerimaan hingga pengiriman.
        
      </li>

      <li>
      Laporan dan Analisis: Menyediakan data analitik yang membantu dalam pengambilan keputusan terkait persediaan dan kebutuhan material.
        
      </li>  
      </ul>

      <p style={{

        marginTop: '2rem'
      }}>

      Melalui website ini, kami berharap dapat meningkatkan efisiensi operasional, mengurangi risiko kesalahan, dan mendukung transparansi dalam pengelolaan barang material. Komitmen kami adalah untuk selalu memberikan layanan terbaik demi keberlangsungan operasional Telkom yang lebih efektif dan terintegrasi.
      </p>
      </div>
     

      {/* FOOTER */}
      <FooterUser/>
        {/* FOOTER SELESAI */}
</div>
  )

}

export default AboutUser
