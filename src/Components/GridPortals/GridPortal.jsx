import React from 'react';
import { GridRow, GridColumn, Grid, Header, Icon } from 'semantic-ui-react';
import { uid } from 'react-uid';

const GridPortal = ({ linksArr, title, icon, tooltipId }) => (
    <Grid>
        <Header as='h2' icon>
            <span className='header__title'>
                <Icon className='header__title-icon' name={icon} />
                <span className='header__title-text'>{title}</span>
            </span>
        </Header>
        <GridRow columns={4}>
            {linksArr.map(({ url, bio }, index) => (
                <GridColumn key={uid(bio, index)}>
                    <div className='grid-item__wrapper'>
                        <div className='grid-item__links-section'>
                            {Array.isArray(url) ? (
                                <>
                                    <a
                                        href={url[0]}
                                        target='__blank'
                                        className='grid-item__link grid-item__portal'
                                        data-tooltip-id={tooltipId}
                                        data-tooltip-content='Portal'
                                        data-tooltip-delay-show={1000}
                                    ></a>
                                    <a
                                        href={url[1]}
                                        target='__blank'
                                        className='grid-item__link grid-item__portal-admin'
                                        data-tooltip-id={tooltipId}
                                        data-tooltip-content='Admin'
                                        data-tooltip-delay-show={1000}
                                    ></a>
                                </>
                            ) : (
                                <a
                                    href={url}
                                    target='__blank'
                                    className='grid-item__link'
                                    data-tooltip-id={tooltipId}
                                    data-tooltip-content='Admin'
                                    data-tooltip-delay-show={1000}
                                ></a>
                            )}
                        </div>
                        <div className='grid-item__inner'>
                            <div className='grid-item__bio'>{bio}</div>
                        </div>
                    </div>
                </GridColumn>
            ))}
        </GridRow>
    </Grid>
);

export default GridPortal;
