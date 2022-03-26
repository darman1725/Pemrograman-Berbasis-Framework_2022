import React from 'react';
import {NavLink} from 'react-router-dom';
import img1 from '../Images/img1.png';
import Same from './Same';

const About=()=>{
    return(
        <>
        <Same
        title="Know more about us"
        text="Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Id, totam nesciunt! Nisi
        explicabo possimus quasi deserunt blanditiis
        assumenda doloribus in." 
        imgsrc={img1}
        btn="Know more"
        />
        </>
    )
}
export default About;