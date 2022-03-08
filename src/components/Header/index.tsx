import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { IThemeState, setTheme } from '../../Redux/slices/themeSlice';
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
		transition: 'background-color .4s linear',
		zIndex: 1,

		'@media screen and (max-width: 1200px)': {
			boxShadow: 'rgb(0 0 0) 8px 12px 34px 0px',
			lineHeight: 'normal',

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
		marginBottom: '30px',
		justifyContent: 'space-between',

		'@media screen and (max-width: 1200px)': {
			// height: '86px',
			marginBottom: 'unset'
		}
	},
	button: {
		backgroundColor: '#5141f1',
		border: 'solid 4px black',
		borderRadius: '5px',
		color: 'white',
		cursor: 'pointer',
		fontFamily: 'Roboto Slab, serif',
		fontSize: '18px',
		minHeight: '48px',
		outline: 'solid 4px white',
		transition: 'border .4s linear, outline .4s linear, background-color .2s linear',
		width: '180px',
		'&:hover': {
			backgroundColor: '#3effdb',
			color: 'black',
			transition: 'background-color .2s linear',
		},
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

enum Sections {
	About = 0,
	Roadmap = 1,
	Team = 2,
	Faq = 3,
	DontClick = 4
}



const Header = () => {
	const classes = useStyles();
	const [walletConnected, setWalletConnected] = React.useState<boolean>(false);
	const [userWalletAddress, setUserWalletAddress] = React.useState<string>('');

	const [section, setSection] = React.useState<number>(0);
	const sectionRef = React.useRef<HTMLDivElement>(null);
	const dispatch = useDispatch();
	const { theme = {} } = useSelector((state: IThemeState): IThemeState => state.theme)
	const headings = ['About', 'RoadMap', 'Team', 'FAQ'];
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
			alert('No Web3 Wallet Extension Detected');
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
						onClick={() => walletConnected ? dispatch(setModalOpen(true)) : connectWallet()}>
						{walletConnected ? 'Go To Mint' : 'Connect Wallet'}
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
