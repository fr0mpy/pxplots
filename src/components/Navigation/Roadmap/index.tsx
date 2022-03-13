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
				As you've read, the plans for pxplots are pretty big. To achieve our overall vision, whilst delivering a product as soon as possible,
				our roadmap is split into multiple goals to manage.
			</p>

			<p className={classes.text}>
				As you've read, the plans for pxplots are pretty big. To achieve our overall vision, whilst delivering a product as soon as possible,
				our roadmap is split into multiple goals to manage.
			</p>

			Team Milestones

			Design Milestones

			Development Milestones

			<h2>
				pxplots frontend
			</h2>
			<h2>
				Authentication
			</h2>
			<h2>
				MarketPage setup
			</h2>
			<h2>
				Storing MarketPage Data - i.e artwork prices & layout preferences
			</h2>
			<h2>
				Transactions
			</h2>
			<h2>
				Template Layouts
			</h2>
			<h2>
				Custom colours & font's
			</h2>
			<h2>
				Second layer market pages - i.e, being able to link artwork from pxplot page, to market listings on other platforms like LooksRare & Opensea.
			</h2>
			<h2>
				Holder reward claiming
			</h2>
			<h2>
				Custom Image sizes
			</h2>
			<h2>
				Artist lookup
			</h2>
			<h2>
				Artist homepage Feature
			</h2>
			<h2>
				Minting through pxplots
			</h2>
			<h2>
				Personalised layouts
			</h2>


			Design Milestones





			{/* <h2>
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
			</p> */}


			<p className={classes.text}>

			</p>


			<p className={classes.text}>
				+ Authentication
			</p>
			<p className={classes.text}>
				+ Template Layouts
			</p>
			<p className={classes.text}>
				+ Custom colour
			</p>
			<p className={classes.text}>
				+ Custom font selector
			</p>


			<h2>
				Phase 1: Research & Community
			</h2>
			<p className={classes.text}>
				The first phase will involve the hiring of community positions and discussions with our holders and the wider NFT creators, to ensure we build a product focussed around the needs of our users.


				a community manager will also be brought on board to help us keep a close relationship with our holders, whilst continuing  to market the platform.
			</p>

			{/* 			
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
			</p> */}



		</>
	)
}

export default Roadmap;

