import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { Theme } from '../../enums/themes';
import { IThemeState } from '../../Redux/slices/themeSlice';
import ExampleMarketPageC from './ExampleMarketPageC';
import ExampleMarketPageD from './ExampleMarketPageD';
import ExampleMarketPageA from './ExamplePageA';
import ExampleMarketPageB from './ExamplePageB';

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        fontFamily: 'Roboto Slab, serif',
        flexFlow: 'column',
        lineHeight: 'normal',
        height: '100%',
        position: 'absolute',
        width: '100%',

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
        height: '66%',
        width: '40%',
        transition: 'background-color .4s linear, border .2s ease-in-out',
        overflowY: 'auto',
        position: 'relative',
        '&:hover': {
            transition: 'border .2s ease-in-out',
            border: 'solid 5px #3effdb',
        },

        '&::-webkit-scrollbar': {
            width: '0.4em',
            height: '10px !important'
        },

        '&::-webkit-scrollbar-track': {
            padding: '0 16px'
        },

        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#5141f1',
            borderRadius: '8px',
            border: 'solid 2px black',
            marginLeft: '10px',
            transition: 'border .4s linear',
        }

    },
    noOverflow: {
        overflow: 'visible'
    },
    example_site_container_night: {
        backgroundColor: 'black',
        transition: 'background-color .4s linear',

        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#5141f1',
            borderRadius: '8px',
            border: 'solid 2px white',
            marginLeft: '10px',
            transition: 'border .4s linear',
        }
    }

});

const ExampleMarketPages = () => {
    const classes = useStyles();
    const { theme = {} } = useSelector((state: IThemeState): IThemeState => state.theme)
    const lightMode = theme === Theme.Light;

    return (
        <div className={classes.container}>
            <div
                className={classes.sub_container}
            >

                <div className={`${classes.example_site_container} ${lightMode ? '' : classes.example_site_container_night}`}>
                    <ExampleMarketPageA />
                </div>
                <div
                    className={`${classes.example_site_container} ${lightMode ? '' : classes.example_site_container_night}`}
                    style={{ overflowY: 'visible' }}
                >
                    <ExampleMarketPageB />
                </div>

            </div>
            <div
                className={classes.sub_container}
            >
                <div className={`${classes.example_site_container} ${lightMode ? '' : classes.example_site_container_night}`}>
                    <ExampleMarketPageC />
                </div>
                <div className={`${classes.example_site_container} ${lightMode ? '' : classes.example_site_container_night}`}
                    style={{ scrollSnapType: 'y mandatory' }}
                >
                    <ExampleMarketPageD />
                </div>
            </div>
        </div>
    )
}

export default ExampleMarketPages;

