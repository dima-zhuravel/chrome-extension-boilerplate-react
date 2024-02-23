import React from 'react';
import 'semantic-ui-css/semantic.css';

import Menu from '../../Components/Menu';
import GridPortals from '../../Components/GridPortals';
import CardGenerator from '../../Components/CardGenerator';

import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
    return (
        <div className='application-root'>
            <Menu />
            {/* <GridPortals /> */}
            <CardGenerator />
        </div>
    );
};

export default Newtab;
