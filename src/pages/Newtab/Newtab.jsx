import React, { useContext } from 'react';
import 'semantic-ui-css/semantic.css';

import Menu from '../../components/Menu';
import GridPortals from '../../components/GridPortals';
import CardGenerator from '../../components/CardGenerator';
import GlobalStateProvider from '../../components/GlobalStateProvider';
import GlobalStateContext from '../../store/context';

import './Newtab.css';
import './Newtab.scss';

const TabContent = () => {
    const { state } = useContext(GlobalStateContext);

    return (
        <div className='application-root'>
            <Menu />
            {state.navigation.activeMenu === 'home' && <GridPortals />}
            {state.navigation.activeMenu === 'creditCard' && <CardGenerator />}
        </div>
    );
};

const NewTab = () => (
    <GlobalStateProvider>
        <TabContent />
    </GlobalStateProvider>
);

export default NewTab;
