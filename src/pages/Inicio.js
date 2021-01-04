import React from "react";
import bettyb from "../images/bettyb.jpg";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class Inicio extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className="event taller">
                    <Card >
                        <Card.Body>
                            <Card.Title>¡Hola! Soy Betty Barreto</Card.Title>
                            <Card.Text>
                                <span> 
                                    Te doy la bienvenida a este espacio de sanación y crecimiento.
                                    Sígueme en mis redes sociales para estar al tanto de nuestros próximos eventos.
                                </span>
                            </Card.Text>
                            <Card.Link href="https://www.facebook.com/bettybarretopage/" rel="noopener noreferrer" target="_blank" className="highlight">Facebook</Card.Link>
                            <Card.Link href="https://www.facebook.com/groups/1220010031682286" rel="noopener noreferrer" target="_blank" className="highlight">Grupo de Meditaciones Guiadas</Card.Link>
                            <Card.Link href="https://www.instagram.com/bettybarreto.conecta/" rel="noopener noreferrer" target="_blank" className="highlight">Instagram</Card.Link>
                        </Card.Body>
                    </Card>
                </Container>

                <div className="main-image">
                    <img src={bettyb} alt="Betty Barreto"/>
                </div>
            </React.Fragment>
        );
    }
}

export default Inicio;