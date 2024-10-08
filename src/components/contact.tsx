import Icon, { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { cilAddressBook, cilEnvelopeLetter, cilPhone } from "@coreui/icons";
import { CIcon } from "@coreui/icons-react";
import { Card, Divider, Flex, Row, Col } from "antd";
import React from 'react';
import foto from "/perfil-image.jpg";

const Contact: React.FC = () => {
  return <>
    <Flex
      className="box-flex"
      justify="space-around"
      align="flex-start"
    >
      <div>
        <div className="profile-circle">
          <img src={foto}></img>
        </div>
        <h2>Oscar Bautista Gaytan</h2>
      </div>
    </Flex>
    <div style={{ marginLeft: '50px', marginTop: '10px' }}>
      <Card>
        <Divider orientation="left">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon style={{ marginRight: '8px' }}>
              <CIcon icon={cilAddressBook} style={{ color: "black" }} />
            </Icon>
            <h3>Detalles</h3>
          </div>
        </Divider>
        <strong>Puebla pue.</strong>
        <br></br>
        <br></br>

        <Row>
          <Col xs={12} sm={12} md={24} lg={24} xl={24}>
            <p className="subtitle">Nombre: </p>
            <p>Oscar Bautista Gaytan</p>
            <br />
          </Col>
          <Col xs={12} sm={12} md={24} lg={24} xl={24}>
            <p className="subtitle">Edad: </p>
            <p>24 años</p>
            <br />
          </Col>
          <Col xs={12} sm={12} md={24} lg={24} xl={24}>
            <p className="subtitle">Teléfono: </p>
            <a href='tel:2224153445'>
              <Icon style={{ marginRight: '8px' }}> <CIcon icon={cilPhone} style={{ color: 'black' }} /> </Icon>
              Llamar
            </a>
            <br />
            <br />
          </Col>
          <Col xs={12} sm={12} md={24} lg={24} xl={24}>
            <p className="subtitle">Correo: </p>
            <a href={`mailto:oscar04262000@gmail.com`}>
              <Icon style={{ marginRight: '8px' }}> <CIcon icon={cilEnvelopeLetter} style={{ color: 'black' }} size="xxl"></CIcon> </Icon>
              Enviar correo
            </a>
            <br></br>
            <br></br>
          </Col>
          <Col xs={12} sm={12} md={24} lg={24} xl={24}>
            <p className="subtitle">GitHub</p>
            <a href="https://github.com/oscar-BG" target="_blank">
              <GithubOutlined style={{ fontSize: '20px' }} />
            </a>
            <br></br>
            <br></br>
          </Col>
          <Col xs={12} sm={12} md={24} lg={24} xl={24}>
            <p className="subtitle">Linkedin</p>
            <a href="https://linkedin.com/in/oscar-bautista-gaytan-6bb4b8240" target="_blank">
              <LinkedinOutlined style={{ fontSize: '20px' }} />
            </a>
            <br></br>
            <br></br>
            <br></br>
          </Col>
          <Col xs={12} sm={12} md={24} lg={24} xl={24}>
            <p className="subtitle">Habilidades</p>
            <ul>
              <li>Autodidacta</li>
              <li>Organizado</li>
              <li>Pensamiento critico</li>
              <li>Trabajo en equipo</li>
              <li>Manejo eficaz del estrés</li>
            </ul>
          </Col>
        </Row>
      </Card>
    </div>
  </>
}

export default Contact;