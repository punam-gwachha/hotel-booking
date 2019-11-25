import React, { Component } from "react";
import "./../section.css";
import { Col, Row, Container, Image, Card } from "react-bootstrap";
import Title from "../../../common/Title";
import styled from "styled-components";

export default class CardSection extends Component {
  state = {
    data: [
      {
        id: 1,
        title: "Russia",
        image: require("../../../image/saintcathedral.jpeg"),
        location: "saint Basil's Cathedral,Moscow Russia",
        description:
          " Add a description of the image.Some quick example text to build on the card title and make up the bulk of the card's content."
      },

      {
        id: 2,
        title: "Russia",
        image: require("../../../image/suzdal.jpeg"),
        location: " suzdal, Traditional and Vernacular Building",
        description:
          "Add a description of the image.Some quick example text to build on the card title and make up the bulk of the card'scontent."
      },

      {
        id: 3,
        title: "Russia",
        image: require("../../../image/suzdal.jpeg"),
        location: " suzdal,Traditional and Vernacular Building",
        description:
          "Add a description of the image.Some quick example text to build on the card title and make up the bulk of the card's content."
      }
    ]
  };

  render() {
    return (
      <CardWrapper>
        <Container>
          <Title
            title="Most Popular Hotel"
            fontSize={22}
            center={false}
            fontWeight={700}
            color="#000"
          />
          <Row>
            {this.state.data.map(data => {
              return (
                <Col className="max-auto mt-3" md={4} sm={10}>
                  <Card>
                    <Image src={data.image} className="src" />
                    <h2>
                      Night per person <br />
                      €60
                    </h2>
                    <Card.Body>
                      <Card.Title>
                        <h6>{data.title}</h6>
                        <i class="fas fa-sm fa-map-marker-alt"></i>{" "}
                        <a href="#">{data.location}</a>
                      </Card.Title>
                      <Card.Text>{data.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </CardWrapper>
    );
  }
}

const CardWrapper = styled.div`
  font-family: "Poppins", sans-serif;
  padding: 40px 0;
  .card {
    border: none;
    box-shadow: 0px 0px 5px 0px rgb(184, 184, 184);
    font-family: "Roboto", sans-serif;
  }
`;
