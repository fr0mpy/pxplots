import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { usePrevious } from '../../../hooks/index.tsx';
import GridBox from '../GridBox/index.tsx'

interface IProps {
	boxSize: number;
}

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		flexFlow: 'row wrap'
	},
	root: {
		//
	},
	deadPixels: {
		backgroundColor: 'black',
		flex: 1
	}
});

const getBgColour = () => {
	const randomColour = Math.floor(Math.random() * 16777215).toString(16);
	return `#${randomColour}`;
};

const GridBoxes = ({ boxSize }: IProps) => {
	const classes = useStyles();
	const [gridBoxes, setGridBoxes] = React.useState([])

	const prevBoxSize = usePrevious(boxSize);

	// React.useEffect(() => {
	// 		createGridBoxes()
	// 	}
	// })

	const createGridBoxes = () => {
		const gridBoxes = [...Array(5000)].map((array) => {
			const bgColour = getBgColour()
			return (
				<GridBox bgColour={bgColour} />
			);
		})

		return gridBoxes
	}

	const gridBoxesz = createGridBoxes()

	return (
		<div className={classes.container}>
			{gridBoxesz}
			<span className={classes.deadPixels} id={'dead-pixels'} />
		</div>
	);
};

export default GridBoxes;
