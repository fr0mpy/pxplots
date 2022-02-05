import * as React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	root: {
		marginTop: 'auto',
		width: '100%',
		height: '10vh',
		borderRadius: '8px',
		boxSizing: 'border-box',
		fontFamily: 'Roboto Slab, serif',
		display: 'flex',
		flexFlow: 'column',
		justifyContent: 'space-between',
		position: 'fixed',
		bottom: '0'
	},
	container: {
		height: '100%',
		alignItems: 'center',
		margin: '8px 16px',
		display: 'flex',
		justifyContent: 'space-between',
		'@media screen and (max-width: 600px)': {
			height: '62px',
			margin: '0 8px 8px 8px',
			flex: 1
		}
	},
	button: {
		height: '48px',
		width: '180px',
		border: 'solid 4px black',
		outline: 'dotted 4px white',
		borderRadius: '5px',
		fontFamily: 'Roboto Slab, serif',
		fontSize: '18px',
		cursor: 'pointer',
		backgroundColor: '#5141f1',
		color: 'white',
		'@media screen and (max-width: 600px)': {
			margin: '0 4px 0 20px',
			flex: 1
		},
		'&:hover': {
			backgroundColor: '#fefd78',
			color: 'black'
		},
		'&:active': {
			backgroundColor: '#fffd00',
			boxShadow: 'inset 0 0 16px #000000'
		}
	},
	text: {
		color: 'white',
		margin: '4px 0 4px 0',
		width: 'fit-content'
	},
	large_pixel: {
		height: '30px',
		width: '30px',
		border: 'solid 4px black',
		borderRadius: '4px',
		backgroundColor: 'cyan',
		margin: '8px',
		justifySelf: 'flex-end'
	},
	overlay: {
		backgroundColor: 'black',
		opacity: 0.8,
		height: '100vh',
		width: '100vw'
	},
	modal_container: {},
	text_container: {
		'@media screen and (max-width: 600px)': {
			padding: '4px'
		}
	},
	// menu_title: {
	// 	marginTop: '0',
	// 	fontSize: '18px',
	// 	'@media screen and (max-width: 600px)': {
	// 		margin: '0 0 4px 0',
	// 		fontSize: '16px',
	// 	}
	// },
	// menu_caption: {
	// 	fontSize: '16px',
	// 	'@media screen and (max-width: 600px)': {
	// 		margin: '0',
	// 		fontSize: '12px'
	// 	}
	// }
});

interface IProps {
	openModal(): void
}

const Menu = ({ openModal }: IProps) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<div className={classes.text_container}>
					<p className={`${classes.text} ${classes.menu_title}`}>Welcome to pxplots! 🏝</p>
					<p className={`${classes.text} ${classes.menu_caption}`}>
						10,000 sm0l plots of land, living on the ethereum blockchain 🌐
					</p>
				</div>
				<button className={classes.button} onClick={() => openModal()}>
					Menu
				</button>
			</div>
		</div>
	);
};

export default Menu;
