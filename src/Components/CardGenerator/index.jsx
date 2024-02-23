import React from 'react';

import CardGeneratorForm from './CardGeneratorForm';
import HeadTitle from '../HeadTitle';

const CardGenerator = () => (
    <div className='card-gen'>
        <HeadTitle title='GENERATOR' icon='medapps' />
        <CardGeneratorForm />
    </div>
);

export default CardGenerator;
