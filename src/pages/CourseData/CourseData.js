import React from 'react';
import NavComponent from "../../Components/Nav/NavComponent";
import FooterComponent from "../../Components/Footer/FooterComponent";
import CourseDescription from "../../Components/CourseData/CourseDescription";
import CourseDataComponent from "../../Components/CourseData/CourseDataComponent";

function CourseData() {
    return (
        <>
            <NavComponent></NavComponent>
            <CourseDescription></CourseDescription>
            <CourseDataComponent></CourseDataComponent>
            <FooterComponent></FooterComponent>
        </>
    );
}

export default CourseData;