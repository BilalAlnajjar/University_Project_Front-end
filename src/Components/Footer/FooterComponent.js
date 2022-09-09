import React from 'react';
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";

function FooterComponent() {
    return (
        <Row className={"footer w-100 m-0 p-5 justify-content-between bg-primary text-white align-items-center"}>
            <Col xs={5} className={"aboutCompany d-flex flex-column gap-3"}>
                <h2>Simple Soft</h2>
                <p className={"m-0 pr-5"}>
                    A software company that aims to spread technology
                    and software systems to people and
                    solve the problems of programming students
                    to enable them to join the labor market
                    with the best modern software methods
                </p>
            </Col>
            <Col xs={3} className={"socialIcons d-flex flex-column gap-3"}>
                <ul className={"d-flex justify-content-end gap-2"}>
                    <i className="fa-brands fa-facebook fa-lg"></i>
                    <i className="fa-brands fa-instagram fa-lg"></i>
                    <i className="fa-brands fa-twitter fa-lg"></i>
                    <i className="fa-brands fa-youtube fa-lg"></i>
                </ul>
                <div className={"whatsapp d-flex justify-content-end align-items-center gap-2"}>
                    <p className={"m-0"}>(+972) 059 8212120</p>
                    <i className="fa-brands fa-whatsapp fa-lg"></i>
                </div>
                <div className={"location d-flex justify-content-end align-items-center gap-2"}>
                    <p className={"m-0"}>Palestine - Gaza</p>
                    <i className="fas fa-map-marker-alt fa-lg"></i>
                </div>
            </Col>
        </Row>
    );
}

export default FooterComponent;