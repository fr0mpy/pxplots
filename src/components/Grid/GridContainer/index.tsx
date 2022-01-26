import * as React from 'react';
import { createUseStyles } from 'react-jss';
import GridBox from '../GridBox/index.tsx';

const useStyles = createUseStyles({
	container: {
		overflow: 'hidden',
		height: '90vh',
		maxWidth: '100vw',
		lineHeight: 0,
		// flex: 4
		// verticalAlign: 'top'
	}
});

/*
Put a divref in the container
Use the divref to work out the divs height & width
Find the highest divisor of both height & width
pass that size through to grid box
grid box use size for height & width of box

on divref resize, recalculate square sizes
*/

const GridContainer = () => {
	const classes = useStyles();
	const divEl = React.useRef<HTMLDivElement>(null);
	const [boxSize, setBoxSize] = React.useState<number>(0);

	React.useEffect(() => {
		if (divEl.current) {
			window.addEventListener('resize', debounce(onResize, 300));
		}
	}, [divEl]);

	React.useEffect(() => {
		onResize();
	}, []);

	const onResize = () => {
		const gridHeight = divEl.current.offsetHeight;
		const gridWidth = divEl.current.offsetWidth;
		calc2(gridHeight, gridWidth);
	};

	const debounce = (callback, delay) => {
		let timeout;
		return function () {
			clearTimeout(timeout);
			timeout = setTimeout(callback, delay);
		};
	};

	const calc2 = (rectHeight, rectWidth) => {
		const tableRatio = rectWidth / rectHeight;
		let columns = Math.sqrt(10000 * tableRatio);
		let rows = columns / tableRatio;

		columns = Math.ceil(columns); // the number of columns of squares we will have
		rows = Math.ceil(rows); // the number of rows of squares we will have

		const squareSize = rectWidth / columns; // the size of each square.
		setBoxSize(squareSize);
	};

	return (
		<div className={classes.container} ref={divEl}>
			<GridBox boxSize={boxSize} />
		</div>
	);
};

export default GridContainer;
