import React from "react";
import { useParams } from "react-router-dom";
import '../App.css';

const lessons = [
    {
        id: 1,
        title: "HTML",
        description: "HTML is a markup language that is used to create web pages."
    },
    {
        id: 2,
        title: "CSS",
        description: "CSS is a style sheet language that is used to style web pages."
    },
    {
        id: 3,
        title: "JavaScript",
        description: "JavaScript is a programming language that is used to make web pages interactive."
    }
];

const Lesson = () => {
    const { id } = useParams();
    const lesson = lessons[id];
    return (
        <div className="lessonContainer">
            <h2>{lesson.title}</h2>
            <p>{lesson.description}</p>
        </div>
    )
}

export default Lesson;