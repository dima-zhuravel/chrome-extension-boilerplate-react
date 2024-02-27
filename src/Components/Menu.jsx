import React, { useState, useContext } from 'react';
import { MenuItem, Icon, Menu } from 'semantic-ui-react';

import GlobalStateContext from '../store/context';
import { setActiveMenu } from '../store/actions';

const MenuComponent = () => {
    const [activeItem, setActiveItem] = useState('home');
    const { dispatch } = useContext(GlobalStateContext);

    const handleItemClick = (e, { name }) => {
        dispatch(setActiveMenu(name));
        setActiveItem(name);
    };

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

            <MenuItem name='fixStamp' active={activeItem === 'fixStamp'} onClick={handleItemClick}>
                <Icon name='xing' />
                Fix Stamp
            </MenuItem>

            <MenuItem name='soon'>
                <Icon name='user circle' />
                User Registration
            </MenuItem>
        </Menu>
    );
};

export default MenuComponent;
