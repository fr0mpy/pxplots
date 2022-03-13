import * as React from 'react';
import { createUseStyles } from 'react-jss';

interface IProps {
	bgColour: string;
}

const useStyles = createUseStyles({
	plot: {
		minHeight: '1.5rem',
		maxHeight: '30px',
		minWidth: '1.5rem',
		maxWidth: '30px',
		// flex: 1
	}
});

interface IProps {
	bgColour: string;
}

const GridBox = ({ bgColour }: IProps) => {
	const classes = useStyles();

	return (
		<div
			style={{
				backgroundColor: bgColour,
			}}
			className={classes.plot}
		/>
	);
};

export default GridBox;
