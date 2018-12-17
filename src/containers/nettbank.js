import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Konto from '../components/konto';

export default class Nettbank extends React.Component {

    constructor() {
        super();
        this.state = {
            profil: {
                navn: '',
                epost: '',
                kontoer: [
                    { navn: 'Brukskonto', kontonummer: '12345678', sum: 0 },
                    { navn: 'Sparekonto', kontonummer: '66666666', sum: 0 }
                ]
            }
        };
    }

    render() {
        return (
            <div>
                <AppBar className="header" title={'Blakk'}>Blakk Sparebank</AppBar>
                <div>
                    <div>Navn: </div>
                </div>
                <div className="content">
                    {this.state.profil.kontoer ? this.state.profil.kontoer.map(konto => {
                        return <Konto key={konto.kontonummer} konto={konto} />;
                    }) : 'Laster kontoliste...'}
                    
                </div>
            </div>
        );
    }

}