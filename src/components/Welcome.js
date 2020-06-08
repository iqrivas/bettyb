import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class Welcome extends React.Component {
    render() {
        return (
            <Container fluid >
                <Jumbotron >
                    <Container>
                        <h1>Constelaciones Familiares</h1>
                        <blockquote class="blockquote">
                            <p class="mb-0">En todos los sistemas el amor está, lo único que hay que hacer es dejar que fluya,
                            cuando no fluye es porque hay un desorden y lo que hay que respetar son los órdenes del amor.</p>
                            <footer class="blockquote-footer">B. Hellinger</footer>
                        </blockquote>
                        <ul>
                            <li>¿Qué son las Constelaciones Familiares?</li>
                            <li>¿Cómo pueden ayudar a mejorar mi vida?</li>
                            <li>¿Qué son los órdenes del amor?</li>
                            <li>¿Cómo influyen en la realización de vida?</li>
                        </ul>
                        <p>
                            <Button variant="primary">Vamos a Constelar</Button>
                        </p>
                    </Container>
                </Jumbotron>
            </Container>
        );
    }
}

export default Welcome;