import { UserOutlined } from "@ant-design/icons";
import { Divider } from "antd";

const AboutMe: React.FC = () => {
    return <>
        <Divider orientation="left">
            <div style={{ display: "flex", alignItems: "center" }}>
                <UserOutlined style={{ marginRight: "8px" }} />{" "}
                <h3>Sobre mí</h3>
            </div>
        </Divider>
        <p>
            Desarrollador Web con experiencia en <strong>React JS</strong>,{" "}
            <strong>ASP.NET</strong>, <strong> PHP </strong>, y manejo de base
            de datos relacionales <strong>(MySql y PostgreSQL)</strong>.
            <br /> Con 2 años de experiencia en desarrollo de Software,
            trabajando con la implementación de aplicaciones para el uso a
            medida de los usuarios y los clientes, mi trabajo consiste en la
            interpretación de los requerimientos.
            <br />
            Actualmente estoy tomando un curso de <strong>
                Laravel
            </strong>{" "}
            para mejorar mis habilidades y ampliar las herramientas con las
            que trabajo. Elegí el framework Laravel por que PHP es uno de los
            lenguajes de programación con los que tengo más experiencia.
        </p>
    </>
}

export default AboutMe;