import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import "./style.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const DataChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Ada kesalahan dalam mengambil data', error);
      });
  }, []);

  // Definisikan array warna
  const colors = [
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(199, 199, 199, 0.6)',
    'rgba(83, 102, 255, 0.6)',
    'rgba(255, 219, 132, 0.6)',
    'rgba(99, 132, 255, 0.6)',
    // Tambahkan lebih banyak warna jika diperlukan
  ];

  const chartData = {
    labels: data.map(item => item.namaBarang), // Sesuaikan dengan kolom data
    datasets: [
      {
        label: 'DATA STOK MATERIAL GUDANG',
        data: data.map(item => item.stok), // Sesuaikan dengan kolom data
        backgroundColor: colors.slice(0, data.length), // Menggunakan warna berdasarkan jumlah data
        borderColor: 'rgba(255, 255, 255, 0.6)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
        align: 'start',
        labels: {
          font: {
            size: 10, // Ubah ukuran font legend di sini
          },
        },
      },
      tooltip: {
        enabled: true,
        bodyFont: {
          size: 12, // Ubah ukuran font di tooltip di sini
        },
        titleFont: {
          size: 14, // Ubah ukuran font judul tooltip di sini
        },
      },
    },
  };
  

  return (
    <div class="chart-container">
      <Pie data={chartData} options={options}/>
    </div>
  );
};

export default DataChart;
