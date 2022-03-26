import React from 'react';
import '../Css/ServiceStyle.css';
import Card from './Card';
import Data from './Data';

const Services=()=>{
    return(
        <>
        <h1>Our Services</h1><br></br>
        <div className="services">
            {Data.map((values)=>{
                return(
                    <Card 
                    title1={values.$title}
                    imgSource={values.imgsrc}
                    desc1={values.desc}
                    btnService={values.btnService}
                    />   
                )
            })}
        </div>
        </>
    )
}
export default Services;