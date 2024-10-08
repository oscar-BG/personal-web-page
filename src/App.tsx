import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";

import "./App.css";
import AboutMe from "./components/about_me";
import Contact from "./components/contact";
import Education from "./components/education";
import Experience from "./components/experience";
import NavBar from "./components/navbar";
import Technologies from "./components/technologies";

function App() {
  return (
    <>
      <NavBar />
      <Content style={{ marginTop: "20px", marginLeft: "30px" }}>
            <h1>Programador Web Front-End y Back-End</h1>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} >

            <AboutMe />
            <Experience />
            <Education />

          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="contact-first">
            <Contact></Contact>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Technologies />
        </Row>
      </Content>
    </>
  );
}

export default App;
