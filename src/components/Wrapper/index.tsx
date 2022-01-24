import * as React from 'react';
import { createUseStyles } from 'react-jss';
import GridContainer from '../Grid/GridContainer/index.tsx';
import Menu from '../Menu/index.tsx';
import Modal from '../Modal/index.tsx';

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		flexFlow: 'column'
	}
});

const Wrapper = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Modal />
			<GridContainer />
			<Menu />
		</div>
	);
};

export default Wrapper;
