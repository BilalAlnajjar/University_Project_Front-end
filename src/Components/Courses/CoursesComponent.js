import React from 'react';
import Container from "react-bootstrap/Container";
import {Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Image from '../../Images/OOPS-CONCEPTS-IN-JAVA.png'
import Course from "./Course";

function CoursesComponent() {
    return (
        <Container >
            <h2 className={"text-center mt-2 mb-4"}>Courses</h2>
            <Row className={""}>
                <Course></Course>
                <Course></Course>
                <Course></Course>
                <Course></Course>
                <Course></Course>
                <Course></Course>
                <Course></Course>
            </Row>
        </Container>
    );
}

export default CoursesComponent;