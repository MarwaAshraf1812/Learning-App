import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import AboutJpg from '../assets/about.jpg';

const About = () => {
   return (
    <div className="container mt-5 mb-5 p-5">
    <h2 className="mb-4 text-left txt-primary fw-bolder fs-1">About</h2>
    <div className="row">
        <div className="col-md-6 mt-5">
            <p className="fs-5">
                Learning about new topics and expanding your knowledge is a crucial part of personal and professional growth. In this section, we will explore various methods and resources that can help you on your learning journey.
            </p>
            <p className="fs-5">
                There are numerous ways to learn, from traditional classroom settings to online courses, books, and hands-on experience. Each method offers unique benefits and can be tailored to fit your learning style.
            </p>
            
        </div>
        <div className="col-md-6 w-97">
                <img src={AboutJpg} alt="Learning" className="img-fluid" />
        </div>

    </div>
</div>
   )
}

export default About;