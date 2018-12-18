import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { shape, string } from 'prop-types';

const User = props => {
    return (
        <Card className="profil">
            <CardHeader title={props.profil.navn} />
            <CardContent>
                <div>E-post: {props.profil.epost}</div>
                <div>Fødselsnummer: {props.profil.fnr}</div>
            </CardContent>
        </Card>
    );
};

User.propTypes = {
    profil: shape({
        navn: string,
        epost: string,
        fnr: string
    })
};

export default User;
