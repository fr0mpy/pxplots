import * as React from 'react';
import { createUseStyles } from 'react-jss';
import PxplotCube from '../../pxplotCube';

const useStyles = createUseStyles({
    text: {
        fontFamily: 'Roboto Slab, serif',
    }
});

const About = () => {
    const classes = useStyles();

    return (
        <>
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>

                <div style={{ zIndex: 2, marginRight: '8px' }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" fill="white" />
                        <rect width="48" height="48" fill="#5FCFFF" />
                        <path d="M6.25455 6.25455H41.8909V41.8909H6.25455V6.25455Z" fill="white" />
                        <path d="M12.8 12.8H35.3455V35.3455H12.8V12.8Z" fill="#5FCFFF" />
                    </svg>

                </div>
                <div style={{ zIndex: 2, marginRight: '8px' }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" fill="white" />
                        <rect width="48" height="48" fill="#FF5FB5" />
                        <path d="M6.25455 6.25455H41.8909V41.8909H6.25455V6.25455Z" fill="white" />
                        <path d="M12.8 12.8H35.3455V35.3455H12.8V12.8Z" fill="#FF5FB5" />
                    </svg>

                </div>
                <div style={{ zIndex: 2, marginRight: '8px' }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" fill="white" />
                        <rect width="48" height="48" fill="#2E70F0" />
                        <path d="M6.25455 6.25455H41.8909V41.8909H6.25455V6.25455Z" fill="white" />
                        <path d="M12.8 12.8H35.3455V35.3455H12.8V12.8Z" fill="#2E70F0" />
                    </svg>

                </div>
            </div> */}
            <p className={classes.text}>
                This, is a pxplot.
            </p>
            <PxplotCube />
            <p className={classes.text} style={{ marginBottom: '36px' }}>
                ...Yep, that's it.
            </p>
            <p className={classes.text}>
                If you're looking for a new pfp or chasing rares, then a pxplot probably isn't right for you. There's many more aesthetically pleasing NFT's, with cool traits out there.
            </p>
            <p className={classes.text}>
                However,
            </p>
            <p className={classes.text}>
                If you're an artist looking to build your platform & brand, or just someone interested real utility, then maybe investing in a humble coloured cube will be of interest.
            </p>
            <p className={classes.text}>
                Minting a pxplot will help fund this project and it's overall goal where each pxplot will unlock it's own independent market page on the pxplot website, owned by the NFT holder.
            </p>
            <p className={classes.text}>
                A customisable market page for NFT artists to personalise, and then sell, mint or link their work from. Without having to code anything themselves.
            </p>
            <p className={classes.text}>
                Imagine LooksRare/Opensea crossed with SquareSpace.
            </p>
            <p className={classes.text}>
                In fact, you can check out some ideas of market pages layouts to the right {'>'}
            </p>
            <p className={classes.text}>💭</p>
            <p className={classes.text}>
                You'll have your own page e.g. pxplots.xyz/yourname, with a range of pre made theme layouts to choose from or be able to create your own.
            </p>
            <p className={classes.text}>
                From which you can introduce yourself, your work and grow your fan base.
            </p>
            <p className={classes.text}>
                Whether you're selling images, videos or music, you'll keep 97% of the sale - With 1% going back into maintain pxplots and the remaining 2% being split between all pxplot holders.
            </p>
            <p className={classes.text}>
                And all you'll need to authenticate yourself and access your plot, is to hold your pxplot in your wallet. Like a key.
            </p>
            <p className={classes.text}>
                <span style={{ fontSize: '20px' }}>🗝️</span>
            </p>
            <p className={classes.text}>
                You can even sell your plot onwards, if you wish to. With the page being wiped on transfer and the new holder being able to again customise the page however they wish to.
            </p>
            <p className={classes.text}>
                The first 1000 plots will be free to mint - with the remaining 9,000 costing 0.06eth per plot.
            </p>
            <p className={classes.text}>
                Check out the RoadMap / FAQ for more info. Or, drop a message on Twitter (our Discord will be open soon).
            </p>
            <p className={classes.text}>
                Thank you for reading.
            </p>
            <p className={classes.text}>
                pxplots
            </p>
            <p className={classes.text}>
                Land for the little guy.
            </p>
        </>
    )
}

export default About;