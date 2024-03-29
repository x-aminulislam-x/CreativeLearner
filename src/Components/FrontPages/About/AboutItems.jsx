import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useEffect, useState } from "react";
import aboutData from "../../../Assets/data/aboutData.json";

const AboutItems = () => {
  const [abouts, setAboutAll] = useState(aboutData);

  console.log(abouts);

  useEffect(() => {
    setAboutAll(abouts);
  }, [abouts]);

  return (
    <>
      <Row justify="center" align="middle">
        {abouts.length === 0 && <h3> Not Any Data </h3>}

        {abouts.map((about) => (
          <Col xs={23} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <Card
              cover={<img alt={about.name} src={about.image} />}
              style={{
                margin: "2rem",
                backgroundColor: "transparent",
                height: "100%",
              }}
            >
              <Meta title={about.name} description={about.title} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AboutItems;
