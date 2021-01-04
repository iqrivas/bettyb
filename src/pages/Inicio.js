import React from "react";
import bettyb from "../images/bettyb.jpg";

class Inicio extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="main-image">
                    <img src={bettyb} alt="Betty Barreto"/>
                </div>
                <div class="content">
                    <div class="card">
                        <h1>Pr&oacute;ximo Taller</h1>
                        <p>"Sana tus heridas y conecta con tu coraz&oacute;n"</p>
                        <p>S&aacute;bado 17 de Octubre 2020</p>
                        <a href="https://www.facebook.com/bettybarretopage/" rel="noopener noreferrer" target="_blank" class="highlight">Solicitar
                            Informaci&oacute;n</a>
                    </div>
                    <div class="card">
                        <h1>Pr&oacute;xima Meditaci&oacute;n</h1>
                        <p>"Intención, Atención y Manifestación"</p>
                        <p>Jueves 1 de Octubre 2020</p>
                        <a href="https://www.facebook.com/groups/1220010031682286" rel="noopener noreferrer" target="_blank" class="highlight">Únete
                            a Meditaciones Guiadas</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Inicio;