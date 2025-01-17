import React from 'react';
import './Maincourses.css'
import { Link } from 'react-router-dom';

const Maincourses = (props) => {
    const {img,services,price,description,id} = props.mentors;
    return (
        <div>
            
            <div>
            <div className='displayteacher p-3'>
            <img src={img} alt="" />
            <div className='d-flex  justify-content-between p-3 '>

            </div>
            <h5>{services}</h5>
            <h6>${price}</h6>
            <p>{description}</p>
            <div className='d-flex  justify-content-between p-2 '>
            </div>
            {/* <button className='button'>Know More</button> */}
            <Link to={`/detail/${id}`}>
            <button className='button'>Know More</button>
            </Link>
            
        </div>
            </div>
        </div>
    );
};

export default Maincourses;