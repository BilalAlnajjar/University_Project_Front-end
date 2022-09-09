import React from 'react';
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Image from "../../Images/OOPS-CONCEPTS-IN-JAVA.png"

function CourseDescription() {
    return (
        <Container>
            <Row className={"justify-content-center align-items-center gap-2 py-5"}>
                <Col xs={4}>
                    <img src={Image} alt={""} />
                </Col>
                <Col xs={6} className={"text d-flex flex-column gap-2"}>
                    <h2>Course Title</h2>
                    <p>
                        Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                        ultrices in ligula.Semper at tempufddfel.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default CourseDescription;