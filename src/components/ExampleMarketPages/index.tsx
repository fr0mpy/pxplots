import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { DeviceType } from '../../enums/devices';
import { Theme } from '../../enums/themes';
import { deviceTypeIs } from '../../helpers/devices';
import { IThemeState } from '../../Redux/slices/themeSlice';
import ExampleMarketPageC from './ExampleMarketPageC';
import ExampleMarketPageD from './ExampleMarketPageD';
import ExampleMarketPageA from './ExamplePageA';
import ExampleMarketPageB from './ExamplePageB';
import Navigation from '../Navigation';
import Header from '../Header';
import SocialLinks from '../SocialLinks';
import MintModal from '../MintModal';
import FlickityComponent from '../FlickityComponent';

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		fontFamily: 'Roboto Slab, serif',
		flexFlow: 'column',
		lineHeight: 'normal',
		height: '100%',
		position: 'absolute',
		width: '100%',

	},
	sub_container: {
		height: '50%',
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	example_site_container: {
		backgroundColor: 'white',
		border: 'solid 5px #5141f1',
		borderRadius: '8px',
		boxShadow: 'rgb(0 0 0) 12px 12px 42px 0px',
		height: '66%',
		width: '40%',
		transition: 'background-color .4s linear, border .2s ease-in-out',
		overflowY: 'auto',
		position: 'relative',
		'&:hover': {
			transition: 'border .2s ease-in-out',
			border: 'solid 5px #3effdb',
		},

		'&::-webkit-scrollbar': {
			width: '0.4em',
			height: '10px !important'
		},

		'&::-webkit-scrollbar-track': {
			padding: '0 16px'
		},

		'&::-webkit-scrollbar-thumb': {
			backgroundColor: '#5141f1',
			borderRadius: '8px',
			border: 'solid 2px black',
			marginLeft: '10px',
			transition: 'border .4s linear',
		}

	},
	noOverflow: {
		overflow: 'visible'
	},
	example_site_container_night: {
		backgroundColor: 'black',
		transition: 'background-color .4s linear',

		'&::-webkit-scrollbar-thumb': {
			backgroundColor: '#5141f1',
			borderRadius: '8px',
			border: 'solid 2px white',
			marginLeft: '10px',
			transition: 'border .4s linear',
		}
	},
	flickity_slider: {
		height: '80%',
		width: '100%',
		'& .flickity-page-dots': {
			bottom: '10px !important'
		},

		'& .flickity-button': {
			backgroundColor: 'transparent'
		},

		'@media screen and (max-width: 1024px)': {
			left: '50%',
			position: 'absolute',
			height: '100%',
			top: '50%',
			transform: 'translate(-50%, -50%)',
			textAlign: 'center',

			'& .flickity-viewport': {
				height: '100vh !important'
			},

			'& .carousel-cell': {
				display: 'none !important'
			},


			'& .flickity-prev-next-button': {
				height: '58px',
				width: '58px',
				borderRadius: '6px',
				backgroundColor: '#5141f1',
				border: 'solid 5px white',
				transition: 'all .4s ease-in-out'
			},
			'& .flickity-button-icon': {
				fill: 'white',
				transition: 'all .4s ease-in-out'
			},

		},

		'@media screen and (max-width: 600px)': {
			'& .flickity-prev-next-button': {
				height: '52px',
				width: '52px',
				top: '85%'
			},
		},

		'@media screen and (max-width: 380px)': {
			'& .flickity-prev-next-button': {
				top: '82%',
				height: '38px',
				width: '38px',
			},
		}
	},
	flickity_slider_night: {
		height: '80%',
		width: '100%',
		'& .flickity-page-dots': {
			bottom: '10px !important'
		},

		'& .flickity-button': {
			backgroundColor: 'transparent'
		},

		'@media screen and (max-width: 1024px)': {
			left: '50%',
			position: 'absolute',
			top: '50%',
			height: '100%',
			transform: 'translate(-50%, -50%)',
			textAlign: 'center',

			'& .flickity-viewport': {
				height: '100vh !important'
			},

			'& .carousel-cell': {
				display: 'none !important'
			},

			'& .flickity-prev-next-button': {
				height: '58px',
				width: '58px',
				borderRadius: '6px',
				backgroundColor: '#5141f1',
				border: 'solid 5px white',
				transition: 'all .4s ease-in-out',
				boxShadow: 'rgb(0 0 0) 8px 12px 34px 0px'
			},

			'& .flickity-button-icon': {
				fill: 'white',
				transition: 'all .4s ease-in-out'
			},
		},

		'@media screen and (max-width: 600px)': {
			'& .flickity-prev-next-button': {
				height: '52px',
				width: '52px',
				top: '85%'
			},
		},
		'@media screen and (max-width: 380px)': {
			'& .flickity-prev-next-button': {
				top: '82%',
				height: '38px',
				width: '38px',
			},
		}
	},
	footer: {
		alignItems: 'center',
		backgroundColor: 'white',
		// boxShadow: 'rgb(0 0 0) 8px -12px 34px 0px',
		color: 'black',
		display: 'flex',
		height: '70px',
		justifyContent: 'center',
		position: 'absolute',
		bottom: 0,
		transition: 'all .4s linear',
		width: '100%',

		'@media screen and (max-width: 600px)': {
			height: '64px'
		},
	},
	footer_night: {
		backgroundColor: 'black',
		color: 'white',
		transition: 'all .4s linear'
	}

});

