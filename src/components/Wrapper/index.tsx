import * as React from 'react';
import { createUseStyles } from 'react-jss';
import GridContainer from '../Grid/GridContainer/';
import Navigation from '../Navigation/';
// import Menu from '../Menu/';
import Modal from '../Modal/';
import { getItemFromLocalStorage } from '../../helpers/storage';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../Redux/slices/themeSlice';
import { deviceTypeIs } from '../../helpers/devices';
import { DeviceType } from '../../enums/devices';

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		flexFlow: 'column'
	}
});

const Wrapper = () => {
	const [modalOpen, setModalOpen] = React.useState<boolean>(false);
	const classes = useStyles();
	const dispatch = useDispatch();

	React.useEffect(() => {
		const storedTheme = getItemFromLocalStorage('theme');

		if (storedTheme) {
			dispatch(setTheme(storedTheme))
		}
	}, [])

	const openModal = () => setModalOpen(true);

	const closeModal = () => setModalOpen(false);
	const isDesktop = deviceTypeIs(DeviceType.Desktop);

	return (
		<div className={classes.container}>
			<Modal open={modalOpen} closeModal={closeModal} />
			<div style={{ height: '100vh', width: '100vw', display: 'flex' }}>
				{isDesktop ? <Navigation /> : null}
				<GridContainer />
			</div>
			{/* <Menu openModal={openModal} /> */}
		</div>
	);
};

export default Wrapper;
