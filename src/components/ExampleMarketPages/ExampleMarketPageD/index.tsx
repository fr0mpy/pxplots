import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { XAxis } from '../../../enums';
import { Theme } from '../../../enums/themes';
import { IThemeState } from '../../../Redux/slices/themeSlice';

const useStyles = createUseStyles({

	container: {
		boxSizing: 'border-box',
		fontFamily: 'Roboto Slab, serif',
		height: '100%',
		width: '100%',
		opacity: 0.25,
		backgroundColor: 'black',
		transition: 'opacity .2s ease-in-out',
		display: 'flex',
		flexFlow: 'column',
		'&:hover': {
			transition: 'opacity .2s ease-in-out',
			opacity: 1
		},

		'@media screen and (max-width: 1024px)': {
			border: 'solid 5px #5141f1',
			borderRadius: '8px',
			opacity: 1,
			overflowY: 'auto',
			width: '80vw',
			height: '72%',
			left: '50%',
			position: 'absolute',
			top: '50%',
			transform: 'translate(-50%, -50%)'
		},

		'@media screen and (max-width: 600px)': {
			height: '68%',
			top: '48%',
			width: '88%'
		},

		'@media screen and (max-width: 380px)': {
			height: '62.5%'
		}
	},
	section: {
		// height: '100%'
	}
})

interface IHoveredRect {
	index: number,
	xAxis: xAxis
}

type xAxis = XAxis.Left | XAxis.Right;
const ExampleMarketPageC = () => {
	const classes = useStyles();

	return (
		<div className={classes.container} style={{ scrollSnapType: 'y mandatory' }}>
			<div style={{
				height: '100%',
				width: '100%',
				minHeight: '100%',
				scrollSnapAlign: 'start',
				display: 'flex',
				justifyContent: 'center',
				backgroundColor: '#dfbf49',
				alignItems: 'center'
			}}
			>
				<p style={{ textAlign: 'center' }}>
					Or, just have full page images
				</p>
			</div>
			<div style={{
				height: '100%',
				width: '100%',
				minHeight: '100%',
				scrollSnapAlign: 'start',
				display: 'flex',
				justifyContent: 'center',
				backgroundColor: '#49dfdf',
				alignItems: 'center'
			}}
			>
				<p style={{ textAlign: 'center' }}>
					Hope you've enjoyed these examples
				</p>
			</div>
			<div style={{
				height: '100%',
				width: '100%',
				minHeight: '100%',
				scrollSnapAlign: 'start',
				display: 'flex',
				justifyContent: 'center',
				backgroundColor: '#49df93',
				alignItems: 'center'
			}}
			>
				<p style={{ textAlign: 'center' }}>
					Any questions, drop a us Tweet!
				</p>
			</div>
			<div style={{
				height: '100%',
				width: '100%',
				minHeight: '100%',
				scrollSnapAlign: 'start',
				display: 'flex',
				justifyContent: 'center',
				backgroundColor: '#df5e49',
				alignItems: 'center'
			}}
			>

			</div>
		</div>
	);
};

export default ExampleMarketPageC;

