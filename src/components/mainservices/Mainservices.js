// import React from 'react';
import React, { useEffect, useState } from 'react';
import Maincourses from '../maincouses/Maincourses';
import './Mainservices.css'

const Mainservices = () => {
    const[tutors,setTutors] = useState([]);

    useEffect(() =>{
        fetch('./product.JSON')
        .then(res => res.json())
        .then(data =>setTutors(data));
    },[])
    return (
        <div className='tutor-container p-3'>
          <h1 className="p-3">Our Services</h1>
            <div className='tutorlist'>
              {
                  tutors.map(tutor =><Maincourses
                    mentors={tutor}
                  
                  ></Maincourses>)
              }
            </div>
        </div>
    );
};

export default Mainservices;