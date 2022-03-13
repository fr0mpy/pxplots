import * as React from 'react';
import { createUseStyles } from 'react-jss';
import About from './About/';
import Roadmap from './Roadmap/';
import Team from './Team/';
import FAQ from './FAQ/';
import SocialLinks from '../SocialLinks/';
import { IThemeState, setTheme } from '../../Redux/slices/themeSlice';
import { useSelector, useDispatch } from 'react-redux'
import ThemeToggle from '../ThemeToggle';
import { Theme } from '../../enums/themes';
import { setModalOpen } from '../../Redux/slices/mintSlice';
import Header from '../Header';
import { deviceTypeIs } from '../../helpers/devices';
import { DeviceType } from '../../enums/devices';

const useStyles = createUseStyles({
	root: {
		backgroundColor: 'white',
		borderRight: 'solid 5px #5141f1',
		borderTopRightRadius: '8px',
		borderBottomRightRadius: '8px',
		boxShadow: 'rgb(0 0 0) 8px 12px 34px 0px',
		boxSizing: 'border-box',
		display: 'flex',
		flexFlow: 'column',
		fontFamily: 'Roboto Slab, serif',
		height: '100%',
		padding: '16px',
		transition: 'background-color .4s linear',
		width: '550px',
		zIndex: 1,

		'@media screen and (max-width: 1200px)': {
			border: 'solid 5px #5141f1',
			borderRadius: '8px',
			height: '72%',
			lineHeight: 'normal',
			width: '80%',
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
	root_night_mode: {
		backgroundColor: 'black',
		color: 'white',
		transition: 'background-color .4s linear',

	},
	text: {
		color: 'black',
		textAlign: 'center',
		transition: 'background-color .4s linear',
	},
	unconnected_text: {
		opacity: 0,
	},
	connected_text_container: {
		height: '16px',
	},
	connected_text: {
		fontSize: '12px',
		opacity: 1,
		transition: 'opacity .2s ease-in-out'

	},
	nav_title: {
		margin: '0',
		fontSize: '28px',

		'@media screen and (max-width: 600px)': {
			fontSize: '24px'
		}
	},
	nav_caption: {
		margin: '8px 0 26px 0',
		fontSize: '18px',

		'@media screen and (max-width: 600px)': {
			fontSize: '14px',
			marginBottom: '18px'
		}
	},
	night_mode_text: {
		color: 'white',
		transition: 'background-color .4s linear',
	},
	heading_button: {
		backgroundColor: 'transparent',
		border: 'none',
		color: 'grey',
		cursor: 'pointer',
		fontSize: '20px',
		fontFamily: 'Roboto Slab, serif',
		borderBottom: 'solid 3px transparent',

		'&:hover': {
			borderBottom: 'solid 3px #5141f1'
		},

		'@media screen and (max-width: 380px)': {
			fontSize: '18px'
		}
	},
	heading_button_active: {
		color: '#5141f1',
		opacity: 1,
		'&:hover': {
			borderBottom: 'solid 3px transparent'
		}
	},
	section_container: {
		flex: 1,
		height: '50%',
		overflowY: 'auto',
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
		},
		'@media screen and (max-width: 1200px)': {
			height: '60%',
			overflowY: 'auto',
		},

		'@media screen and (max-width: 600px)': {
			height: '50%',
			overflowY: 'auto',
		},

	},
	section: {
		// height: '55vh',
		// overflow: 'auto',
		textAlign: 'center',
		padding: '0 16px',
		boxSizing: 'border-box',

		'@media screen and (max-width: 1200px)': {
			display: 'flex',
			flexFlow: 'column',
			// height: '62.5vh',
			justifyContent: 'center',
		}
	},
	section_night_mode: {
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: '#5141f1',
			borderRadius: '8px',
			border: 'solid 2px white',
			marginLeft: '10px',
			transition: 'border .4s linear',
		}
	},
	dotted_line: {
		borderBottom: 'dotted 5px black',
		width: '80%',
		margin: '0 auto 18px auto',
		transition: 'border-bottom .4s linear',

	},
	dotted_line_night_mode: {
		borderBottom: 'dotted 5px white',
		transition: 'border-bottom .4s linear',
	},
});

enum Sections {
	About = 0,
	Roadmap = 1,
	Team = 2,
	Faq = 3,
	DontClick = 4
}

const Navigation = () => {
	const classes = useStyles();

	const [section, setSection] = React.useState<number>(0);
	const sectionRef = React.useRef<HTMLDivElement>(null);
	const { theme = {} } = useSelector((state: IThemeState): IThemeState => state.theme)
	const headings = ['About', 'RoadMap', 'Team', 'FAQ'];
	const lightMode = theme === Theme.Light;
	const isDesktop = deviceTypeIs(DeviceType.Desktop);

	React.useEffect(() => {
		if (sectionRef.current) {
			console.log('ref', sectionRef.current.scrollTop)
			sectionRef.current.scrollTop = 0;
		}
	}, [section])

	const renderSection = () => {
		switch (section) {
			case Sections.About:
				return <About />;
			case Sections.Roadmap:
				return <Roadmap />;
			case Sections.Team:
				return <Team />;
			case Sections.Faq:
				return <FAQ />;
			default:
				return;
		}
	}

	const renderHeadings = () => {
		return headings.map((heading, i) => {
			const active = i === section;
			return (
				<button
					className={`${classes.heading_button} ${active ? classes.heading_button_active : ''}`}
					onClick={() => setSection(i)}
				>
					{heading}
				</button>
			)
		})
	}


	const welcome = () => {
		const isMobile = deviceTypeIs(DeviceType.Mobile);
		if (isMobile) {
			return 'Welcome To pxplots! 🏝️'
		} else {
			return '🏝️ Welcome To pxplots! 🏝️'
		}
	}
	return (
		<div className={`${classes.root} ${lightMode ? '' : classes.root_night_mode}`}>
			{isDesktop ? <Header /> : null}
			<div>
				<p className={`${classes.text} ${classes.nav_title} ${lightMode ? '' : classes.night_mode_text}`}>
					{welcome()}
				</p>
				<p className={`${classes.text} ${classes.nav_caption} ${lightMode ? '' : classes.night_mode_text}`}>
					10,000 sm0l plots, living on the Ethereum blockchain 🧱⛓️
				</p>
			</div>
			<div className={`${classes.dotted_line} ${lightMode ? '' : classes.dotted_line_night_mode}`} />
			<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
				{renderHeadings()}
			</div>
			<div className={classes.section_container} ref={sectionRef}>
				<div className={`${classes.section} ${lightMode ? '' : classes.section_night_mode}`}>
					{renderSection()}
				</div>
			</div>
			{
				isDesktop
					? <div style={{ height: '60px' }} >
						<SocialLinks />
					</div>
					: null
			}
		</div >
	);
};

export default Navigation;
