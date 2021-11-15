import React from "react";
import Menu from "../navbar/navbar";
//import logo from "../../logo_principal.png";
import Nosotros from "../nosotros/nosotros";
import NuestroProyecto from "../nuestro-proyecto/nuestro-proyecto.js";
import { Container} from "react-bootstrap";
import CarouselInicial from "../carusel-inicial/carusel-inicial";
import Footer from "../footer/footer";


const inicio = () => {
  return (
    <div>
      <Container id="Inicio" style={{ marginBottom: "5%" }}>
        <Menu></Menu>
      </Container>
      <br />
      <Container>
        <CarouselInicial style={{ marginBottom: "5%" }}></CarouselInicial>
        <br />
        <Nosotros style={{ marginBottom: "5%" }}></Nosotros>
        <br />
        <NuestroProyecto style={{ marginBottom: "5%" }}></NuestroProyecto>
        <br/>
        <Footer style={{ marginTop: "5%"}}></Footer>
      </Container>
      
 
    </div>
  );
};

export default inicio;
