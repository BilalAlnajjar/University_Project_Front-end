import React from 'react';
import NavComponent from "../../Components/Nav/NavComponent";
import CoursesComponent from "../../Components/Courses/CoursesComponent";
import FooterComponent from "../../Components/Footer/FooterComponent";


function Courses() {
    return (
        <>
            <NavComponent></NavComponent>
            <CoursesComponent></CoursesComponent>
            <FooterComponent></FooterComponent>
        </>
    );
}

export default Courses;