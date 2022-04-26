import React from 'react';
import {NavLink} from 'react-router-dom';
import homeimg from '../Images/homeimg.png';
import '../Css/HomeAbout.css';
import Same from './Same';

const Home=()=>{
    return(
        <>
        <Same
        title="Eduman - Bimbingan Belajar Persiapan CPNS"
        text="Bimbel EduMan merupakan lembaga bimbingan belajar terbaik persiapan test CPNS. Berdiri sejak 2 Mei 2019 di Kota Bandung, 
        saat ini Ganesha Operation telah mencetak personal siap untuk berkompetisi dalam dunia kerja." 
        imgsrc={homeimg}
        btn="Lihat Selengkapnya"
        />
        </>
    )
}
export default Home;