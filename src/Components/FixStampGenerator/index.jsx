import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import FixStampGeneratorForm from './FixStampGeneratorForm';

const FixStamp = () => {
    return (
        <div className='fix-stamp'>
            <Header as='h2' icon>
                <span className='header__title'>
                    <Icon className='header__title-icon' name='medapps' />
                    <span className='header__title-text'>FIX STAMP GENERATOR</span>
                </span>
            </Header>
            <FixStampGeneratorForm />
        </div>
    );
};

export default FixStamp;
