import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class Taller extends React.Component {
    render() {
        return (
            <Container className="event taller">
                <Card >
                    <Card.Body>
                        <Card.Title>Taller: "Sana tus heridas del alma y conecta con tu corazón"</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Inicio: 18 de Mayo 2020</Card.Subtitle>
                        <Card.Text>
                            Te preguntarás ¿Cuáles son estas heridas?<br />
                            Rechazo, Abandono, Humillación, Injusticia y Traición.<br />
                            <span>Todos las tenemos pero hay una con la que regimos nuestra vida y traemos puesta una máscara que la oculta.</span>
                            <span>Este taller es teórico y práctico. Son 5 clases en las que vamos a tocar/profundizar cada una de estas heridas, haremos ejercicios y vamos a sanar la máscara con la que nos mostramos al mundo.</span>
                        </Card.Text>
                        <Card.Link href="#" className="highlight">Solicita Información</Card.Link>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default Taller;