import React from 'react';
import {NavLink} from 'react-router-dom';
import homeimg from '../Images/homeimg.png';
import '../Css/HomeAbout.css';
import Same from './Same';

const Home=()=>{
    return(
        <>
        <Same
        title="Learning made easy"
        text="Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Id, totam nesciunt! Nisi
        explicabo possimus quasi deserunt blanditiis
        assumenda doloribus in." 
        imgsrc={homeimg}
        btn="Read more"
        />
        </>
    )
}
export default Home;