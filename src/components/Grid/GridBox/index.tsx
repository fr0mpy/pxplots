import * as React from 'react';
import { createUseStyles } from 'react-jss';

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

const bgColour = () => {
	const randomColour = Math.floor(Math.random() * 16777215).toString(16);
	return `#${randomColour}`;
};

// TODO: abstract

const debounce = (callback, delay) => {
	let timeout;
	return function () {
		clearTimeout(timeout);
		timeout = setTimeout(callback, delay);
	};
};

const GridBox = ({ boxSize }: IProps) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			{
			[...Array(10000)].map((array) => {
				return (
					<div
						style={{
							backgroundColor: bgColour(),
							height: boxSize,
							width: boxSize
						}}
					/>
				);
			})
			}
			<span className={classes.deadPixels} id={'dead-pixels'} />
		</div>
	);
};

export default GridBox;
