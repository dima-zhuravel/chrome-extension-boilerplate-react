import React from 'react';

import GridPortal from './GridPortal';

const stgUrls = [
    { url: 'https://fabvegas-stg-admin.mhub2.com/home', bio: 'FV' },
    { url: 'https://sunvegas-stg-admin.mhub2.com/home', bio: 'SV' },
    { url: 'https://fabulousbingo-stg-admin.mhub2.com/home', bio: 'FB' },
    { url: 'https://sunbingo-stg-admin.mhub2.com/home', bio: 'SB' }
];

const GridPortals = () => (
    <div className='portal__section'>
        <GridPortal title='STAGE' icon='gem outline' linksArr={stgUrls} />
        <GridPortal title='PORTAL ADMIN' icon='podcast' linksArr={stgUrls} />
        <GridPortal title='CDN' icon='keycdn' linksArr={stgUrls} />
        <GridPortal title='PRODUCTION' icon='envira gallery' linksArr={stgUrls} />
    </div>
);

export default GridPortals;
