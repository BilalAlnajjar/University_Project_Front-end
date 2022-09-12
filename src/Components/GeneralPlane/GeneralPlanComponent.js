import React from 'react';
import {Table} from "react-bootstrap";

function GeneralPlanComponent() {
    return (
        <>
            <h3 className={"text-center mt-2 mb-4"}>General Plan</h3>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Subject Name</th>
                    <th>Symbol</th>
                    <th>H/W</th>
                    <th>Requirement</th>
                    <th>Required For</th>
                    <th>Semester</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>2</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>2</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>2</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>2</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>2</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>2</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>1</td>
                </tr>
                </tbody>
            </Table>

        </>
    );
}

export default GeneralPlanComponent;