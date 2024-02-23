import React from 'react';
import 'semantic-ui-css/semantic.css';

import Menu from './components/Menu';
import GridPortals from './components/GridPortals';

import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
    return (
        <div className='App'>
            <Menu />
            <GridPortals />
        </div>
    );
};

export default Newtab;