interface IProps {
	modalOpen: boolean;
}


const ExampleMarketPages = ({ modalOpen }: IProps) => {
	const classes = useStyles();
	const { theme = {} } = useSelector((state: IThemeState): IThemeState => state.theme)
	const lightMode = theme === Theme.Light;
	const isDesktop = deviceTypeIs(DeviceType.Desktop);


	if (isDesktop) {
		return (
			<div className={classes.container}>
				<div className={classes.sub_container}>
					<div className={`${classes.example_site_container} ${lightMode ? '' : classes.example_site_container_night}`}>
						<ExampleMarketPageA />
					</div>
					<div
						className={`${classes.example_site_container} ${lightMode ? '' : classes.example_site_container_night}`}
						style={{ overflowY: 'visible' }}
					>
						<ExampleMarketPageB />
					</div>
				</div>
				<div className={classes.sub_container}>
					<div className={`${classes.example_site_container} ${lightMode ? '' : classes.example_site_container_night}`}>
						<ExampleMarketPageC />
					</div>
					<div className={`${classes.example_site_container} ${lightMode ? '' : classes.example_site_container_night}`}
						style={{ scrollSnapType: 'y mandatory' }}
					>
						<ExampleMarketPageD />
					</div>
				</div>
			</div>
		)
	} else return (
		<>
			<Header />
			{modalOpen
				? <MintModal />
				: <FlickityComponent className={`carousel ${lightMode ? classes.flickity_slider : classes.flickity_slider_night}`}>
					<div style={{ marginRight: '16px', height: '100%', display: 'flex', justifyContent: 'center', width: '100%' }}>
						<Navigation />
					</div>
					<div style={{ marginRight: '16px', height: '100%', display: 'flex', justifyContent: 'center', width: '100%' }}>
						<ExampleMarketPageA />
					</div>
					<div style={{ marginRight: '16px', height: '100%', display: 'flex', justifyContent: 'center', width: '100%' }}>
						<ExampleMarketPageB />
					</div>
					<div style={{ marginRight: '16px', height: '100%', display: 'flex', justifyContent: 'center', width: '100%' }}>
						<ExampleMarketPageC />
					</div>
					<div style={{ marginRight: '16px', height: '100%', display: 'flex', justifyContent: 'center', width: '100%' }}>
						<ExampleMarketPageD />
					</div>
				</FlickityComponent>
			}
			{
				!isDesktop
					? <div className={`${classes.footer} ${lightMode ? '' : classes.footer_night}`} >
						<SocialLinks />
					</div>
					: null
			}
		</>
	)
}

export default ExampleMarketPages;

