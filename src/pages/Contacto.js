import React from 'react';

class Contacto extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="content">
                <div class="card">
                    <h1>@bettybarretopage</h1>
                    <p>Página Principal en Facebook <br /> Manténte informado de las últimas noticias.</p>
                    <a href="https://www.facebook.com/bettybarretopage/" rel="noopener noreferrer" target="_blank" class="highlight">Sígueme</a>
                </div>
                <div class="card">
                    <h1>Meditaciones Guiadas</h1>
                    <p>Grupo con streaming de las meditaciones</p>
                    <a href="https://www.facebook.com/groups/1220010031682286" rel="noopener noreferrer" target="_blank" class="highlight">Únete
                        a Meditaciones Guiadas</a>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Contacto;