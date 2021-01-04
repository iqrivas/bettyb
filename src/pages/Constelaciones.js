import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class Constelaciones extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className="event taller">
                    <Card >
                        <Card.Body>
                            <Card.Title>Constelaciones Familiares Terapia Sistémica Sanación PNL</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Citas: bettybarreto_citas@outlook.com</Card.Subtitle>
                            <Card.Text>
                            <span> El método terapéutico de constelaciones familiares nos apoya a abrirnos y tener una
                                mirada mas amplia una “mirada sistémica”, no solo mental si no desde lo mas profundo el alma, 
                                es abrirnos a lo que el inconsciente individual y familiar quiere que reparemos es abrirnos a la conciencia  abrirnos al amor, 
                                a la reconciliación y a las posibilidades infinitas 💕💖 <br/><br/>
                                ¡Ven a constelar! Estoy para ti estoy para guiarte. 😉✨🙌🏼
                            </span>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Container>
            </React.Fragment>
        );
    }
}

export default Constelaciones;