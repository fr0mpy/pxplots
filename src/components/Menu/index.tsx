import * as React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	root: {
		backgroundColor: 'white',
		width: '100%',
		height: '20vh',
		border: 'solid 4px black',
		borderRadius: '8px',
		boxSizing: 'border-box',
		fontFamily: 'Roboto Slab, serif',
		display: 'flex',
		flexFlow: 'column',
		justifyContent: 'space-between'
	},
	left_container: {
		margin: '8px'
	},
	right_container: {
		display: 'flex',
		justifyContent: 'center'
	},
	button: {
		height: '48px',
		width: '180px',
		border: 'solid 4px black',
		borderRadius: '5px',
		fontFamily: 'Roboto Slab, serif',
		fontSize: '18px',
		cursor: 'pointer',
		backgroundColor: 'orange'
	},
	text: {
		margin: '4px 0 4px 0',
		width: 'fit-content'
	},
	link: {
		color: 'black',
		cursor: 'pointer',
		fontWeight: 900,
		textDecoration: 'none',
		height: 'fit-content',
		alignSelf: 'flex-end',
		marginBottom: '4px',
		'&:hover': {
			opacity: 0.8
		}
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
	holder_info: {
		display: 'flex',
		flexFlow: 'column',
		marginRight: '8px'
	},
	overlay: {
		backgroundColor: 'black',
		opacity: 0.8,
		height: '100vh',
		width: '100vw'
	},
	modal_container: {}
});

const Menu = () => {
	const [modalOpen, setModalOpen] = React.useState(false);
	const classes = useStyles();

	const renderModal = () => {
		console.log('opening modal');
		return (
			<div className={classes.overlay}>
				<div className={classes.modal_container}></div>
			</div>
		);
	};
	return (
		<div className={classes.root}>
			{modalOpen && renderModal()}
			<div
				style={{
					display: 'flex',
					flexFlow: 'row',
					justifyContent: 'space-between'
				}}
			>
				<div className={classes.left_container}>
					<p className={classes.text}>Welcome to pxplots!</p>
					<p className={classes.text}>
						10,000 sm0l plots of land on the ethereum blockchain 🌐
					</p>
				</div>
				<div className={classes.right_container}>
					<div className={classes.large_pixel}></div>
					{/* <div>Owned by:</div>
					<div>JKLWNFKJCA9724RBDNWD...</div>
					<div style={{ marginTop: '8px' }}>
						What matters most, is how well you walk through the fire
					</div> */}
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					flexFlow: 'row',
					justifyContent: 'space-between',
					margin: '0 8px 8px 8px'
				}}
			>
				<a className={classes.link}>Learn More?</a>
				<button className={classes.button} onClick={() => setModalOpen(true)}>
					Connect Wallet
				</button>
			</div>
		</div>
	);
};

export default Menu;
