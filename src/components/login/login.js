import React from "react";
import logo from '../../logo_principal.png';
import './login.css';
import { Container, Card, Form, Button, Row, Col, Image } from "react-bootstrap";
import consultas_User from "../../servicios/service_user";
const validar= new consultas_User();

class login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      usuario:'',
      contraseña:''
    };
  };
  iniciarSesion(){
    console.log(this.state.usuario);
    console.log(this.state.contraseña);
      validar.verificar_user({
      usuario:this.state.usuario,
      pass:this.state.contraseña
    });
    
  }
  render() {
    return (
      <Container id="login-container">
        <Row style={{textAlign:"left", maxWidth:'100%'}} className="justify-content-md-center">
          <Col sm="12" xs="12" md="auto" lg="auto" xl="auto">
            <Card style={{width:'25rem', borderColor:'#332e7a'}}>
                
                <Card.Title>
                <Row className="align-items-center"  >  
                    <Col style={{fontSize: '1.8rem', marginTop:'1.5rem', marginLeft:'2rem'}} ><Image src={logo}  style={{width:'30%'}} rounded/> Iniciar Sesión</Col>
                </Row>
                </Card.Title>
                <Card.Header style={{background:'none'}}></Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{float:'left'}} >Usuario</Form.Label>
                    <Form.Control onChange={(e)=>this.setState({usuario:e.target.value})} type="text" placeholder="Ingrese Usuario" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label  style={{float:'left'}}>Contraseña</Form.Label>
                    <Form.Control onChange={(e)=>this.setState({contraseña:e.target.value})} type="password" placeholder="Contraseña" />
                  </Form.Group>
                  <Button
                  variant="primary"
                  style={{marginTop: 20,
                          width:'100%',
                          }}
                  onClick={()=>{
                        this.iniciarSesion();
                  }}
                  >
                    Ingresar
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default login;
