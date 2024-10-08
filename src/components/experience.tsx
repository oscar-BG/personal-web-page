import { FolderOpenOutlined } from "@ant-design/icons";
import { cilBuilding } from "@coreui/icons";
import { CIcon } from "@coreui/icons-react";
import { Divider, Steps } from "antd";

const Experience: React.FC = () => {
    return <>
        <Divider orientation="left">
            <div style={{ display: "flex", alignItems: "center" }}>
            <FolderOpenOutlined style={{ marginRight: "8px" }} />
            <h3>Experiencia</h3>
            </div>
        </Divider>

        <Steps
            direction="vertical"
            current={0}
            items={[
            {
                title: (
                <div>
                    <h4>Programador Web Jr</h4>
                    <h4>Idare MX</h4>
                    <h5 style={{ fontStyle: "italic" }}>
                    Julio 2022 - Septiembre 2024 (+ 2 años y 3 meses)
                    </h5>
                </div>
                ),
                icon: <CIcon icon={cilBuilding} style={{ color: "black" }} />,
                description: (
                <div>
                    <p>
                    Desarrollar funcionalidades específicas y mantenimiento
                    de software existente. Durante mi instancia en la
                    empresa desarrollamos aplicaciones móviles para la venta
                    de refacciones de vehículos en la que dentro de mis
                    actividades estuvieron las siguientes responsabilidades.
                    </p>
                    <br></br>
                    <h4>Tecnologías principales </h4>
                    <ul>
                    <li>PHP 8.2</li>
                    <li>JavaScript</li>
                    <li>PostgreSQL</li>
                    </ul>
                    <br></br>
                    <h4>Responsabilidades</h4>
                    <ul>
                    <li>
                        Administración de la base de datos (PostgreSQL y
                        MySQL){" "}
                    </li>
                    <li>Implementación deWebServices con PHP</li>
                    <li>
                        Integración de WebServices con aplicación móvil
                        (Flutter)
                    </li>
                    <li>Integración de pasarela de pago</li>
                    <li>Consumo de APIS con PHP</li>
                    <li>Desplegar contenedor con Docker</li>
                    <li>Desarrollo de APIS RESTFul con ASP.NET</li>
                    <li>
                        Desarrollo de interfaces graficas (Móviles y Web)
                    </li>
                    <li>
                        Maquetación web (HTML, JavaScript, JQuery, React Js)
                    </li>
                    </ul>
                </div>
                ),
            },
            ]}
        ></Steps>
    </>
}

export default Experience;