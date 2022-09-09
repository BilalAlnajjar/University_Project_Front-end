import React from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "../../Images/OOPS-CONCEPTS-IN-JAVA.png";
import ContentCourse from "./ContentCourse";
import Nots from "./Nots";
import Qustions from "./Qustions";

function CourseDataComponent() {
    return (
        <Container>
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" data-bs-toggle="tab" href="#overview" aria-selected="true"
                       role="tab">Overview</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" href="#documents" aria-selected="false" role="tab"
                       tabIndex="-1">Documents and Books</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" href="#contents" aria-selected="false" role="tab"
                       tabIndex="-1">Contents</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" href="#videos" aria-selected="false" role="tab"
                       tabIndex="-1">Videos</a>
                </li>

                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" href="#qustions" aria-selected="false" role="tab"
                       tabIndex="-1">Q&A</a>
                </li>

                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" href="#notes" aria-selected="false" role="tab"
                       tabIndex="-1">Notes</a>
                </li>

            </ul>
            <div id="myTabContent" className={"tab-content"}>
                <div className="tab-pane fade active show p-4 w-90 mx-auto" id="overview" role="tabpanel">
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua,
                        retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.
                        Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure
                        terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                        american apparel, butcher voluptate nisi qui.</p>
                </div>
                <div className="tab-pane fade p-4 w-90 mx-auto" id="documents" role="tabpanel">
                    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
                        Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four
                        loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk
                        aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore
                        aesthetic magna delectus mollit.</p>
                </div>
                <div className="tab-pane fade p-4" id="contents">
                    <ContentCourse></ContentCourse>
                    <ContentCourse></ContentCourse>
                    <ContentCourse></ContentCourse>
                    <ContentCourse></ContentCourse>
                </div>
                <div className="tab-pane fade p-4" id="videos">
                    <ContentCourse></ContentCourse>
                    <ContentCourse></ContentCourse>
                    <ContentCourse></ContentCourse>
                    <ContentCourse></ContentCourse>
                </div>
                <div className="tab-pane fade p-4 w-90 mx-auto" id="qustions">
                    <Qustions></Qustions>
                    <Qustions></Qustions>
                </div>
                <div className="tab-pane fade p-4 w-90 mx-auto" id="notes">
                    <Nots></Nots>
                </div>
            </div>

        </Container>
    );
}

export default CourseDataComponent;