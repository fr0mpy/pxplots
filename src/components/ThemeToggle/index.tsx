import React from 'react'
import { createUseStyles } from 'react-jss';
import { useSelector, useDispatch } from 'react-redux';
import { Theme } from '../../enums/themes';
import { addItemToLocalStorage, getItemFromLocalStorage } from '../../helpers/storage';
import { IThemeState } from '../../Redux/slices/themeSlice';
import { setTheme } from '../../Redux/slices/themeSlice/';

const useStyles = createUseStyles({
	button: {
		alignSelf: 'flex-start',
		backgroundColor: 'white',
		borderRadius: '30px',
		boxShadow: '2px 4px 8px -2px grey',
		cursor: 'pointer',
		display: 'flex',
		height: '35px',
		justifyContent: 'space-between',
		marginTop: '4px',
		overflow: 'hidden',
		position: 'relative',
		width: '70px',
		transition: 'background-color .1s linear',

		'&:hover': {
			backgroundColor: '#dedede'
		},

		'@media screen and (max-width: 1024px)': {
			marginTop: '0'
		}
	},
	button_night: {
		alignSelf: 'flex-start',
		backgroundColor: 'black',
		borderRadius: '30px',
		boxShadow: '2px 1px 8px -2px grey',
		cursor: 'pointer',
		display: 'flex',
		height: '35px',
		justifyContent: 'space-between',
		marginTop: '4px',
		overflow: 'hidden',
		position: 'relative',
		width: '70px',
		transition: 'background-color .1s linear',

		'&:hover': {
			backgroundColor: '#2d2d2d'
		},

		'@media screen and (max-width: 1024px)': {
			marginTop: '0'
		}
	},

	icon: {
		fontSize: '20px',
		transition: 'all 0.3s linear',

		'&:first-child': {
			transform: 'translateY(0)'
		},

		'&:nth-child(2)': {
			transform: 'translateY(-100px)'
		}
	},
	icon_night: {
		fontSize: '20px',
		transition: 'all 0.3s linear',

		'&:first-child': {
			transform: 'translateY(100px)',
		},

		'&:nth-child(2)': {
			transform: 'translateY(0)'
		},
	}

});

const ThemeToggle = () => {
	const dispatch = useDispatch();
	const { theme = {} } = useSelector((state: IThemeState): IThemeState => state.theme)
	const classes = useStyles();

	React.useEffect(() => {
		const storedTheme = getItemFromLocalStorage('theme')
		console.log("stored theme", storedTheme)
	})

	const toggleTheme = () => {
		if (theme === Theme.Light) {
			dispatch(setTheme(Theme.Dark));
			addItemToLocalStorage('theme', Theme.Dark)
		} else if (theme === Theme.Dark) {
			dispatch(setTheme(Theme.Light));
			addItemToLocalStorage('theme', Theme.Light)
		}
	};

	const setButtonThemeClass = () => {
		if (theme === Theme.Light) {
			return classes.button
		} else if (theme === Theme.Dark) {
			return classes.button_night
		}
	}

	const setIconThemeClass = () => {
		if (theme === Theme.Light) {
			return classes.icon
		} else if (theme === Theme.Dark) {

			return classes.icon_night
		}
	}


	return (
		<button className={`${classes.button} ${setButtonThemeClass()}`} onClick={() => toggleTheme()}>
			<span className={`${classes.icon} ${setIconThemeClass()}`}>☀️</span>
			<span className={`${classes.icon} ${setIconThemeClass()}`}>🌙</span>
		</button>
	);
};

export default ThemeToggle;