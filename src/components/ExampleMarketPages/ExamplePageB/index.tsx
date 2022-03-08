import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { Theme } from '../../../enums/themes';
import { IThemeState } from '../../../Redux/slices/themeSlice';
import Flickity from 'react-flickity-component'

const useStyles = createUseStyles({

	container: {
		fontFamily: 'Roboto Slab, serif',
		height: '100%',
		width: '100%',
		opacity: 0.25,
		backgroundColor: 'black',
		transition: 'opacity .2s ease-in-out',

		'&:hover': {
			transition: 'opacity .2s ease-in-out',
			opacity: 1
		},

		'@media screen and (max-width: 1200px)': {
			border: 'solid 5px #5141f1',
			borderRadius: '8px',
			height: '80vh',
			opacity: 1,
			width: '80vw'
		}
	},
	slide_container: {
		display: 'flex',
		flexFlow: 'column',
		height: 'inherit',
		width: 'inherit',

		'@media screen and (max-width: 1200px)': {
			height: '80vh',
		}
	},
	flickity_slider_sub: {
		height: '100%',

		'& .flickity-page-dots': {
			bottom: '10px !important'
		},

		'& .flickity-button': {
			backgroundColor: 'transparent'
		},

		'@media screen and (max-width: 1200px)': {
			height: '80vh !important',
		}
	},
	header_container: {
		alignItems: 'center',
		display: 'flex',
		flexFlow: 'row',
		padding: '6px',
		justifyContent: 'space-between'
	},
	header_text: {
		fontWeight: 900,
		fontSize: '16px',
		margin: 0,

	},
	circles_container: {
		display: 'flex',
		flexFlow: 'row',
		justifyContent: 'space-between',
		width: '58px'
	},
	circle: {
		height: '16px',
		width: '16px',
		backgroundColor: 'black',
		borderRadius: '100%',

		'&:hover': {
			cursor: 'pointer',
			opacity: .6
		}
	},
	half_container: {
		alignContent: 'space-between',
		display: 'flex',
		flex: 1,
		flexFlow: 'column',
		padding: '16px'
	},
	half_container_header_text: {
		margin: 0
	},
	half_container_center: {
		margin: 'auto 0'
	},
	half_container_title: {
		fontWeight: 900,
		fontSize: '20px',
		margin: '0 0 8px 0'
	},
	half_container_text: {
		fontWeight: 500,
		fontSize: '12px',
		margin: 0
	},
	cream_header: {
		margin: '8px 12px 8px 0',
		textAlign: 'right'
	},
	cream_center_container: {
		backgroundColor: 'white',
		boxShadow: 'rgb(0 0 0) 12px 12px 0px 0px',
		height: '36%',
		margin: '15% 0 0 8%',
		padding: '16px',
		width: '45%',
	},
	cream_text_1: {
		fontSize: '8px',
		margin: '0 0 4px 0'
	},
	cream_text_2: {
		fontSize: '14px',
		margin: '0 0 4px 0'
	},
	cream_text_3: {
		fontSize: '10px',
		margin: '0 0 4px 0'
	}

})

const ExampleMarketPageB = () => {
	const classes = useStyles();

	const flickityOptions = {
		contain: true,
		initialIndex: 0,
		draggable: false,
		freeScroll: true,
		wrapAround: true,
		groupCells: true,

	}

	return (
		<div className={classes.container}>
			<Flickity
				className={`carousel ${classes.flickity_slider_sub}`}
				elementType={'div'}
				options={flickityOptions}
				disableImagesLoaded={false}
				reloadOnUpdate
				static
			>
				<div className={classes.slide_container} style={{ backgroundColor: '#e4274e' }} >
					<div className={classes.header_container}>
						<p className={classes.header_text}>Your Name</p>
						<div className={classes.circles_container}>
							<span className={classes.circle} />
							<a href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} className={classes.circle}>
								<span className={classes.circle} />
							</a>
							<span className={classes.circle} />
						</div>
					</div>
					<div style={{ margin: 'auto auto 22% auto' }}>
						<p style={{ margin: '0', fontSize: '40px' }}>
							Welcome.
						</p>
						<p style={{ margin: '4px 0', fontSize: '12px', textAlign: 'center' }}>
							To my NFT marketpage
						</p>
					</div>
				</div>
				<div className={classes.slide_container} style={{ backgroundColor: '#14eb9c', display: 'flex', flexFlow: 'row' }} >
					<div className={classes.half_container}>
						<div style={{ height: '80%', width: '60%', backgroundColor: 'white', margin: 'auto' }} />
					</div>
					<div className={classes.half_container} style={{ backgroundColor: 'white' }}>
						<p className={classes.half_container_header_text}>
							Hello World
						</p>
						<div className={classes.half_container_center}>
							<p className={classes.half_container_title}>
								This is one of my NFTs
							</p>
							<p className={classes.half_container_text}>
								Who says your page needs to scroll vertically? Maybe you want it to move horizontally.
							</p>
						</div>
						<div className={classes.circles_container}>
							<span className={classes.circle} />
							<span className={classes.circle} />
							<span className={classes.circle} />
						</div>
					</div>
				</div>
				<div className={classes.slide_container} style={{ backgroundColor: '#f1f1c9' }} >
					<p className={classes.cream_header}>
						Maybe a background image here?
					</p>
					<div className={classes.cream_center_container}>
						<p className={classes.cream_text_1}>
							Some sm0l text here
						</p>
						<p className={classes.cream_text_2}>
							And Large Text Here! Hello!
						</p>
						<p className={classes.cream_text_3}>
							By the way, there's 4 meme easter eggs hidden around this site.
							Find all of them and send them to the twitter to get a spot on the free mint whitelist.
						</p>
					</div>
				</div>

				<div className={classes.slide_container} style={{ backgroundColor: '#12e7cf', display: 'flex', flexFlow: 'row' }} >
					<div className={classes.half_container}>
						<p style={{ margin: 'auto auto auto 15%' }}>However you want your space to look. It's yours.</p>
					</div>
					<div className={classes.half_container} style={{ justifyContent: 'center', position: 'relative' }} >
						<div style={{ height: '150px', width: '75px', backgroundColor: 'white', position: 'absolute' }} />
						<div style={{ height: '125px', width: '125px', borderRadius: '100%', backgroundColor: 'black', marginLeft: '16px' }} />
					</div>
				</div>

			</Flickity>
		</div>
	);
};

export default ExampleMarketPageB;

