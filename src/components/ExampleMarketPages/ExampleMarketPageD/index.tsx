import { createUseStyles } from 'react-jss';

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
			height: '58%'
		}
	},
	text: {
		fontSize: '16px',
		lineHeight: 'normal',
		width: '80%',
		textAlign: 'center',

		'@media screen and (max-width: 1024px)': {
			fontSize: '26px'
		},
		'@media screen and (max-width: 600px)': {
			fontSize: '20px'
		},
	}
})

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
				backgroundColor: '#49dfdf',
				alignItems: 'center'
			}}
			>
				<p className={classes.text}>
					Or, just have full page images to scroll through...
				</p>
			</div>
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
				<p className={classes.text}>
					Hope you've enjoyed these examples - a glimpse of what this project sets out to accomplish
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
				<p className={classes.text}>
					Any questions, drop a us Tweet!
				</p>
			</div>
			<div
				style={{
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
				<p
					style={{
						color: '#df5e49',
						textAlign: 'center',
						width: '100%',
					}}
				>
					69
				</p>
			</div>
		</div>
	);
};

export default ExampleMarketPageC;

