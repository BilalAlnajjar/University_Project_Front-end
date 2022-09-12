import React from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import NavComponent from "../../Components/Nav/NavComponent";
import Col from "react-bootstrap/Col";

function About() {
    return (
        <>
            <NavComponent></NavComponent>
            <Container>
                <h2 className={"text-center my-2"}>About Us</h2>
                <Row className={"justify-content-around mx-auto align-items-center mt-4"}>
                    <Col xs={7} className={"text-start"}>
                        <h3 className={""}>Company Name</h3>
                        <p>
                            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                            ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit.
                            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                            ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit.
                            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                            ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit.
                            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                            ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit.
                        </p>

                        <ul className={"d-flex my-3 gap-2 nav"}>
                            <li className={"nav-item"}><i className="fa-brands fa-facebook fa-lg"></i></li>
                            <li><i className="fa-brands fa-instagram fa-lg"></i></li>
                            <li><i className="fa-brands fa-twitter fa-lg"></i></li>
                            <li><i className="fa-brands fa-youtube fa-lg"></i></li>
                        </ul>
                        <div className={"whatsapp d-flex justify-content-start align-items-center gap-2 my-2"}>
                            <i className="fa-brands fa-whatsapp fa-lg"></i>
                            <p className={"m-0"}>(+972) 059 8212120</p>
                        </div>
                        <div className={"location d-flex justify-content-start align-items-center gap-2"}>
                            <i className="fas fa-map-marker-alt fa-lg"></i>
                            <p className={"m-0"}>Palestine - Gaza</p>

                        </div>
                    </Col>
                    <Col xs={4}>
                        <img src={'https://via.placeholder.com/250'} alt={''} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default About;