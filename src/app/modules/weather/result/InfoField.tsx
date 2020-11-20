import React from "react";
import Row from "antd/es/row";
import Col from "antd/es/col";

interface InfoFieldProps {
    label?: string;
    content: string | React.ReactNode;
}

export const InfoField = (props: InfoFieldProps) => {
    const { label, content } = props;
    return (
        <Row align="middle">
            {label &&
                <Col span={6}>
                    <span>{label}</span>
                </Col>
            }
            <Col>
                {content}
            </Col>
        </Row>
    );
};