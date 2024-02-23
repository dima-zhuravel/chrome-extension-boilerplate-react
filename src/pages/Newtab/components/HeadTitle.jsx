import React from 'react';
import { HeaderSubheader, Header, Icon } from 'semantic-ui-react';

const HeadTitle = ({ title, subheaderTitle = null, icon }) => (
    <Header as='h2' icon>
        <span className='header__title'>
            {icon && <Icon className='header__title-icon' name={icon} />}
            <span className='header__title-text'>{title}</span>
        </span>
        {subheaderTitle && <HeaderSubheader>Manage your account settings and set e-mail preferences.</HeaderSubheader>}
    </Header>
);

export default HeadTitle;
