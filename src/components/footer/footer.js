import React, { Component } from "react";
import { Navbar, Container, Card } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar fixed="botton" bg="dark" variant="dark" expand="lg">
          <Container>
            <Card text="white" bg="dark">
              <Card.Text style={{ textAlign: "left" }}>
                Desarrollo de apliciones Web
                <br />
                MINTIC 2022
                <br />
                Universidad Tecnólogica de Pereira
              </Card.Text>
            </Card>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
