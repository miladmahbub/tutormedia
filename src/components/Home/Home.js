import React from 'react';
import useAuth from '../../hooks/useAuth';
import About from '../about/Aboutus';
import Banner from '../banner/Banner';
import Contact from '../contact/Contactus';
import Mainservices from "../mainservices/Mainservices"
import './Home.css'

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            
            <Banner></Banner>
            <About></About>
            <Mainservices></Mainservices>
            <section id="team">
        <div class="container my-3 py-5 text-center">
            <div class="row mb-5">
                <div class="col">
                    <h1>Meet Our Health Care Team</h1>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 pt-1">
                    <div class="card h-100">
                        <div class="card-body">
                            <img class="img-fouild rounded w-75 mb-3"
                                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
                                alt="Sophie"/>
                            <h3>Sophie Johnson</h3>
                            <h5>dental speaciallist</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.</p>
                            <div class="d-flex flex-row justify-content-center">
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 pt-1">
                    <div class="card h-100">
                        <div class="card-body">
                            <img class="img-fouild rounded w-75 mb-3"
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                                alt="lucy"/>
                            <h3>Lucy Sanchez</h3>
                            <h5>Sergery Speaciallist</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.</p>
                            <div class="d-flex flex-row justify-content-center">
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 pt-1">
                    <div class="card h-100">
                        <div class="card-body">
                            <img class="img-fouild rounded w-75 mb-3"
                                src="https://images.unsplash.com/photo-1592023031338-ee30ef94abbc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW4lMjBtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="Brad"/>
                            <h3>Brad Smith</h3>
                            <h5>Neuro Speaciallist </h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.</p>
                            <div class="d-flex flex-row justify-content-center">
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 pt-1">
                    <div class="card h-100">
                        <div class="card-body">
                            <img class="img-fouild rounded w-75 mb-3"
                                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="andres"/>
                            <h3>Tom Rogers</h3>
                            <h5>pchyologist</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.</p>
                            <div class="d-flex flex-row justify-content-center">
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

            <Contact></Contact>
            
            
        
        </div>
    );
};

export default Home;