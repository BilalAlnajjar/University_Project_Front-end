import React from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CourseDescription from "../../Components/CourseData/CourseDescription";
import GeneralPlanComponent from "../../Components/GeneralPlane/GeneralPlanComponent";
import NavComponent from "../../Components/Nav/NavComponent";

function Department() {
    return (
        <>
            <NavComponent></NavComponent>
            <Container>
                <CourseDescription></CourseDescription>
                <GeneralPlanComponent></GeneralPlanComponent>
            </Container>
        </>
    );
}

export default Department;