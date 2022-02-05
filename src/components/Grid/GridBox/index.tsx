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

interface IProps {
	bozSize: number;
	bgColour: string;
}

const GridBox = ({ boxSize, bgColour }: IProps) => {
	const classes = useStyles();
	const [active, setActive] = React.useState<boolean>(false);

	return (
		<div
			style={{
				backgroundColor: active ? 'white' : bgColour,
				height: '20px',
				width: '20px'
			}}
		/>
	);
};

export default GridBox;
