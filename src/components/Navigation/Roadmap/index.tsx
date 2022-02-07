import * as React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    text: {
        fontFamily: 'Roboto Slab, serif',
        opacity: .8
    }
});

const Roadmap = () => {
    const classes = useStyles();

    return (
        <>
            <p className={classes.text}>
                Our roadmap is set into 4 sections: Minting, Research, Design & Development. Please read all the way down for the full picture.
            </p>
            <h2>
                1000 minted
            </h2>
            <p className={classes.text}>
                First 1000 are free to mint!
            </p>
            <p className={classes.text}>
                Enjoy <span style={{ fontSize: '20px' }}>🙌</span>
            </p>
            <h2>
                4000 minted
            </h2>
            <p className={classes.text}>
                1eth giveaway to a random holder.
            </p>
            <h2>
                6000 minted
            </h2>
            <p className={classes.text}>
                2eth giveaway to a random holder.
            </p>
            <h2>
                8000 minted
            </h2>
            <p className={classes.text}>
                3eth giveaway to a random holder.
            </p>
            <h2>
                10000 minted
            </h2>
            <p className={classes.text}>
                5eth giveaway to a random holder.
            </p>
            <p className={classes.text}>
                And production begins...
            </p>
            <h2>
                Phase 1: Research & Community
            </h2>
            <p className={classes.text}>
                The first phase will involve discussions with a number of web3 consultants and NFT artists, to ensure we do this the right way.
                At this point  a community manager will also be brought on board to help us keep a close relationship with our holders, whilst continuing  to market the platform.
            </p>
            <p className={classes.text}>
                Following the creation of these solid foundations on how pxplots will operate, we will release our whitepaper. Outlining everything.
            </p>
            <h2>
                Phase 2: Design & User Experience
            </h2>
            <p className={classes.text}>
                We will bring onboard UX & UI experts, to take the requirements created in phase one and turn them into working designs.
                This phase will likely be iterated over multiple times, to ensure the designs we begin with have both our users best interests in mind
                and are possible from a development perspective.
            </p>
            <p className={classes.text}>
                Although we are likely to revisit the designs during phase 3, to make any necessary changes that may arise.
            </p>
            <h2>
                Phase 3: Development & Launch
            </h2>
            <p className={classes.text}>
                We will expand the development team to begin building out the designed product from phase 2.
                Regular updates will be provided on our features and at this point a solid timeline will have been established, so we will have a clearer picture on a delivery date.
            </p>
            <p className={classes.text}>
                These 3 phases will likely be iterated over again and again to ensure the pxplots platform is constantly evolving with the needs of our holders and will never become stale.
            </p>
        </>
    )
}

export default Roadmap;

