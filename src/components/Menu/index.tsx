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
		bottom: '0',
	},
	container: {
		alignItems: 'center',
		margin: '8px',
		display: 'flex',
		justifyContent: 'space-between'
	},
	button: {
		height: '48px',
		width: '180px',
		border: 'solid 4px white',
		borderRadius: '5px',
		fontFamily: 'Roboto Slab, serif',
		fontSize: '18px',
		cursor: 'pointer',
		backgroundColor: 'cyan',
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
	modal_container: {}
});

interface IProps {
	openModal(): void
}

const Menu = ({ openModal }: IProps) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<div>
					<p className={classes.text}>Welcome to pxplots! 🏝</p>
					<p className={classes.text}>
						10,000 sm0l plots of land, living on the ethereum blockchain 🌐
					</p>
				</div>
				<button className={classes.button} onClick={() => openModal()}>
					Open Menu
				</button>
			</div>
		</div>
	);
};

export default Menu;
