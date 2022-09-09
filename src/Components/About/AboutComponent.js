import React from 'react';
import Image from "../../Images/7_genedfggdrated.png"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";

function AboutComponent() {
    return (
        <Container>
            <Row className={"align-items-center"}>
                <Col className={"image"} xs={6}>
                    <img src={Image}  alt={""}/>
                </Col>
                <Col className={"text"} xs={6}>
                    <h3 className={"title"}>
                        We Are The Best
                        <br/>
                        Choice For You
                    </h3>
                    <p className={"body"} >
                        Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                        ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutComponent;