import * as React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    text: {
        fontFamily: 'Roboto Slab, serif',
    }
});

const Team = () => {
    const classes = useStyles();

    return (
        <>
            <p className={classes.text}>
                Hello frens <span style={{ fontSize: '20px' }}>🖖</span>
            </p>
            <p className={classes.text}>
                For now, it's just me. My names Frompy and I'm a web developer and kind of an artist? Idk. What my code produces is my art,
                but you could say that about anything really. So maybe i'm not, who knows?
            </p>
            <p className={classes.text}>
                But anyway,
            </p>
            <p className={classes.text}>
                I became hooked by the internet as a 5 year old kid sometime around
                1997 when my dad first showed me his new computer - A machine
                running Windows 95' and the revolutionary new web browser: Internet
                Explorer. It was incredible.
            </p>
            <p className={classes.text}>
                At this point the world wide web was just a year older than I was. And man, have things changed in that time. Now more than ever.
            </p>
            <p className={classes.text}>
                About a year ago I read an article referencing Kevin Kelly's (also my grandads name, oddly) idea of "A Thousand True Fans".
                And since then, I've not been able to stop thinking about it.
            </p>
            <p className={classes.text}>
                It's such a powerful idea and the inspiration behind pxplots -
                To support artists starting out, in growing their personal brand and their fan base <span style={{ fontSize: '20px' }}>🌱</span>
            </p>
            <p className={classes.text}>
                Like so many of you, I'm ridiculously excited for what the future holds for web3 and I truly hope pxplots can become an integral part of it.
            </p>
            <p className={classes.text}>
                Thankyou for reading about the start of this journey. Your time is greatly appreciated <span style={{ fontSize: '20px' }}>🙏</span>
            </p>
            <p className={classes.text}>
                Peace, love & gm's
            </p>
            <p className={classes.text}>
                Frompy
            </p>
        </>
    )
}

export default Team