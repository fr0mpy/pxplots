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
		flexFlow: 'row',
		// paddingLeft: '115px',
		zIndex: 2,

		'&:hover': {
			transition: 'opacity .2s ease-in-out',
			opacity: 1
		},

		'@media screen and (max-width: 1200px)': {
			border: 'solid 5px #5141f1',
			borderRadius: '8px',
			height: '80%',
			opacity: 1,
			position: 'absolute',
			width: '80vw'
		}
	},
	nav: {
		backgroundColor: 'white',
		boxSizing: 'border-box',
		display: 'flex',
		flexFlow: 'column',
		height: '100%',
		left: 0,
		padding: '8px',
		position: 'absolute',
		width: '115px',
		zIndex: 1,
	},
	right_container: {
		display: 'flex',
		flexFlow: 'row',
		overflowY: 'auto',
		overflowX: 'hidden',
		width: '100%',
		zIndex: 1,

		'&::-webkit-scrollbar': {
			width: '0.4em',
			height: '10px !important'
		},

		'&::-webkit-scrollbar-track': {
			padding: '0 16px'
		},

		'&::-webkit-scrollbar-thumb': {
			backgroundColor: '#5141f1',
			borderRadius: '8px',
			border: 'solid 2px black',
			marginLeft: '10px',
			transition: 'border .4s linear',
		}
	},
	right_half_container: {
		flex: '1',
		width: '100%',
		marginRight: '4px'
	},
	rect: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center',
		// '&:hover': {
		//     opacity: 0.5,
		//     transition: 'opacity .2s ease-in-out'
		// }
	},
	circles_container: {
		bottom: '6px',
		display: 'flex',
		flexFlow: 'row',
		justifyContent: 'space-between',
		left: '29px',
		position: 'absolute',
		width: '58px'
	},
	circle: {
		backgroundColor: 'black',
		borderRadius: '100%',
		cursor: 'pointer',
		height: '16px',
		width: '16px',
		zIndex: 4,

		'&:hover': {
			opacity: .6
		}
	},
	text: {
		fontSize: '12px',
		height: 'fit-content',
		margin: 0,
		opacity: 0,
		textAlign: 'center',
		transition: 'opacity .2s ease-in-out'
	},
	text_hovered: {
		opacity: 1,
		transition: 'opacity .2s ease-in-out'
	}
})

interface IHoveredRect {
	index: number,
	xAxis: xAxis
}

type xAxis = XAxis.Left | XAxis.Right;
const ExampleMarketPageC = () => {
	const classes = useStyles();
	const [hoveredRect, setHoveredRect] = React.useState<IHoveredRect | boolean>(false);
	const rectsLeft = [
		{ height: 105, bgColour: '#f187fa' },
		{ height: 125, bgColour: '#e4274e' },
		{ height: 125, bgColour: '#3effdb' },
		{ height: 155, bgColour: '#5141f1' },
		{ height: 195, bgColour: '#8dc2ff' },
		{ height: 100, bgColour: '#8dfffd' },
		{ height: 100, bgColour: '#dbff8d' },
		{ height: 155, bgColour: '#f39191' },
		{ height: 155, bgColour: '#e4274e' },
		{ height: 100, bgColour: '#eb67b3' },
		{ height: 100, bgColour: '#22a6c0' },
		{ height: 100, bgColour: '#8d8dff' },
		{ height: 155, bgColour: '#89c0ff' },
		{ height: 115, bgColour: '#22a6c0' },
	]

	const rectsRight = [
		{ height: 165, bgColour: '#22a6c0' },
		{ height: 170, bgColour: '#8d8dff' },
		{ height: 155, bgColour: '#89c0ff' },
		{ height: 165, bgColour: '#14eb9c' },
		{ height: 165, bgColour: '#22a6c0' },
		{ height: 170, bgColour: '#8d8dff' },
		{ height: 155, bgColour: '#89c0ff' },
		{ height: 165, bgColour: '#14eb9c' },
		{ height: 165, bgColour: '#8d8dff' },
		{ height: 170, bgColour: '#89c0ff' },
		{ height: 155, bgColour: '#14eb9c' },
	]

	const createRect = (
		height: number,
		backgroundColor: string,
		index: number,
		xAxis: xAxis,
		active?: boolean
	): React.ReactNode => {

		const tg = (hoveredRect as IHoveredRect).xAxis === XAxis.Left && index === (11 ?? false);

		return (
			<div style={{
				height,
				width: '100%',
				margin: '4px',
				cursor: 'pointer',
				position: 'relative',
				backgroundColor,
			}}
				onMouseOver={() => setHoveredRect({ index, xAxis })}
				onMouseLeave={() => setHoveredRect(false)}
			>

				{
					// active ?
					<>
						<div
							style={{
								height,
								width: '100%',
								cursor: 'pointer',
								backgroundColor: active ? 'white' : 'transparent',
								opacity: active ? 0.7 : 1,
								transition: 'background-color .2s ease-in-out, opacity .2s ease-in-out'
							}}
							className={classes.rect}
						>
						</div>
						<div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
							<p className={`${classes.text} ${active ? classes.text_hovered : ''}`}>{tg ? 'You Just Lost The Game' : 'Artwork Name'}</p>
							<p className={`${classes.text} ${active ? classes.text_hovered : ''}`}>{tg ? '' : '0.3ETH'}</p>
						</div>
					</>
					// : null
				}
			</div>
		)
	}

	const renderRects = (rects: Array<{ height: number, bgColour: string }>, xAxis: xAxis): React.ReactNode => {
		return rects.map((rect, i) => {
			const active = (hoveredRect as IHoveredRect).xAxis === xAxis && i === ((hoveredRect as IHoveredRect).index ?? false);
			return createRect(rect.height, rect.bgColour, i, xAxis, active)
		})
	}

	const renderCircles = () => {
		return (
			<div className={classes.circles_container}>
				{Array.from(Array(3)).map((_, i) => {
					return i === 2 ?
						<a href={'https://i.kym-cdn.com/entries/icons/mobile/000/012/748/circle.jpg'} className={classes.circle}>
							<span className={classes.circle} />
						</a>
						: <span className={classes.circle} />
				})}
			</div>
		)
	}

	return (
		<div className={classes.container}>
			{renderCircles()}

			<div className={classes.nav}>
				<p style={{ fontSize: '14px', textAlign: 'center' }}>Your Page</p>
				<p style={{ fontSize: '10px', textAlign: 'center' }}>Maybe you prefer less text and more images</p>
				<p style={{ fontSize: '10px', textAlign: 'center' }}>You can see where we've going with this. There will be many options</p>

				<div style={{ backgroundColor: 'black', height: '34px', width: '34px', margin: '8px auto 0' }} />
			</div>
			<div className={classes.right_container}>
				<div style={{ width: '115px' }} />
				<div className={classes.right_half_container}>
					{renderRects(rectsLeft, XAxis.Left)}
				</div>
				<div className={classes.right_half_container}>
					{renderRects(rectsRight, XAxis.Right)}
				</div>
			</div>
		</div>
	);
};

export default ExampleMarketPageC;

