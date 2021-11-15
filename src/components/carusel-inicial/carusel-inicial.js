import React from "react";
import image from "../../images/MERN.jpg";
import image2 from "../../images/MERN2.png";
import { Carousel } from "react-bootstrap";

export default class CarouselInicial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={image} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
        <Carousel.Caption>
            <h3>CRUD MERN</h3>
            <p>Bienvenidos a nuestro proyecto</p>
          </Carousel.Caption>
      </div>
    );
  }
}
