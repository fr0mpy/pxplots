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
		fontFamily: 'Roboto Slab, serif',
		height: '100%',
		padding: '16px',
		transition: 'background-color .4s linear',
		width: '550px',
		zIndex: 1,

		'@media screen and (max-width: 1200px)': {
			border: 'solid 5px #5141f1',
			borderRadius: '8px',
			lineHeight: 'normal',
			width: '80%',
			height: '80%'
		}
	},
	root_night_mode: {
		backgroundColor: 'black',
		color: 'white',
		transition: 'background-color .4s linear'
	},
	button_container: {
		alignItems: 'center',
		display: 'flex',
		flexFlow: 'row',
		height: 'fit-content',
		marginBottom: '30px',
		justifyContent: 'space-between'
	},
	button: {
		backgroundColor: '#5141f1',
		border: 'solid 4px black',
		borderRadius: '5px',
		color: 'white',
		cursor: 'pointer',
		fontFamily: 'Roboto Slab, serif',
		fontSize: '18px',
		minHeight: '48px',
		outline: 'solid 4px white',
		transition: 'border .4s linear, outline .4s linear, background-color .2s linear',
		width: '180px',
		'&:hover': {
			backgroundColor: '#3effdb',
			color: 'black',
			transition: 'background-color .2s linear',
		},
		'&:active': {
			backgroundColor: '#fffd00',
			boxShadow: 'inset 0 0 16px #000000',
			transition: 'background-color .2s linear, box-shadow .05s linear',
		}
	},
	mint_button: {
		border: 'solid 4px black',
		backgroundColor: '#3effdb',
		color: 'black',
		'&:hover': {
			color: 'white',
			backgroundColor: '#d362d2',
		}
	},
	button_night_mode: {
		border: 'solid 4px white',
		outline: 'solid 4px black',
		transition: 'border .4s linear, outline .4s linear',
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
	},
	nav_caption: {
		margin: '8px 0 26px 0',
		fontSize: '18px',
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
		'@media screen and (max-width: 1200px)': {
			height: '78%',
			overflow: 'auto',
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

	return (
		<div className={`${classes.root} ${lightMode ? '' : classes.root_night_mode}`}>
			{isDesktop ? <Header /> : null}
			<div>
				<p className={`${classes.text} ${classes.nav_title} ${lightMode ? '' : classes.night_mode_text}`}>🏝️ Welcome To pxplots! 🏝️</p>
				<p className={`${classes.text} ${classes.nav_caption} ${lightMode ? '' : classes.night_mode_text}`}>
					10,000 sm0l plots of land, living on the Ethereum blockchain 🧱⛓️
				</p>
			</div>
			<div className={`${classes.dotted_line} ${lightMode ? '' : classes.dotted_line_night_mode}`} />
			<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
				{renderHeadings()}
			</div>
			<div className={classes.section_container}>
				<div
					className={`${classes.section} ${lightMode ? '' : classes.section_night_mode}`}
					ref={sectionRef}
				>
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
		</div>
	);
};

export default Navigation;
