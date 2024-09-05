import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import NavbarUser from './NavbarUser';
import FooterUser from './FooterUser';

const AddUser = () => {
    const [gambar,setGambar] = useState("");
    const [namaBarang,setNama] = useState("");
    const [deskripsi,setDeskripsi] = useState("");
    const [stok,setStok] = useState("");
    const [satuan,setSatuan] = useState("Pcs");
    const navigate = useNavigate();

    const saveUser = async (e, res) => {
        e.preventDefault();
        if (!namaBarang || !deskripsi || !stok || !satuan) {
            alert("All fields are required.");
            return; 
        }

        

        try {
            await axios.post('http://localhost:5000/users', {
                namaBarang,
                deskripsi,
                stok,
                satuan
            });
            navigate("/");
        } catch (error) {
            console.log(error);
            
        }
    }
    const [file, setFile] = useState();
    function handleChange(e){
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (

    <div>
        <NavbarUser/>
        <div className="columns mt-5 is-centered" style={{
            marginBottom: "22rem"
        }}>
            <div className="column is-half">
                <form onSubmit={saveUser}>

                    

                    <div className="field">
                        <label className="label">Nama Barang</label>
                        <div className="control">
                            <input 
                            type= "text" 
                            className="input" 
                            value={namaBarang}
                            onChange={(e)=> setNama(e.target.value)} 
                            placeholder='Nama Barang'/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Deskripsi</label>
                        <div className="control">
                            <input 
                            type= "text" 
                            className="input"  
                            value={deskripsi}
                            onChange={(e)=> setDeskripsi(e.target.value)}placeholder='Deskripsi'/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Stock</label>
                        <div className="control">
                            <input 
                            type= "text" 
                            className="input" 
                            value={stok}
                            onChange={(e)=> setStok(e.target.value)}
                            placeholder='Stock'/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Satuan</label>
                        <div className="control">
                            <div className='select is-fullwidth'>
                                <select value={satuan}
                            onChange={(e)=> setSatuan(e.target.value)}>
                                    <option value="Pcs">Pcs</option>
                                    <option value="Meter">Meter</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="field">
                        <button type='submit' className='button is-success'>Save</button>
                    </div>
                    
                </form>
            </div>
        </div>

        <FooterUser/>
    </div>
  )
}

export default AddUser
