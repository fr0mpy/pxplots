import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { Theme } from '../../enums/themes';
import { IThemeState } from '../../Redux/slices/themeSlice';

const useStyles = createUseStyles({
    container: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        fontFamily: 'Roboto Slab, serif',
        display: 'flex',
        flexFlow: 'column'

    },
    sub_container: {
        height: '50%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    example_site_container: {
        backgroundColor: 'white',
        border: 'solid 5px #5141f1',
        borderRadius: '8px',
        boxShadow: 'rgb(0 0 0) 12px 12px 42px 0px',
        height: '18vw',
        width: '28vw',
        transition: 'background-color .4s linear',
    },
    example_site_container_night: {
        backgroundColor: 'black',
        transition: 'background-color .4s linear',
    }
});

const ExampleMarketPages = () => {
    const classes = useStyles();
    const { theme = {} } = useSelector((state: IThemeState): IThemeState => state.theme)
    const lightMode = theme === Theme.Light;

    return (
        <div className={classes.container}>
            <div className={classes.sub_container} style={{ marginTop: '60px' }}>
                <div className={`${classes.example_site_container} ${lightMode ? '' : classes.example_site_container_night}`}>

                </div>
                <div className={`${classes.example_site_container} ${lightMode ? '' : classes.example_site_container_night}`}>

                </div>
            </div>
            <div className={classes.sub_container} style={{ marginBottom: '60px' }}>
                <div className={`${classes.example_site_container} ${lightMode ? '' : classes.example_site_container_night}`}>

                </div>
                <div className={`${classes.example_site_container} ${lightMode ? '' : classes.example_site_container_night}`}>

                </div>
            </div>
        </div>
    )
}

export default ExampleMarketPages;

