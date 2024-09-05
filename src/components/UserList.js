import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import './style.css';
import DataChart from "./DataChart";
import NavbarUser from "./NavbarUser";
import FooterUser from "./FooterUser";



const UserList = () => {
const [users, setUser] = useState([]);
const tableRef = useRef(null);

useEffect(()=>{
    getUsers();
}, []);

const getUsers = async () =>{
    const response = await axios.get('http://localhost:5000/users');
    setUser(response.data);
    
}

const deleteUser = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/users/${id}`);
        getUsers();
    } catch (error) {
        console.log(error);
              
    }
}

const [search, setSearch] = useState('');
console.log(search);


// FETCH DATA SPREADSHEET
const [data, setData] = useState([]);

useEffect(() => {
  fetch('http://localhost:5000/api/sheets-data')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Error fetching data:', error));
}, []);

// DATA PENGEBON
const [dataPengebon, setDataPengebon] = useState([]);

useEffect(() => {
  fetch('http://localhost:5000/api/sheets-dataPengebon')
    .then(response => response.json())
    .then(dataPengebon=> setDataPengebon(dataPengebon))
    .catch(error => console.error('Error fetching data:', error));
}, []);


// Scroll smooth
const scrollToTable = () => {
    if (tableRef.current) {
        tableRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll dengan transisi halus
    }
}


   

  return (
    <div className="columns" style={{ display: "flex", flexDirection:"column"}}>


        {/* Navbar */}
        <NavbarUser/>
    {/* Sidebar */}
        <div className="relative-container">
             <aside className="menu ml-5 mt-5 mb-5">
                  <p class="menu-label">Menu</p> 
                    <ul class="menu-list">
                        <li><Link to={``}>Dashboard</Link></li>
                        <li><a href="#tabel" onClick={scrollToTable}>Table</a></li>
                        <li><Link to={`about`}>About</Link></li>
                        <li><a href="#footer" onClick={scrollToTable}>Contact Us</a></li>
                    </ul>
        
            </aside>

        </div>

<div style={{
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20rem',
    gap: "5rem",
    padding: '1rem',
    marginTop: '-10rem'
}}>
  <div class=" kotak" >
    <h1 style={{
        color: "black"
    }}>JUMLAH BARANG YANG KELUAR HARI INI</h1>
    <p class="text1 bd-notification">{data}
    </p>
  </div>
  <div class="kotakBar"> 
    <div class="grafik">
    <h1 style={{
        color: "black",
        textAlign: 'center'
    }}>DATA GRAFIK STOK</h1>
    <DataChart/>
    </div>
  </div>
  <div class="kotak">
    <h1 style={{
        color: "black"
    }}>Jumlah Pengebon</h1>
    <p class="text2 bd-notification">{dataPengebon}
    </p>
  </div>
  </div>

  



    {/* BAGIAN TABEL */}
        <div id="tabel" className="column is-10" style={{
        
            marginTop: '10vh',
            marginLeft: '12%'
            
        }}>
            <Link to={`add`} className="button is-success">Tambah Barang</Link>

    {/* SEARCH BAR */}
    <div class="field has-addons">
        <div class="control py-3">
            <input 
            class="input" 
            type="text" 
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari Barang"></input>
        </div>
        
    </div>
  {/* SEARCH BAR SELESAI */}
           
           <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Barang</th>
                    <th>Deskripsi</th>
                    <th>Stock</th>
                    <th>Satuan</th>
                    <th>Aksi</th>
                </tr>
            </thead>


            <tbody>
                {users.filter((user) => {
                    return search.toLowerCase() === '' ? user : user.namaBarang.toLowerCase().includes(search.toLowerCase())
                }).map((user,index) => (
                    <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.namaBarang}</td>
                        <td>{user.deskripsi}</td>
                        <td>{user.stok}</td>
                        <td>{user.satuan}</td>
                        <td>
                            <Link to={`edit/${user.id}`} className="button is-small is-info mx-3">Edit</Link>
                            <button onClick={()=> deleteUser(user.id)} className="button is-small is-danger">Delete</button>
                        </td>
                </tr>

                ))}
                
            </tbody>
           </table>
        </div>

        {/* BAGIAN TABEL SELESAI */}

        {/* FOOTER */}
        <FooterUser/>
        {/* FOOTER SELESAI */}
    </div>
    
  )
}


export default UserList;
