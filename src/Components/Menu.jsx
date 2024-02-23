import React, { useState } from 'react';
import { MenuItem, Icon, Menu } from 'semantic-ui-react';

const MenuExampleLabeledIcons = () => {
    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <Menu icon='labeled'>
            <MenuItem name='home' active={activeItem === 'home'} onClick={handleItemClick}>
                <Icon name='home' />
                Games
            </MenuItem>

            <MenuItem name='creditCard' active={activeItem === 'creditCard'} onClick={handleItemClick}>
                <Icon name='credit card alternative' />
                Card
            </MenuItem>

            <MenuItem
                name='soon'
                // active={activeItem === 'soon'}
                // onClick={handleItemClick}
            >
                <Icon name='ellipsis horizontal' />
                Soon
            </MenuItem>
        </Menu>
    );
};

export default MenuExampleLabeledIcons;
