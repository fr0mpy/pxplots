import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { Theme } from '../../enums/themes';
import { IThemeState } from '../../Redux/slices/themeSlice';

const useStyles = createUseStyles({
	overlay: {
		height: '100vh',
		width: '100vw',
		position: 'absolute',
		animation: 'fade-in 2s',
		transition: 'background .4s linear',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',

		'@media screen and (max-width: 600px)': {
			top: '52.5%'
		}
	},
	modal_container: {
		border: 'solid 4px #3effdb',
		padding: '24px 32px 32px 32px',
		background: 'rgb(255, 255, 255, 1)',
		boxShadow: 'rgb(0 0 0) 8px 12px 34px 0px',
		borderRadius: '8px',
		display: 'flex',
		flexFlow: 'column',
		fontFamily: 'Roboto Slab, serif',
		height: '60%',
		justifyContent: 'center',
		width: '40%',
		position: 'absolute',
		left: '50%',
		lineHeight: 'normal',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		textAlign: 'center',
		transition: 'all .4s ease-in',

		'@media screen and (max-width: 1024px)': {
			width: '80%'
		},

		'@media screen and (max-width: 600px)': {
			height: '68%',
			padding: '16px',
			width: '80%'
		},

		'@media screen and (max-width: 280px)': {
			height: '68%',
			padding: 0,
			width: '88%'
		}
	},
	modal_container_night: {
		backgroundColor: 'black',
		color: 'white',
		transition: 'all .4s ease-in'

	},
	button: {
		backgroundColor: '#3effdb',
		border: 'solid 4px black',
		borderRadius: '5px',
		color: 'black',
		cursor: 'pointer',
		fontFamily: 'Roboto Slab, serif',
		fontSize: '32px',
		minHeight: '82px',
		outline: 'solid 4px white',
		transition: 'border .4s linear, outline .4s linear, background-color .2s linear',
		width: '262px',
		padding: '8px',
		margin: '42px auto 0 auto',

		'&:active': {
			backgroundColor: '#fffd00',
			boxShadow: 'inset 0 0 16px #000000',
			transition: 'background-color .2s linear, box-shadow .05s linear',
		}
	},
	mint_button: {
		border: 'solid 4px black',
		backgroundColor: '#3effdb',
		color: 'black',

		'&:hover': {
			color: 'white',
			backgroundColor: '#d362d2',
		}
	},
	button_night_mode: {
		border: 'solid 4px white',
		outline: 'solid 4px black',
		transition: 'border .4s linear, outline .4s linear',
	},
	link: {
		color: '#3effdb',
		fontWeight: 900,
		cursor: 'pointer !important',
		textDecoration: 'none',
		width: '100%',
		fontSize: '32px',

		'&:hover': {
			color: '#3effdb',
			opacity: .75
		}
	},
	link_night: {
		color: '#5141f1',
	}
});

const MintModal = () => {
	const classes = useStyles();
	const { theme = {} } = useSelector((state: IThemeState): IThemeState => state.theme)
	const lightMode = theme === Theme.Light;

	return (
		<div className={classes.overlay}>
			<div className={`${classes.modal_container} ${lightMode ? '' : classes.modal_container_night}`}>
				<p style={{ fontSize: '32px', margin: '12px 0 46px' }}>
					Mint Coming Soon...
				</p>
				<div>
				</div>
				<p style={{ fontSize: '20px', margin: '12px 0' }}>
					In the meantime: You have found your first easter egg!
				</p>
				<p style={{ fontSize: '20px', margin: '12px 0' }}>
					However,
				</p>
				<p style={{ fontSize: '20px', margin: '12px 0' }}>
					You have also just lost
				</p>
				<a href={'https://knowyourmeme.com/memes/the-game'} target={'blank'}>
					<button className={classes.button}>
						The Game
					</button>
				</a>
			</div>
		</div >
	)
}

export default MintModal;

