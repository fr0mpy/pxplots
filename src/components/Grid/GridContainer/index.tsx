import * as React from 'react';
import { createUseStyles } from 'react-jss';
import ExampleMarketPages from '../../ExampleMarketPages/index.tsx';
import GridBoxes from '../GridBoxes/index.tsx';

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

	return (
		<div className={classes.container} ref={divEl}>
			<ExampleMarketPages />
			<GridBoxes />
		</div>
	);
};

export default GridContainer;
