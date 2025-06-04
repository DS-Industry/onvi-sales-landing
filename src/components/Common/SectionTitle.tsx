import { Row, Col, Typography } from "antd";
import type { FC } from "react";

const { Title, Paragraph, Text } = Typography;

type SectionTitleProps = {
  subtitle?: string;
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
};

const SectionTitle: FC<SectionTitleProps> = ({
  subtitle,
  title,
  paragraph,
  width = "635px",
  center = false,
}) => {
  return (
    <Row justify={center ? "center" : "start"}>
      <Col
        xs={24}
        style={{
          maxWidth: width,
          textAlign: center ? "center" : "left",
        }}
      >
        {subtitle && (
          <Text
            strong
            style={{ color: "#0B68E1", fontSize: "16px", display: "block", marginBottom: "8px" }}
          >
            {subtitle}
          </Text>
        )}

        <Title
          level={2}
          style={{
            marginBottom: "16px",
            color: "var(--color-text, #1F2937)",
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: 1.3,
          }}
        >
          {title}
        </Title>

        <Paragraph
          style={{
            fontSize: "1rem",
            color: "var(--color-body-color, #6B7280)",
            lineHeight: 1.75,
          }}
        >
          {paragraph}
        </Paragraph>
      </Col>
    </Row>
  );
};

export default SectionTitle;
