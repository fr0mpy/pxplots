import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { Theme } from '../../enums/themes';
import { IThemeState } from '../../Redux/slices/themeSlice';

const useStyles = createUseStyles({
    overlay: {
        background: 'rgba(0, 0, 0, 0.75)',
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        animation: 'fade-in 2s',
        transition: 'background .4s linear',
    },
    modal_container: {
        fontFamily: 'Roboto Slab, serif',
        padding: '24px 32px 32px 32px',
        background: 'rgb(255, 255, 255, 1)',
        border: 'solid 4px black',
        borderRadius: '8px',
        height: '400px',
        width: '400px',
        position: 'absolute',
        left: '50%',
        top: '42.5%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        // '@media screen and (max-width: 600px)': {
        //     width: '75%'
        // }
    },
});

const MintModal = () => {
    const classes = useStyles();
    const { theme = {} } = useSelector((state: IThemeState): IThemeState => state.theme)
    // const lightMode = theme === Theme.Light;

    return (
        <div className={classes.overlay}>
            <div className={classes.modal_container}>x</div>

        </div>
    )
}

export default MintModal;

