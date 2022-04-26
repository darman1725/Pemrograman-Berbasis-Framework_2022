import React from 'react';
import {NavLink} from 'react-router-dom';
import img1 from '../Images/img1.png';
import Same from './Same';

const About=()=>{
    return(
        <>
        <Same
        title="Tentang Eduman"
        text="
        Kamu merasa butuh bantuan tambahan untuk belajar? Pelajaran di sekolah terasa sulit? Yuk gabung di Eduman.
        Selain jadi lebih mengerti setiap pelajaran dan memudahkan kamu dalam mengerjakan soal, kamu juga bisa mendapat bantuan untuk mengerjakan tugas.
        Masih kurang? Belajar bersama Eduman juga bisa membuat kamu menjadi juara kelas dan sekolah! Yuk silahkan coba kuis dibawah ini
        " 
        imgsrc={img1}
        btn="Coba Kuis"
        />
        </>
    )
}
export default About;