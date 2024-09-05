import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import './style.css';
import { CiUser } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiTable } from "react-icons/fi";
import './style.css'

const NavbarUser = () => {

  
    const [users, setUser] = useState([]);
    const tableRef = useRef(null);
    
    useEffect(()=>{
        getUsers();
    }, []);
    
    const getUsers = async () =>{
        const response = await axios.get('http://localhost:5000/users');
        setUser(response.data);
        
    }
      


  const [barangMenipis, setBarangMenipis] = useState([]);

  useEffect(() => {
      if(users.length>0){
          const barangTipis = users.filter(user => user.stok < 20);
          setBarangMenipis(barangTipis);
      }
  }, [users]);
  
  
  const [showNotification, setShowNotification] = useState(true);
  
  const handleCloseNotification = () => {
    setShowNotification(false);
  };
  const handleOpenNotification = () => {
    setShowNotification(true);
  };
  
  const NotificationBarang = ({ items }) => {
      return (
        showNotification && (
        <div className="notification is-warning">
            <button className="delete" onClick={handleCloseNotification}></button>
            <strong>Perhatian!</strong> Stok Barang Berikut Kurang Dari 20:
    
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.namaBarang}: {item.stok} {item.satuan}</li>
    
                ))}
            </ul>
        </div>
        )
      )
    }
  
  return (
    <div>
      <nav className="navBar column has-background-white is-full">
                <div className="navigation navbar-brand">
                    <a className="navbar-item" href="/">
                        <FiTable class="tab-icon" color='blue' size={30} />
                        <h1 className="title is-4 has-text-black">Dashboard Material</h1>
                    </a>
                </div>


        {/* Notif barang  */}
        {barangMenipis.length > 0 && < NotificationBarang items={barangMenipis} />}
                
        <div className='button-notification'>
           <button class="buttonNotification" onClick={handleOpenNotification}>
           <IoIosNotificationsOutline class="notificationn" color='black' size={30} />
            <p>Notification</p>
            </button>
        </div>
        <div className='button-user'>
           <button class="buttonUser">
            <CiUser className="user" color={'white'}  size={30}/>
            <p>User</p>
            </button>
        </div>

        </nav>
    </div>
  )
}

export default NavbarUser
