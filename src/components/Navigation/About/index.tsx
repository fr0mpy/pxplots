import * as React from 'react';
import { createUseStyles } from 'react-jss';

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
                If you're looking for a new pfp, then pxlots might not be right for you. There's many more asthetically pleasing NFT's.
                However, if you're looking for real utility, then maybe pxlots could be what you're looking for.
            </p>
            <p className={classes.text}>
                Each pxplot will soon unlock it's own personalized market page on the pxplot site, owned by the NFT holder <span style={{ fontSize: '20px' }}>💎</span>
            </p>
            <p className={classes.text}>
                A customisable market page, for NFT artists who want to add their own personality to the platform they sell their work from.
            </p>
            <p className={classes.text}>
                Think LooksRare/Opensea crossed with SquareSpace.
            </p>
            <p className={classes.text}>💭</p>
            <p className={classes.text}>
                You'll have your own page e.g. pxplots.xyz/yourname, with a range of pre made layouts to choose from or be able to create your own.
            </p>
            <p className={classes.text}>
                So you have a personalised space from which you can introduce yourself & sell/mint your artwork,
                without having to code anything yourself. <span style={{ fontSize: '20px' }}>🚫⌨️</span>
            </p>
            <p className={classes.text}>
                And all you'll need to access your plot, is to hold your pxplot in your wallet. Like a key.
            </p>
            <p className={classes.text}>
                <span style={{ fontSize: '20px' }}>🗝️</span>
            </p>
            <p className={classes.text}>
                You can even sell your plot onwards, if you want to. With the page being wiped on transfer and the new holder being able to again customise the page however they wish to.
            </p>
            <p className={classes.text}>
                So as you might see, for a simple NFT, we have big plans.
            </p>
            <p className={classes.text}>
                The first 1,000 plots will be free to mint, with the remaining 9,000 costing 0.05eth per plot. Check out the FAQ for more info.
            </p>
            <p className={classes.text}>
                Thank you for reading!
            </p>
            <p>🙏</p>
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