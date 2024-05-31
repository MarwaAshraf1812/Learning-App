import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import WebJpg from '../assets/web.jpg';

const course = [
    {
        id: 1,
        title: "HTML",
        instructor: "Coper Nilson",
        imageUrl: "https://via.placeholder.com/150?text=HTML"
    },
    {
        id: 2,
        title: "CSS",
        instructor: "Jane Doe",
        imageUrl: "https://via.placeholder.com/150?text=CSS"
    },
    {
        id: 3,
        title: "JavaScript",
        instructor: "John Doe",
        imageUrl: "https://via.placeholder.com/150?text=JavaScript"
    }
];

const Courses = () => {
    return (
        <div className="container mt-5 mb-5">
            <h2 className="mb-4 text-center txt-primary fw-bold mb-5 fw-3">Courses</h2>
            <div className="row">
                {course.map(course => (
                    <div className="col-md-4 mb-4 " key={course.id}>
                        <div className="card h-100 ">
                            <img src={WebJpg} className="card-img-top" alt={course.title} />
                            <div className="card-body text-center">
                                <h3 className="card-title">
                                    <a href={`/courses/${course.id}`} className="text-decoration-none txt-primary fw-bold">{course.title} For Beginner</a>
                                    <p className="mt-4 fs-5"> <span className="fw-bold txt-primary fs-7">Instructor :</span> {course.instructor}</p>
                                </h3>
                                <a href="#" class="btn btn-primary mt-2">Register</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
