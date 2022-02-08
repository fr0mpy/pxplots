import * as React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        alignItems: 'center',
        display: 'flex',
        height: '60px',
        justifyContent: 'center',
        margin: '8px 0 0 0 '
    },
    img: {
        width: '38px',
        height: '38px',
        cursor: 'pointer',
        margin: '0 4px',
        '&:hover': {
            opacity: '0.8'
        }
    }
});


const SocialLinks = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <a
                className={classes.img}
                href="https://discord.gg/f4FpuWhPkW"
                target="_blank"
                rel="noreferrer"
            >
                <img src="/images/discord.png" alt="" className={classes.img} />
            </a>
            <a
                className={classes.img}
                href="https://twitter.com/pxplots"
                target="_blank"
                rel="noreferrer"
            >
                <img src="/images/twitter.png" alt="" className={classes.img} />
            </a>
            <a className={classes.img} href="/" target="_blank" rel="noreferrer">
                <img src="/images/looksrare.png" alt="" className={classes.img} />
            </a>
            <a className={classes.img} href="/" target="_blank" rel="noreferrer">
                <img src="/images/opensea.png" alt="" className={classes.img} />
            </a>
        </div>
    );
};

export default SocialLinks;