import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { XAxis } from '../../../enums';
import { DeviceType } from '../../../enums/devices';
import { Theme } from '../../../enums/themes';
import { deviceTypeIs } from '../../../helpers/devices';
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
		zIndex: 2,

		'&:hover': {
			transition: 'opacity .2s ease-in-out',
			opacity: 1
		},

		'@media screen and (max-width: 1024px)': {
			border: 'solid 5px #5141f1',
			borderRadius: '8px',
			opacity: 1,
			lineHeight: 'normal',
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
		zIndex: 1
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
		},

	},
	right_half_container: {
		flex: '1',
		width: '100%',
		marginRight: '4px',

		'@media screen and (max-width: 600px)': {
			paddingTop: '64px'
		},
	},
	rect: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center',
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
		transition: 'opacity .2s ease-in-out',
	},
	text_hovered: {
		opacity: 1,
		transition: 'opacity .2s ease-in-out'
	},
	nav_header: {
		fontSize: '14px',
		textAlign: 'center',

		'@media screen and (max-width: 1024px)': {
			fontSize: '22px'
		},
	},
	nav_text: {
		fontSize: '10px',
		textAlign: 'center',

		'@media screen and (max-width: 1024px)': {
			fontSize: '18px'
		},
	},
	square: {
		backgroundColor: 'black',
		height: '34px',
		width: '34px',
		margin: '8px auto 0',

		'@media screen and (max-width: 600px)': {
			margin: 0
		},

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
	const { theme = {} } = useSelector((state: IThemeState): IThemeState => state.theme)
	const lightMode = theme === Theme.Light;
	const isDesktop = deviceTypeIs(DeviceType.Desktop);
	const isMobile = deviceTypeIs(DeviceType.Mobile);
	const isTablet = deviceTypeIs(DeviceType.Tablet);


	const rectsLeft = [
		{ height: isTablet ? 135 : 105, bgColour: '#f187fa' },
		{ height: isTablet ? 155 : 125, bgColour: '#e4274e' },
		{ height: isTablet ? 170 : 125, bgColour: '#3effdb' },
		{ height: isTablet ? 180 : 155, bgColour: '#5141f1' },
		{ height: isTablet ? 155 : 195, bgColour: '#8dc2ff' },
		{ height: isTablet ? 200 : 100, bgColour: '#8dfffd' },
		{ height: isTablet ? 178 : 100, bgColour: '#dbff8d' },
		{ height: isTablet ? 210 : 155, bgColour: '#f39191' },
		{ height: isTablet ? 174 : 155, bgColour: '#e4274e' },
		{ height: isTablet ? 145 : 100, bgColour: '#eb67b3' },
		{ height: isTablet ? 190 : 100, bgColour: '#22a6c0' },
		{ height: isTablet ? 134 : 100, bgColour: '#8d8dff' },
		{ height: isTablet ? 168 : 155, bgColour: '#89c0ff' },
		{ height: isTablet ? 170 : 115, bgColour: '#22a6c0' },
	]

	const rectsRight = [
		{ height: isTablet ? 240 : 165, bgColour: '#22a6c0' },
		{ height: isTablet ? 200 : 170, bgColour: '#8d8dff' },
		{ height: isTablet ? 220 : 155, bgColour: '#89c0ff' },
		{ height: isTablet ? 230 : 165, bgColour: '#14eb9c' },
		{ height: isTablet ? 195 : 165, bgColour: '#22a6c0' },
		{ height: isTablet ? 235 : 170, bgColour: '#8d8dff' },
		{ height: isTablet ? 190 : 155, bgColour: '#89c0ff' },
		{ height: isTablet ? 210 : 165, bgColour: '#14eb9c' },
		{ height: isTablet ? 230 : 165, bgColour: '#8d8dff' },
		{ height: isTablet ? 200 : 170, bgColour: '#89c0ff' },
		{ height: isTablet ? 220 : 155, bgColour: '#14eb9c' },
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
							<p className={`${classes.text} ${active ? classes.text_hovered : ''}`}>{tg ? 'This isn\'t an easter egg... but you\'re close to one! ' : 'Artwork Name'}</p>
							<p className={`${classes.text} ${active ? classes.text_hovered : ''}`}>{tg ? '' : '0.3ETH'}</p>
						</div>
					</>
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
						<a href={'https://i.kym-cdn.com/entries/icons/mobile/000/012/748/circle.jpg'} className={classes.circle}
							style={{
								backgroundColor: lightMode ? 'black' : 'white',
								transition: 'background-color .4s ease-in'
							}}
						>
							<span
								className={classes.circle}
							/>
						</a>
						: <span
							className={classes.circle}
							style={{
								backgroundColor: lightMode ? 'black' : 'white',
								transition: 'background-color .4s ease-in'
							}}
						/>
				})}
			</div>
		)
	}

	return (
		<div className={classes.container}>
			{isMobile
				? <div style={{
					height: '64px',
					backgroundColor: lightMode ? 'white' : 'black',
					boxShadow: 'rgb(0 0 0) 8px 12px 34px 0px',
					width: '100%',
					position: 'fixed',
					top: 0,
					zIndex: 2,
					transition: 'background-color .4s ease-in'
				}}>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							height: '100%',
							justifyContent: 'space-around'
						}}
					>
						<div
							className={classes.square}
							style={{
								backgroundColor: lightMode ? 'black' : 'white',
								transition: 'background-color .4s ease-in'
							}}
						/>
						<div
							className={classes.square}
							style={{
								backgroundColor: lightMode ? 'black' : 'white',
								transition: 'background-color .4s ease-in'
							}}
						/>
						<div
							className={classes.square}
							style={{
								backgroundColor: lightMode ? 'black' : 'white',
								transition: 'background-color .4s ease-in'
							}}
						/>
					</div>

				</div>
				: <>
					{renderCircles()}
					<div
						className={classes.nav}
						style={{
							backgroundColor: lightMode ? 'white' : 'black',
							transition: 'background-color .4s ease-in'
						}}
					>
						<p
							className={classes.nav_header}
							style={{
								color: lightMode ? 'black' : 'white',
								transition: 'background-color .4s ease-in'
							}}
						>
							Your Page
						</p>
						<p className={classes.nav_text}
							style={{
								color: lightMode ? 'black' : 'white',
								transition: 'color .4s ease-in'
							}}
						>
							Maybe you prefer less text and more images
						</p>
						<p
							className={classes.nav_text}
							style={{
								color: lightMode ? 'black' : 'white',
								transition: 'color .4s ease-in'
							}}
						>
							You can see where we've going with this. There will be many options
						</p>
						<div
							className={classes.square}
							style={{
								backgroundColor: lightMode ? 'black' : 'white',
								transition: 'background-color .4s ease-in'
							}}
						/>
						{!isDesktop
							? <>
								<div
									className={classes.square}
									style={{
										backgroundColor: lightMode ? 'black' : 'white',
										transition: 'background-color .4s ease-in'
									}}
								/>
								<div
									className={classes.square}
									style={{
										backgroundColor: lightMode ? 'black' : 'white',
										transition: 'background-color .4s ease-in'
									}}
								/>
							</>
							: null}

					</div>
				</>
			}
			<div className={classes.right_container} >
				{isMobile
					? null
					: <div style={{ width: '115px' }} />}

				<div className={classes.right_half_container}>
					{renderRects(rectsLeft, XAxis.Left)}
				</div>
				<div className={classes.right_half_container}>
					{renderRects(rectsRight, XAxis.Right)}
				</div>
			</div>
		</div >
	);
};

export default ExampleMarketPageC;

