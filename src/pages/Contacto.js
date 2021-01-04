import React from 'react';

class Contacto extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="content mx-auto">
                <div className="event">
                    <h2>@bettybarretopage</h2>
                    <p>Página Principal en Facebook <br /> Manténte informado de las últimas noticias.</p>
                    <a href="https://www.facebook.com/bettybarretopage/" rel="noopener noreferrer" target="_blank" className="highlight">Sígueme</a>
                </div>
                <div className="event">
                    <h2>Meditaciones Guiadas</h2>
                    <p>Grupo con streaming de las meditaciones</p><br/>
                    <a href="https://www.facebook.com/groups/1220010031682286" rel="noopener noreferrer" target="_blank" className="highlight">Únete
                        a Meditaciones Guiadas</a>
                </div>
                <div className="event">
                    <h2>bettybarreto.conecta</h2>
                    <p>Página Principal en Instagram <br /> Inspiracion para tu día a día </p>
                    <a href="https://www.instagram.com/bettybarreto.conecta/" rel="noopener noreferrer" target="_blank" className="highlight">Sígueme</a>
                </div>
                <div className="event">
                    <h2>Constelaciones Familiares</h2>
                    <p>Sesiones Individuales con previa cita. <br/> <b>Email: bettybarreto_citas@outlook.com</b> </p>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Contacto;