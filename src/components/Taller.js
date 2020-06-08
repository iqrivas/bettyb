import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class Taller extends React.Component {
    render() {
        return (
            <Container fluid class="mx-auto">
                <Card>
                    <Card.Body>
                        <Card.Title>Taller: "Sana tus heridas del alma y conecta con tu corazón"</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Inicio: 18 de Mayo</Card.Subtitle>
                        <Card.Text>
                            Te preguntarás ¿Cuáles son estas heridas?<br />
                            Rechazo, Abandono, Humillación, Injusticia y Traición.<br />
                            <p>Todos las tenemos pero hay una con la que regimos nuestra vida y traemos puesta una máscara que la oculta.</p>
                            <p>Este taller es teórico y práctico. Son 5 clases en las que vamos a tocar/profundizar cada una de estas heridas, haremos ejercicios y vamos a sanar la máscara con la que nos mostramos al mundo.</p>
                        </Card.Text>
                        <Card.Link href="#">Solicita Información</Card.Link>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default Taller;