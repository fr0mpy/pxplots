import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { IThemeState } from '../../Redux/slices/themeSlice';
import { useSelector, useDispatch } from 'react-redux'
import ThemeToggle from '../ThemeToggle';
import { Theme } from '../../enums/themes';
import { setModalOpen } from '../../Redux/slices/mintSlice';

const useStyles = createUseStyles({
	root: {
		backgroundColor: 'white',
		boxSizing: 'border-box',
		fontFamily: 'Roboto Slab, serif',
		padding: '18px 16px 8px',
		top: 0,
		transition: 'background-color .4s linear',
		zIndex: 1,

		'@media screen and (max-width: 1024px)': {
			lineHeight: 'normal',
			padding: '4px 16px 2px',
			position: 'absolute',
			width: '100%',

		}
	},
	root_night_mode: {
		backgroundColor: 'black',
		color: 'white',
		transition: 'background-color .4s linear'
	},
	button_container: {
		alignItems: 'center',
		display: 'flex',
		flexFlow: 'row',
		height: 'fit-content',
		justifyContent: 'space-between',

		'@media screen and (max-width: 600px)': {
			margin: '4px 0 0'
		}
	},
	button: {
		backgroundColor: '#5141f1',
		border: 'solid 4px black',
		borderRadius: '5px',
		color: 'white',
		cursor: 'pointer',
		fontFamily: 'Roboto Slab, serif',
		fontSize: '14px',
		minHeight: '42px',
		transition: 'border .4s linear, outline .4s linear, background-color .2s linear',
		width: '140px',

		'&:hover': {
			backgroundColor: '#3effdb',
			color: 'black',
			transition: 'background-color .2s linear',
		},

		'&:active': {
			backgroundColor: '#fffd00',
			boxShadow: 'inset 0 0 16px #000000',
			transition: 'background-color .2s linear, box-shadow .05s linear',
		},

		'@media screen (min-width: 1240px)': {
			fontSize: '18px',
			minHeight: '48px',
			width: '180px'
		}
	},
	mint_button: {
		backgroundColor: '#3effdb',
		border: 'solid 4px black',
		color: 'black',
		marginBottom: '4px',

		'&:hover': {
			color: 'white',
			backgroundColor: '#d362d2',
		}
	},
	button_night_mode: {
		border: 'solid 4px white',
		fontSize: '14px',
		transition: 'border .4s linear, outline .4s linear',

		'@media screen (min-width: 1240px)': {
			fontSize: '18px',
			width: '180px'
		}
	},
	unconnected_text: {
		opacity: 0,
	},
	connected_text_container: {
		height: '16px',
	},
	connected_text: {
		fontSize: '12px',
		opacity: 1,
		transition: 'opacity .2s ease-in-out'

	},

});

const Header = () => {
	const classes = useStyles();
	const [walletConnected, setWalletConnected] = React.useState<boolean>(false);
	const [userWalletAddress, setUserWalletAddress] = React.useState<string>('');
	const [section, setSection] = React.useState<number>(0);
	const sectionRef = React.useRef<HTMLDivElement>(null);
	const dispatch = useDispatch();
	const { theme = {} } = useSelector((state: IThemeState): IThemeState => state.theme)
	const { modalOpen } = useSelector((state: any): any => state.modal)

	const lightMode = theme === Theme.Light;

	React.useEffect(() => {
		if (sectionRef.current) {
			sectionRef.current.scrollTop = 0;
		}
	}, [section])

	const connectWallet = () => {
		if ((window as any).ethereum) {
			(window as any).ethereum
				.request({ method: 'eth_requestAccounts' })
				.then((accounts: Array<string>) => {
					const [account] = accounts;
					(window as any).userWalletAddress = account;
					setWalletConnected(true);
					setUserWalletAddress(account);
				});
		} else {
			alert('No Web3 Wallet Extension Detected. Please install MetaMask');
		}
	};

	return (
		<div className={`${classes.root} ${lightMode ? '' : classes.root_night_mode}`}>
			<div className={classes.button_container}>
				<ThemeToggle />
				<div>
					<button
						className={`
                        ${classes.button}
                        ${walletConnected ? classes.mint_button : ''}
                        ${lightMode ? '' : classes.button_night_mode}
                    `}
						onClick={() => walletConnected ? dispatch(setModalOpen(modalOpen ? false : true)) : connectWallet()}>
						{walletConnected
							? modalOpen
								? 'Go Back'
								: 'Go To Mint'
							: 'Connect Wallet'}
					</button>
					<div className={classes.connected_text_container}>
						<p
							className={`
                                ${classes.connected_text_container}
                                ${userWalletAddress ? classes.connected_text : classes.unconnected_text}
                            `}
							style={{ margin: 0, textAlign: 'center' }}
						>
							{userWalletAddress ?
								`Connected as ...${userWalletAddress.split('').splice(0, 10).join('')}`
								: ''}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
