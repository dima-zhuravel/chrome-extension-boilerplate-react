import React from 'react';
import { GridRow, GridColumn, Grid } from 'semantic-ui-react';
import { uid } from 'react-uid';

import HeadTitle from '../HeadTitle';

const GridPortal = ({ linksArr, title, icon }) => (
    <Grid>
        <HeadTitle title={title} icon={icon} />
        <GridRow columns={4}>
            {linksArr.map(({ url, bio }, index) => (
                <GridColumn key={uid(bio, index)}>
                    <a href={url} target='__blank' className='grid-item__link'>
                        <div className='grid-item__inner'>
                            <div className='grid-item__bio'>{bio}</div>
                        </div>
                    </a>
                </GridColumn>
            ))}
        </GridRow>
    </Grid>
);

export default GridPortal;
