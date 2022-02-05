import * as React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    text: {
        fontFamily: 'Roboto Slab, serif',
    }
});

const FAQ = () => {
    const classes = useStyles();
    return (
        <>
            <h2>
                ⏰ When mint
            </h2>
            <p className={classes.text}>
                Mint will begin April 1st 2022 at 12:00 UTC. Please double check what 12:00 UTC is in your own timezone.
            </p>
            <h2>
                How much 💰
            </h2>
            <p className={classes.text}>
                The first 1,000 plots are free to mint, with the remaining 8,000 costing 0.05eth. Plus gas, of course.
            </p>
            <h2>
                📜 White list
            </h2>
            <p className={classes.text}>
                There will be a whitelist of 500 people, who can each mint 1 plot for free. Ideally these plots should go to NFT artists
                - Those who are noticably involved with the project from the start and those who have been recommended by the wider NFT community. Of course we will run some small competitions too.
                But there will absolutely be no discord grinding or any ridiculous requirements to be eligible.
            </p>
            <h2>
                Number of pxplots 🧮
            </h2>
            <p className={classes.text}>
                There will only ever be 10,000. We want to build a space for the most dedicated independent artists.
                As the NFT space grows, so will the amount of artists. However, we do not want to dilute our platform.
                We want having a place to sell your art here something to be proud of owning.
                Not something anyone can have.
            </p>
            <h2>
                🏝️ Product release date
            </h2>
            <p className={classes.text}>
                Until our designs are completed in phase 2 of the roadmap, it's hard to judge.
                We are taking an agile project management perspective of this and not waterfall - because waterfall in a space like web3 will lead to broken promises and product behind the times.
                However, it would be no later than 8-12 months to get our initial iteration of the product live. We are still early and a rushed product is never a good thing.
            </p>
        </>
    )
}

export default FAQ;