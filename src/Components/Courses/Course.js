import React from 'react';
import Image from "../../Images/OOPS-CONCEPTS-IN-JAVA.png";
import {Col} from "react-bootstrap";

function Course() {
    return (
        <Col xs={3} className={"p-3"}>
            <div className={"card p-2"}>
                <img src={Image} className={"card-img-top"} alt={""} />
                <div className={"card-body"}>
                    <h5 className={"card-title"}>Card title</h5>
                    <p className="{card-text"> Some quick example text to build on the card title and make up the
                        bulk of the card's content.</p>
                    <a href="#" className={"btn btn-primary"}>Go somewhere</a>
                </div>
            </div>
        </Col>
    );
}

export default Course;