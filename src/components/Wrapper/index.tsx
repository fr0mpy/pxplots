import * as React from 'react';
import { createUseStyles } from 'react-jss';
import GridContainer from '../Grid/GridContainer/';
import Navigation from '../Navigation/';
import { getItemFromLocalStorage } from '../../helpers/storage';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../Redux/slices/themeSlice';
import { deviceTypeIs } from '../../helpers/devices';
import { DeviceType } from '../../enums/devices';
import throttle from '../../helpers/throttle';

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		flexFlow: 'column'
	}
});

const Wrapper = () => {
	const [modalOpen, setModalOpen] = React.useState<boolean>(false);
	const [ignored, force] = React.useReducer(x => x + 1, 0);

	const classes = useStyles();
	const dispatch = useDispatch();

	React.useEffect(() => {
		const storedTheme = getItemFromLocalStorage('theme');

		if (storedTheme) {
			dispatch(setTheme(storedTheme));
		}

		window.addEventListener('resize', onResize);

		return window.removeEventListener('resize', onResize);
	}, [])

	React.useEffect(() => {
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, [])

	const onResize = () => {
		console.log('resize')
		throttle(forceUpdate, 500)
	}

	const forceUpdate = () => force();

	const openModal = () => setModalOpen(true);

	const closeModal = () => setModalOpen(false);
	const isDesktop = deviceTypeIs(DeviceType.Desktop);

	return (
		<div className={classes.container}>
			{/* <Modal open={modalOpen} closeModal={closeModal} /> */}
			<div style={{ height: '100vh', width: '100vw', display: 'flex' }}>
				{isDesktop ? <Navigation /> : null}
				<GridContainer />
			</div>
			{/* <Menu openModal={openModal} /> */}
		</div>
	);
};

export default Wrapper;
