import Icon from "@ant-design/icons";
import { cilInstitution, cilSchool } from "@coreui/icons";
import { CIcon } from "@coreui/icons-react";
import { Divider, Steps } from "antd";

import React from "react";

const Education: React.FC = () => {
    return <>
        <Divider orientation="left">
            <div style={{ display: "flex", alignItems: "center" }}>
                {/* <FolderOpenOutlined  style={{ marginRight : '8px'}}/> */}
                <Icon style={{ marginRight: "8px" }}>
                    <CIcon icon={cilSchool} style={{ marginRight: "8px" }} />
                </Icon>
                <h3>Educación</h3>
            </div>
        </Divider>

        <Steps
            direction="vertical"
            current={0}
            items={[
                {
                    title: (
                        <div>
                            <h4>Ing. En Desarrollo de Software</h4>
                            <h4>DASC Instituto Tecnológico Universitario</h4>
                            <h5 style={{ fontStyle: "italic" }}>
                                2018 - 2022 Licenciatura Terminada
                            </h5>
                        </div>
                    ),
                    icon: (
                        <CIcon icon={cilInstitution} style={{ color: "black" }} />
                    ),
                },
            ]}
        ></Steps>
    </>
}

export default Education;