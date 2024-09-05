import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const [gambar,setGambar] = useState("");
    const [namaBarang,setNama] = useState("");
    const [deskripsi,setDeskripsi] = useState("");
    const [stok,setStok] = useState("");
    const [satuan,setSatuan] = useState("Pcs");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getUserById();
    },[]);

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
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

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setNama(response.data.namaBarang);
        setDeskripsi(response.data.deskripsi);
        setStok(response.data.stok);
        setSatuan(response.data.satuan);
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateUser}>
                
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
                    <button type='submit' className='button is-success'>Update</button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default EditUser
