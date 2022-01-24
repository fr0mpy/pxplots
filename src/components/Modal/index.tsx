import * as React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	overlay: {
		backgroundColor: 'black',
		opacity: 0.8,
		height: '100vh',
		width: '100vw',
		position: 'absolute'
	},
	modal_container: {
		backgroundColor: 'white',
		border: 'solid 4px black',
		borderRadius: '8px',
		height: '75%',
		width: '40%'
	}
});

interface IProps {
	open: boolean;
	closeModal(): void;
}

const Menu = ({ open, closeModal }: IProps) => {
	const [modalOpen, setModalOpen] = React.useState(false);
	const classes = useStyles();

	return (
		<div className={classes.overlay} onClick={() => closeModal}>
			<div className={classes.modal_container}></div>
		</div>
	);
};

export default Menu;
