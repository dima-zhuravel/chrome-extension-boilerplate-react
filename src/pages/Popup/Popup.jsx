import React, { useContext } from 'react';
import 'semantic-ui-css/semantic.css';

import Menu from '../../components/Menu';
import GridPortals from '../../components/GridPortals';
import CardGenerator from '../../components/CardGenerator';
import GlobalStateProvider from '../../components/GlobalStateProvider';
import FixStampGenerator from '../../components/FixStampGenerator';
import UserRegistration from '../../components/UserRegistration';
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
            {state.navigation.activeMenu === 'fixStamp' && <FixStampGenerator />}
            {state.navigation.activeMenu === 'userRegistration' && <UserRegistration />}
        </div>
    );
};

const Popup = () => (
    <GlobalStateProvider>
        <PopupContent />
    </GlobalStateProvider>
);

export default Popup;
