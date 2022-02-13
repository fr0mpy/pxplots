import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { IModalState } from '../../../Redux/slices/mintSlice';
import ExampleMarketPages from '../../ExampleMarketPages/';
import MintModal from '../../MintModal';
import GridBoxes from '../GridBoxes/';

const useStyles = createUseStyles({
	container: {
		overflow: 'hidden',
		height: '100vh',
		width: '100%',
		lineHeight: 0,
		position: 'relative'
	}
});

const GridContainer = () => {
	const classes = useStyles();
	const divEl = React.useRef<HTMLDivElement>(null);
	const { modalOpen } = useSelector((state: any): any => state.modal)
	// const { theme = {} } = useSelector((state: IThemeState): IThemeState => state.theme)

	console.log('modal >', modalOpen)
	// 
	return (
		<div className={classes.container} ref={divEl}>
			{modalOpen ? <MintModal /> : <ExampleMarketPages />}
			<GridBoxes />
		</div>
	);
};

export default GridContainer;
