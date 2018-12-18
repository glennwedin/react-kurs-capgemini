import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Konto from '../components/konto';
import User from '../components/user';

export default class Nettbank extends React.Component {
    constructor() {
        super();
        this.state = {
            profil: {
                navn: 'Arne Belinda',
                fnr: '12345678912',
                epost: 'arne.belinda@eika.no',
                kontoer: [
                    { navn: 'Brukskonto', kontonummer: '12345678', sum: 24000 },
                    { navn: 'Sparekonto', kontonummer: '66666666', sum: 10 }
                ]
            }
        };
    }

    render() {
        return (
            <div>
                <AppBar className="header" title={'Blakk'}>
                    Blakk Sparebank
                </AppBar>
                <User profil={this.state.profil} />
                <div className="content">
                    {this.state.profil.kontoer
                        ? this.state.profil.kontoer.map(konto => {
                              return (
                                  <Konto
                                      key={konto.kontonummer}
                                      konto={konto}
                                  />
                              );
                          })
                        : 'Laster kontoliste...'}
                </div>
            </div>
        );
    }
}
