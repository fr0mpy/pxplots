import { createUseStyles } from 'react-jss';
import GridBox from '../GridBox/'

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		flexFlow: 'row wrap',
		width: 'calc(100% + 30px)'
	}
});

const getBgColour = () => {
	const randomColour = Math.floor(Math.random() * 16777215).toString(16);
	return `#${randomColour}`;
};

const GridBoxes = () => {
	const classes = useStyles();

	const createGridBoxes = () => {
		const gridBoxes = [...Array(5000)].map((array) => {
			const bgColour = getBgColour()
			return (
				<GridBox bgColour={bgColour} />
			);
		})

		return gridBoxes
	}

	const gridBoxes = createGridBoxes()

	return (
		<div className={classes.container}>
			{gridBoxes}
		</div>
	);
};

export default GridBoxes;
