import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SoftImage from "../../Images/kisspng-portable-network-graphics-clip-art-information-tec-healthcare-digitals-1-company-for-your-healthca-5beb48acf3ce53.0657099715421462209986.png"
import MechaImage from "../../Images/pngwing.com.png"

function MajorsComponent() {
    return (
        <Container>
            <h3 className={"text-center py-3"}>Majors</h3>
            <Row className={"flex-column p-2"} >
                <Row className={"align-items-center"}>
                    <Col xs={4} className={"p-2"}>
                        <img src={SoftImage} alt={""} />
                    </Col>
                    <Col xs={8}>
                        <h3 className={"title"}>Software Engineering</h3>
                        <p className={"body"}>
                            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                            ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit.
                        </p>
                    </Col>
                </Row>

                <Row className={"flex-row-reverse align-items-center"}>
                    <Col xs={4} className={"p-2"}>
                        <img src={MechaImage} alt={""} />
                    </Col>
                    <Col xs={8}>
                        <h3 className={"title"}>Software Engineering</h3>
                        <p className={"body"}>
                            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                            ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit.
                        </p>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}

export default MajorsComponent;