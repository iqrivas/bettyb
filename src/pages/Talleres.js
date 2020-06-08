import React from 'react';
import Taller from '../components/Taller';

class Talleres extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Taller />
                <Taller />
                <Taller />
            </React.Fragment>
        );
    }
}

export default Talleres;