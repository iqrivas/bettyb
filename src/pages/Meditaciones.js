import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class Meditaciones extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className="event taller">
                    <Card >
                        <Card.Body>
                            <Card.Title>¿Quieres aprender a meditar? 🧘🏻‍♀️</Card.Title>
                            <Card.Text>
                                <span> Te invito a mi grupo de Meditación donde nos reunimos cada mes en luna llena en una meditación guiada y donde platicamos sobre diferentes temas de bienestar.
                                        Aprenderás: <br/>
                                        <span>
                                        Principios básicos de meditación * Técnicas de respiración y de meditación * Técnicas para una atención plena / mindfulness. *
                                        Meditación guiada.
                                        </span>
                                        <br/>
                                        No necesitas ningún conocimiento previo ✨
                                </span>
                            </Card.Text>
                            <Card.Link href="https://www.facebook.com/groups/1220010031682286" rel="noopener noreferrer" target="_blank" className="highlight">Únete en Facebook</Card.Link>
                        </Card.Body>
                    </Card>
                </Container>

                    <div className="event">
                        <h2>Soltar para crear espacio</h2>
                        <p>Meditación de Luna Llena <br />Fecha: Lunes 30 de Noviembre 2020</p>
                        <a href="https://www.facebook.com/beatriz.barreto1006/videos/10158873937848197" rel="noopener noreferrer" target="_blank"
                            className="highlight">Ver video</a>
                    </div>
                    <div className="event">
                        <h2>Rituales y Psicomagia</h2>
                        <p>Meditación de Luna Llena <br />Fecha: Viernes 30 de Octubre 2020</p>
                        <a href="https://www.facebook.com/beatriz.barreto1006/videos/10158801810288197" rel="noopener noreferrer" target="_blank"
                            className="highlight">Ver video</a>
                    </div>
                    <div className="event">
                        <h2>Intención, Atención y Manifestación</h2>
                        <p>Meditación de Luna Llena <br />Fecha: Jueves 1 de Octubre 2020</p>
                        <a href="https://www.facebook.com/beatriz.barreto1006/videos/10158735733293197" rel="noopener noreferrer" target="_blank"
                            className="highlight">Ver video</a>
                    </div>
                    <div className="event">
                        <h2>Bloqueos y resistencias</h2>
                        <p>Meditación de Luna Llena <br />Fecha: Jueves 3 de Septiembre 2020</p>
                        <a href="https://www.facebook.com/beatriz.barreto1006/videos/10158669775638197" rel="noopener noreferrer" target="_blank"
                            className="highlight">Ver video</a>
                    </div>
                    <div className="event">
                        <h2>Iniciar un Proyecto - Conectar con el éxito</h2>
                        <p>Meditación de Luna Llena <br />Fecha: 3 de Agosto 2020</p>
                        <a href="https://www.facebook.com/beatriz.barreto1006/videos/10158595670113197" rel="noopener noreferrer" target="_blank"
                            className="highlight">Ver video</a>
                    </div>
            </React.Fragment>
        );
    }
}

export default Meditaciones;