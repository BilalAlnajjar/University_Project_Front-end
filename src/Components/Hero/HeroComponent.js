import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "../../Images/charactar 3.png"
import './hero.css'

function HeroComponent() {
    return (
        <Row className={"heroSection"}>
            <Col className={"heroText"} xs={6}>
                <div className={'elementsHeroText'}>
                    <h2 className={"heroTitle"}>
                        You Deserve The
                        <br></br>
                        Best Education
                    </h2>
                    <p className={"heroPar"}>
                        Active Learning, Expert Teachers & Safe Environment
                    </p>
                    <Button className={"heroBtn w-25 fs-6 fw-bold"} variant="warning">Join us</Button>
                </div>
            </Col>
            <Col className={"heroImg"} xs={6}>
                <img src={Image} alt={""}/>
            </Col>
        </Row>
    )
}

export default HeroComponent;