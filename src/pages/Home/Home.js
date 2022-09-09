import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import NavComponent from "../../Components/Nav/NavComponent";
import './home.css'
import HeroComponent from "../../Components/Hero/HeroComponent";
import StatsComponent from "../../Components/Stats/StatsComponent";
import AboutComponent from "../../Components/About/AboutComponent";
import MajorsComponent from "../../Components/Majors/MajorsComponent";
import FooterComponent from "../../Components/Footer/FooterComponent";

function Home() {
    return (
        <div>
            <Container fluid className={"backgroundHero"}>
                <NavComponent></NavComponent>
                <HeroComponent></HeroComponent>
            </Container>

            <AboutComponent></AboutComponent>
            <StatsComponent></StatsComponent>
            <MajorsComponent></MajorsComponent>
            <FooterComponent></FooterComponent>

        </div>
    );
}

export default Home;