import React from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { fetchAccount } from '../actions/main';
import Konto from '../components/konto';
import User from '../components/user';

class Nettbank extends React.Component {
    static propTypes = {
        fetchAccount: func,
        profil: object,
        history: object
    };

    constructor() {
        super();

        this.goToRoute = this.goToRoute.bind(this);
    }

    componentDidMount() {
        // kalle på redux
        this.props.fetchAccount();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props);
    }

    goToRoute() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <AppBar className="header" title={'Blakk'}>
                    Blakk Sparebank
                </AppBar>
                {this.props.profil ? (
                    <div>
                        <User profil={this.props.profil} />
                        <button onClick={this.goToRoute}>Knapp</button>

                        <div className="content">
                            {this.props.profil.kontoer
                                ? this.props.profil.kontoer.map(konto => {
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
                ) : null}
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            profil: state.kontoReducer.profil
        };
    },
    {
        fetchAccount
    }
)(Nettbank);
