import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import CardGeneratorForm from './CardGeneratorForm';

const CardGenerator = () => (
    <div className='card-gen'>
        <Header as='h2' icon>
            <span className='header__title'>
                <Icon className='header__title-icon' name='medapps' />
                <span className='header__title-text'>CARD NUMBER GENERATOR</span>
            </span>
        </Header>
        <CardGeneratorForm />
    </div>
);

export default CardGenerator;
