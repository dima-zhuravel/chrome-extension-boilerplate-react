import React from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';

const UserRegistration = () => {
    return (
        <div className='user-registration'>
            <Header as='h2' icon>
                <span className='header__title'>
                    <Icon className='header__title-icon' name='medapps' />
                    <span className='header__title-text'>USER REGISTRATION</span>
                </span>
            </Header>

            <Button content='CLICK ME' />
        </div>
    );
};

export default UserRegistration;
