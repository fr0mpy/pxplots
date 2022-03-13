import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { Theme } from '../../../enums/themes';
import { IThemeState } from '../../../Redux/slices/themeSlice';
import Flickity from 'react-flickity-component'
import { deviceTypeIs } from '../../../helpers/devices';
import { DeviceType } from '../../../enums/devices';

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

		'@media screen and (max-width: 1024px)': {
			border: 'solid 5px #5141f1',
			borderRadius: '8px',
			lineHeight: 'normal',
			opacity: 1,
			width: '80vw',
			height: '72%',
			left: '50%',
			position: 'absolute',
			top: '50%',
			transform: 'translate(-50%, -50%)'
		},

		'@media screen and (max-width: 600px)': {
			height: '68%',
			top: '48%',
			width: '88%'
		},
		'@media screen and (max-width: 380px)': {
			height: '62.5%'
		}
	},
	slide_container: {
		display: 'flex',
		flexFlow: 'column',
		height: 'inherit',
		width: 'inherit',

		'@media screen and (max-width: 1024px)': {
			height: '72%',
		},

		'@media screen and (max-width: 600px)': {
			height: '68%',
		},

		'@media screen and (max-width: 380px)': {
			height: '62.5%'
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

		'@media screen and (max-width: 1024px)': {
			height: '80vh !important',

			'& .flickity-prev-next-button': {
				backgroundColor: 'transparent !important ',
				boxShadow: 'none !important',
				border: 'transparent !important',
				height: '58px',
				width: '58px',
			},
			'& .flickity-button-icon': {
				fill: 'black !important',
			},
		},

		'@media screen and (max-width: 600px)': {
			'& .flickity-prev-next-button': {
				opacity: .25,
				top: '48% !important'
			},
		},



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

		'@media screen and (max-width: 1024px)': {
			fontSize: '26px'
		},

		'@media screen and (max-width: 600px)': {
			fontSize: '20px'
		}

	},
	circles_container: {
		display: 'flex',
		flexFlow: 'row',
		justifyContent: 'space-between',
		width: '58px',
		'@media screen and (max-width: 1024px)': {
			width: '80px'
		},
	},
	circle: {
		height: '16px',
		width: '16px',
		backgroundColor: 'black',
		borderRadius: '100%',

		'&:hover': {
			cursor: 'pointer',
			opacity: .6
		},
		'@media screen and (max-width: 1024px)': {
			height: '22px',
			width: '22px',
		},
	},
	half_container: {
		alignContent: 'space-between',
		display: 'flex',
		flex: 1,
		flexFlow: 'column',
		padding: '16px'
	},
	half_container_header_text: {
		margin: 0,
		'@media screen and (max-width: 1024px)': {
			fontSize: '22px'
		},
	},
	half_container_center: {
		margin: 'auto 0',
		'@media screen and (max-width: 1024px)': {
			margin: 'auto',
			width: '180px'
		},
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

		'@media screen and (max-width: 600px)': {
			height: 'fit-content',
			marginTop: 'auto',
			marginBottom: '36px'
		}
	},
	cream_text_1: {
		fontSize: '8px',
		margin: '0 0 4px 0',

		'@media screen and (max-width: 1024px)': {
			fontSize: '14px',

		},
	},
	cream_text_2: {
		fontSize: '14px',
		margin: '0 0 4px 0',

		'@media screen and (max-width: 1024px)': {
			fontSize: '30px',

		},
	},
	cream_text_3: {
		fontSize: '10px',
		margin: '0 0 4px 0',

		'@media screen and (max-width: 1024px)': {
			fontSize: '18px',

		},
	},
	center_text: {
		margin: 'auto auto 22% auto',
		'@media screen and (max-width: 1024px)': {
			margin: 'auto'
		},
	},
	welcome: {
		fontSize: '40px',
		margin: 0,

		'@media screen and (max-width: 1024px)': {
			fontSize: '60px',
			margin: 0
		},

		'@media screen and (max-width: 600px)': {
			fontSize: '40px',
			height: '68%',
			top: '48%',
			width: '88%',
		}
	},
	welcome_sub_text: {
		margin: '4px 0',
		fontSize: '12px',
		textAlign: 'center',

		'@media screen and (max-width: 1024px)': {
			fontSize: '18px'
		},

		'@media screen and (max-width: 600px)': {
			fontSize: '14px',
		}
	},
	white_block: {
		height: '80%',
		width: '60%',
		backgroundColor: 'white',
		margin: 'auto',

		'@media screen and (max-width: 1024px)': {
			height: '30%'
		},

		'@media screen and (max-width: 600px)': {
			height: '20%',
			width: '78px'
		}
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

	const isDesktop = deviceTypeIs(DeviceType.Desktop);
	const isMobile = deviceTypeIs(DeviceType.Mobile);
	const isTablet = deviceTypeIs(DeviceType.Tablet);

	return (
		<div className={classes.container}>
			<Flickity
				className={`${classes.flickity_slider_sub}`}
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
					<div className={classes.center_text}>
						<p className={classes.welcome}>
							Welcome.
						</p>
						<p className={classes.welcome_sub_text}>
							To my NFT marketpage
						</p>
					</div>
				</div>
				<div className={classes.slide_container} style={{ backgroundColor: '#14eb9c', display: 'flex', flexFlow: 'row' }} >
					<div className={classes.half_container}>
						<div className={classes.white_block} />
						{!isDesktop
							? <>
								<div className={classes.white_block} />
								<div className={classes.white_block} />
							</>
							: null}
						{isMobile
							? <div className={classes.white_block} />
							: null}

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
						<p
							style={{
								margin: `auto auto auto ${isTablet ? '40%' : '15%'}`,
								fontSize: isTablet ? '24px' : '16px'
							}}
						>
							However you want your space to look. It's yours.
						</p>
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

