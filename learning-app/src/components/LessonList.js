import React from "react";
import '../App.css';

const lessons = [
    {
        id: 1,
        title: "HTML",
    },
    {
        id: 2,
        title: "CSS",
    },
    {
        id: 3,
        title: "JavaScript",
    }
];

const LessonList = () => {
    return (
        <div>
            <h2>Lessons</h2>
            <ul>
                {lessons.map(lesson => (
                    <li key={lesson.id}>
                        <h3><a href="{`/lesson/${lesson.id}`}">{lesson.title}</a></h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default LessonList;