import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./stats.css"

function StatsComponent() {
    return (
        <div className={'statsSection d-flex justify-content-center py-5'}>
            <div className={" d-flex justify-content-around w-50"}>
                <div className={"d-flex flex-column align-items-center gap-2"}>
                    <i className="users-icon fs-1 fa-sharp fa-solid fa-users"></i>
                    <div className={"text-center"}>
                        <h4>36,076</h4>
                        <p>Students Enrolled</p>
                    </div>
                </div>
                <div className={"d-flex flex-column align-items-center gap-2"}>
                    <i className="school-icon fs-1 fa-sharp fa-solid fa-building-columns"></i>
                    <div className={"text-center"}>
                        <h4>36,076</h4>
                        <p>Students Enrolled</p>
                    </div>
                </div>
                <div className={"d-flex flex-column align-items-center gap-2"}>
                    <i className="course-icon fs-1 fa-solid fa-chalkboard-user"></i>
                    <div className={"text-center"}>
                        <h4>36,076</h4>
                        <p>Students Enrolled</p>
                    </div>
                </div>
                <div className={"d-flex flex-column align-items-center gap-2"}>
                    <i className="medal-icon fs-1 fa-solid fa-medal"></i>
                    <div className={"text-center"}>
                        <h4>36,076</h4>
                        <p>Students Enrolled</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default StatsComponent;