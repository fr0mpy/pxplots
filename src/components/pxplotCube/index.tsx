import * as React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	cube: {
		borderRadius: '4px',
		height: '38px',
		width: '38px',
		transition: 'background-color .25s ease-in-out'
	},
	cube_container: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center'
	}

});

const getBgColour = () => {
	const randomColour = Math.floor(Math.random() * 16777215).toString(16);
	return `#${randomColour}`;
};


const PxplotCube = () => {
	const [bgColour, setBgColour] = React.useState<string>('');
	const classes = useStyles();

	React.useEffect(() => {
		interval();
	}, [])

	const interval = () => {
		setInterval(() => {
			const newBgColour = getBgColour();
			setBgColour(newBgColour)
		}, 1000)
	}

	return (
		<div className={classes.cube_container}>
			<div
				className={classes.cube}
				style={{
					backgroundColor: bgColour,
				}}
			/>
		</div>
	);
};

export default PxplotCube;
