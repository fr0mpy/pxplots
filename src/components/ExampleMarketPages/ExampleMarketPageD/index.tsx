import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { XAxis } from '../../../enums';
import { Theme } from '../../../enums/themes';
import { IThemeState } from '../../../Redux/slices/themeSlice';

const useStyles = createUseStyles({

    container: {
        boxSizing: 'border-box',
        fontFamily: 'Roboto Slab, serif',
        height: '100%',
        width: '100%',
        opacity: 0.25,
        backgroundColor: 'black',
        transition: 'opacity .2s ease-in-out',
        display: 'flex',
        flexFlow: 'column',
        '&:hover': {
            transition: 'opacity .2s ease-in-out',
            opacity: 1
        }
    },
    section: {
        // height: '100%'
    }
})

interface IHoveredRect {
    index: number,
    xAxis: xAxis
}

type xAxis = XAxis.Left | XAxis.Right;
const ExampleMarketPageC = () => {
    const classes = useStyles();

    return (
        <div className={classes.container} style={{ scrollSnapType: 'y mandatory' }}>
            <div style={{ height: '100%', width: '100%', minHeight: '100%', scrollSnapAlign: 'start', backgroundColor: '#e4b727' }} />
            <div style={{ height: '100%', width: '100%', minHeight: '100%', scrollSnapAlign: 'start', backgroundColor: '#e46027' }} />
            <div style={{ height: '100%', width: '100%', minHeight: '100%', scrollSnapAlign: 'start', backgroundColor: 'green' }} />
            <div style={{ height: '100%', width: '100%', minHeight: '100%', scrollSnapAlign: 'start', backgroundColor: 'yellow' }} />
        </div>
    );
};

export default ExampleMarketPageC;

