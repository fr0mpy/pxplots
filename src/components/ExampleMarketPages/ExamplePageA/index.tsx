import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { DeviceType } from '../../../enums/devices';
import { Theme } from '../../../enums/themes';
import { deviceTypeIs } from '../../../helpers/devices';
import { IThemeState } from '../../../Redux/slices/themeSlice';
const useStyles = createUseStyles({
	overlay: {
		height: '100%',
		width: ' 100%',
		position: 'absolute',

	},
	container: {
		backgroundColor: 'white',
		color: 'black',
		display: 'flex',
		flexFlow: 'column',
		fontFamily: 'Roboto Slab, serif',
		padding: '12px',
		opacity: 0.25,
		transition: 'all .2s ease-in-out',

		'&:hover': {
			transition: 'opacity .2s ease-in-out',
			opacity: 1
		},

		'@media screen and (max-width: 1024px)': {
			border: 'solid 5px #5141f1',
			borderRadius: '8px',
			boxSizing: 'border-box',
			opacity: 1,
			overflowY: 'auto',
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
	container_night: {
		backgroundColor: 'black',
		color: 'white',
		transition: 'all .2s ease-in-out',
	},
	first_blocks_container: {
		height: '100%',
		display: 'flex',
		flexFlow: 'row',
		justifyContent: 'space-between'
	},
	first_blocks_sub_container: {
		height: '100%',
		width: '45%',
		transition: 'width .3s ease-in-out',
		cursor: 'pointer'
	},
	expanded: {
		transition: 'width .3s ease-in-out',
		width: '100%',
	},
	first_blocks: {
		borderRadius: '4px',
		height: '200px',
		flexGrow: '1',
		backgroundColor: '#89c0ff',
		margin: '6px',
		display: 'flex',
		alignItems: 'flex-end',

		'@media screen and (max-width: 1024px)': {
			height: '250px'
		},

		'@media screen and (max-width: 600px)': {
			height: '140px',
		},
	},
	text: {
		color: 'inherit',
		height: '100%',
		textAlign: 'center',
		fontSize: '14px',
		margin: '32px 16px'
	},
	small_text: {
		fontSize: '12px',
		color: 'inherit',
		margin: '8px 20px',
	},
	center_card: {
		backgroundColor: '#f65d5d',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '2px',
		height: '160px',
		width: '25%',
	},
	center_card_text: {
		color: '#f65d5d',
		fontSize: '6.9px',
		height: '6.9px',
		margin: 0,
		width: '6.9px',
	},
	transition_4: {
		backgroundColor: '',
		transition: 'background-color .4s ease-in-out',
		transformOrigin: ''
	},
	cubes_container: {
		height: '100%',
		display: 'flex',
		flexFlow: 'row',
		justifyContent: 'center'
	},
	cube_container: {
		width: '80px',
		margin: '4px',

		'@media screen and (max-width: 1024px)': {
			width: '120px'
		},

		'@media screen and (max-width: 600px)': {
			width: 'fit-content'
		},
	},
	cube: {
		borderRadius: '4px',
		backgroundColor: '#8dc2ff',
		cursor: 'pointer',
		height: '80px',
		margin: 0,
		transition: 'opacity .2s ease-in-out',
		width: '80px',
		flex: 1,

		'&:hover': {
			transition: 'opacity .2s ease-in-out',
			opacity: .6
		},
		'@media screen and (max-width: 1275px)': {
			height: '120px',
			width: '120px'
		},
		'@media screen and (min-width: 1020px) and (max-width: 1269px)': {
			height: '68px',
			width: '68px'
		},
		'@media screen and (min-width: 1020px) and (max-width: 1150px)': {
			height: '54px',
			width: '54px'
		},
		'@media screen and (max-width: 600px)': {
			height: '84px',
			width: '84px'
		},
	},
	last_cubes_container: {
		display: 'flex',
		flexFlow: 'row',
		justifyContent: 'center',
		marginBottom: '12px',
		height: '116px',


		'@media screen and (max-width: 1024px)': {
			minHeight: '181px'
		},

		'@media screen and (max-width: 600px)': {
			minHeight: '100px'
		},
	},
	last_cubes: {
		borderRadius: '4px',
		flex: 1,
		backgroundColor: '#ffeea7',
		margin: '6px',
		height: '100%',
	},
	textHoverText: {
		color: 'inherit',
		fontSize: '12px',
		margin: '12px',
		maxWidth: '60px',
		opacity: 0,
		position: 'relative',
		top: '32px',
		transition: 'all .6s ease-in-out',

		'@media screen and (min-width: 1020px) and (max-width: 1150px)': {
			margin: '6px',
			maxWidth: '60px',
			height: '70px'
		},

		'@media screen and (max-width: 600px)': {
			margin: '2px'
		}
	},
	textHoverText_hover: {
		fontSize: '12px',
		margin: '12px',
		maxWidth: '60px',
		opacity: 1,
		position: 'relative',
		top: '0',
		transition: 'all .6s ease-in-out',
		width: '80%'
	}
});

const ExampleMarketPageA = () => {
	const classes = useStyles();
	const [expandedBox, setExpandedBox] = React.useState<number | false>(false);
	const [activeBox, setActiveBox] = React.useState<number>(0);
	const isMobile = deviceTypeIs(DeviceType.Mobile);
	const { theme = {} } = useSelector((state: IThemeState): IThemeState => state.theme)
	const lightMode = theme === Theme.Light;

	const renderFirstSubBlocks = () => {
		const bgColours = ['#67ebb4', '#e967eb', '#676beb'];

		return bgColours.map((bgColour, i) => {
			const expanded = i === expandedBox;

			return (
				<div
					className={`${classes.first_blocks_sub_container} ${expanded ? classes.expanded : ''}`}
				>
					<div
						className={classes.first_blocks}
						style={{ backgroundColor: bgColour }}
						onClick={() => setExpandedBox(expanded ? false : i)}
					/>
					<div>
						<p
							className={classes.small_text}
							style={{ textAlign: 'center' }}
						>
							A small bit of info about the NFT
						</p>
						<p
							className={classes.small_text}
							style={{ textAlign: 'center' }}
						>
							0.3ETH
						</p>
					</div>
				</div>
			)
		})
	}

	const renderItems = (indexStart: number, indexEnd: number) => {
		const bgColours = [
			'#58e6cf', '#ffe3b0', '#eb8367', '#e65858',
			'#5dffd6', '#8dc2ff', '#b1465c', '#414190',
			'#22a6c0', '#dbff8d', '#db94e1', '#8d8dff',
			'#8dfffd', '#eb8367', '#ffc58d', '#22a6c0'
		];

		const style = { margin: '6px 0 4px' };

		return bgColours.filter((bgColour, i) => {
			return i >= indexStart && i <= indexEnd
		})
			.map(bgColour => {
				return (
					<div className={classes.cube_container}>
						<div className={classes.cube}
							style={{ backgroundColor: bgColour }}
						/>
						<p
							className={classes.small_text}
							style={style}
						>
							Small sample of info text about the NFT
						</p>
						<p
							className={classes.small_text}
							style={style}
						>
							0.3ETH
						</p>
					</div>
				)
			})

	}

	return (
		<div className={`${classes.container} ${lightMode ? '' : classes.container_night}`}>
			<p className={classes.text} style={{ margin: '4px' }}>
				Create your own gallery.
			</p>
			<p className={classes.text} style={{ margin: '4px 0 12px' }}>
				Showcase your art. Set image sizes. Set prices. Link & Mint it.
			</p>
			<div className={classes.last_cubes_container}>
				<div
					className={classes.last_cubes}
					style={{ backgroundColor: '#6783eb' }}
					onMouseOver={() => setActiveBox(1)}
					onMouseLeave={() => setActiveBox(0)}
				>
					<p className={` ${activeBox === 1 ? classes.textHoverText_hover : classes.textHoverText}`}>
						Set different sizes for your NFT thumbnails
					</p>
				</div>
				<div
					className={classes.last_cubes}
					style={{ backgroundColor: '#faaf87' }}
					onMouseOver={() => setActiveBox(2)}
					onMouseLeave={() => setActiveBox(0)}
				>
					<p className={` ${activeBox === 2 ? classes.textHoverText_hover : classes.textHoverText}`}>
						Add transition effects
					</p>
				</div>
				<div
					className={classes.last_cubes}
					style={{ backgroundColor: '#67c6eb' }}
					onMouseOver={() => setActiveBox(3)}
					onMouseLeave={() => setActiveBox(0)}
				>
					<p className={` ${activeBox === 3 ? classes.textHoverText_hover : classes.textHoverText}`}>
						Link your images to other marketplaces.
					</p>
				</div>
			</div>
			<div style={{ display: 'flex', flexFlow: 'row', marginBottom: '18px' }}>
				{renderFirstSubBlocks()}
			</div>
			<div className={classes.cubes_container}>
				{isMobile ? renderItems(9, 11) : renderItems(12, 15)}
			</div>
			<div className={classes.cubes_container}>
				{isMobile ? renderItems(6, 8) : renderItems(8, 11)}
			</div>
			<div className={classes.cubes_container}>
				{isMobile ? renderItems(3, 5) : renderItems(4, 7)}
			</div>
			<div className={classes.cubes_container}>
				{isMobile ? renderItems(0, 2) : renderItems(0, 3)}
			</div>
		</div>
	)
}

export default ExampleMarketPageA;

