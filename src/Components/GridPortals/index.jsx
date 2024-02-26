import React from 'react';
import { Tooltip } from 'react-tooltip';

import GridPortal from './GridPortal';

const stgUrls = [
    { url: ['https://fabvegas-stg-admin.mhub2.com/home', 'https://fabvegas-stg-admin.mhub2.com/admin'], bio: 'FV' },
    { url: ['https://sunvegas-stg-admin.mhub2.com/home', 'https://sunvegas-stg-admin.mhub2.com/admin'], bio: 'SV' },
    {
        url: ['https://fabulousbingo-stg-admin.mhub2.com/home', 'https://fabulousbingo-stg-admin.mhub2.com/admin'],
        bio: 'FB'
    },
    { url: ['https://sunbingo-stg-admin.mhub2.com/home', 'https://sunbingo-stg-admin.mhub2.com/admin'], bio: 'SB' }
];

const adminUrls = [
    {
        url: ['https://portal-admin2.fabulousvegas.co.uk', 'https://portal-admin2.fabulousvegas.co.uk/admin'],
        bio: 'FV'
    },
    { url: ['https://portal-admin2.thesunvegas.co.uk', 'https://portal-admin2.thesunvegas.co.uk/admin'], bio: 'SV' },
    {
        url: ['https://portal-admin2.fabulousbingo.co.uk', 'https://portal-admin2.fabulousbingo.co.uk/admin'],
        bio: 'FB'
    },
    { url: ['https://portal-admin2.sunbingo.co.uk', 'https://portal-admin2.sunbingo.co.uk/admin'], bio: 'SB' }
];

const cdnUrls = [
    { url: 'https://fabvegas-stg-cdn-live.ptstaging.eu', bio: 'FV' },
    { url: 'https://sunvegas-stg-cdn-live.ptstaging.eu', bio: 'SV' },
    { url: 'https://fabulousbingo-stg-cdn-live.ptstaging.eu', bio: 'FB' },
    { url: 'https://sunbingo-stg-cdn-live.ptstaging.eu', bio: 'SB' }
];

const prodUrls = [
    { url: 'https://www.fabulousvegas.co.uk', bio: 'FV' },
    { url: 'https://www.thesunvegas.co.uk', bio: 'SV' },
    { url: 'https://www.fabulousbingo.co.uk', bio: 'FB' },
    { url: 'https://www.sunbingo.co.uk', bio: 'SB' }
];

const GridPortals = () => (
    <div className='portal__section'>
        <GridPortal title='STG' icon='gem outline' linksArr={stgUrls} tooltipId='portal-tooltip-id' />
        <GridPortal title='ADMN' icon='podcast' linksArr={adminUrls} tooltipId='portal-tooltip-id' />
        <GridPortal title='PROD' icon='envira gallery' linksArr={prodUrls} tooltipId='portal-tooltip-id' />
        <GridPortal title='CDN' icon='keycdn' linksArr={cdnUrls} tooltipId='portal-tooltip-id' />
        <Tooltip id='portal-tooltip-id' place='right' className='tooltip' />
    </div>
);

export default GridPortals;
