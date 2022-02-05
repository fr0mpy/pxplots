import * as React from 'react';
import { createUseStyles } from 'react-jss';

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
        height: '18vw',
        width: '28vw',
        backgroundColor: 'white',
        border: 'solid 5px #5141f1',
        borderRadius: '8px',
        boxShadow: 'rgb(0 0 0) 12px 12px 42px 0px',

    }
});

const Roadmap = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.sub_container} style={{ marginTop: '60px' }}>
                <div className={classes.example_site_container}>

                </div>
                <div className={classes.example_site_container}>

                </div>
            </div>
            <div className={classes.sub_container} style={{ marginBottom: '60px' }}>
                <div className={classes.example_site_container}>

                </div>
                <div className={classes.example_site_container}>

                </div>
            </div>
        </div>
    )
}

export default Roadmap;

