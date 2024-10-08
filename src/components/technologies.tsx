import { ToolOutlined } from "@ant-design/icons";
import { Col, Divider } from "antd";

const Technologies: React.FC = () => {
    return <>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div>
                <Divider orientation="left">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <ToolOutlined style={{ marginRight: "8px" }} />{" "}
                        <h3>Tecnologías de Software</h3>
                    </div>
                </Divider>
            </div>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <h4>Back-End</h4>
            <ul>
                <li>ASP.NET</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>SQL Server</li>
                <li>PHP</li>
            </ul>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <h4>Front-End</h4>
            <ul>
                <li>React Js</li>
                <li>Material UI</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JQuery</li>
                <li>Flutter</li>
            </ul>
        </Col>
        <Col>
            <h4>Herramientas de Software</h4>
            <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>Visual Studio</li>
                <li>Visual Code</li>
                <li>Jira</li>
                <li>Postman</li>
            </ul>
        </Col>
    </>
}

export default Technologies;