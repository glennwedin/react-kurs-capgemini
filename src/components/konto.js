import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { shape, string, number } from 'prop-types';

export default class Konto extends React.PureComponent {
    static propTypes = {
        konto: shape({
            navn: string.isRequired,
            kontonummer: string.isRequired,
            sum: number.isRequired
        })
    };

    render() {
        return (
            <Card className="account">
                <CardHeader title={this.props.konto.navn} />
                <CardContent>
                    <div>Kontonummer: {this.props.konto.kontonummer}</div>
                    <div>Sum: {this.props.konto.sum}</div>
                </CardContent>
                <Button>Oppdater konto</Button>
            </Card>
        );
    }
}
