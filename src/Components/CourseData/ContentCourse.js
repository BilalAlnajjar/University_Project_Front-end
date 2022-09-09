import React from 'react';
import Col from "react-bootstrap/Col";
import Image from "../../Images/OOPS-CONCEPTS-IN-JAVA.png";
import Row from "react-bootstrap/Row";

function ContentCourse() {
    return (
        <Row className={"gap-2 p-3 justify-content-center"}>
            <Col xs={3}>
                <img src={Image} alt={""} />
            </Col>
            <Col xs={8}>
                <h4>video title</h4>
                <p>
                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
                    Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four
                    loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk
                    aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore
                    aesthetic magna delectus mollit.
                </p>
            </Col>
        </Row>
    );
}

export default ContentCourse;