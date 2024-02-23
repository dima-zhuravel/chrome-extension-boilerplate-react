import React, { useContext } from 'react';
import 'semantic-ui-css/semantic.css';

import Menu from '../../Components/Menu';
import GridPortals from '../../Components/GridPortals';
import CardGenerator from '../../Components/CardGenerator';
import GlobalStateProvider from '../../Components/GlobalStateProvider';
import GlobalStateContext from '../../store/context';

import './Popup.css';
import './Popup.scss';

const PopupContent = () => {
    const { state } = useContext(GlobalStateContext);

    return (
        <div className='application-root'>
            <Menu />
            {state.navigation.activeMenu === 'home' && <GridPortals />}
            {state.navigation.activeMenu === 'creditCard' && <CardGenerator />}
        </div>
    );
};

const Popup = () => (
    <GlobalStateProvider>
        <PopupContent />
    </GlobalStateProvider>
);

export default Popup;
