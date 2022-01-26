import { render } from '@testing-library/react';
import * as React from 'react';
import { createUseStyles } from 'react-jss';
import ConnectWalletButton from '../ConnectWalletButton/index.tsx';

const useStyles = createUseStyles({
	overlay: {
		background: 'rgba(0, 0, 0, 0.75)',
		height: '100vh',
		width: '100vw',
		position: 'absolute'
	},
	modal_container: {
		fontFamily: 'Roboto Slab, serif',
		padding: '24px 32px 32px 32px',
		background: 'rgb(255, 255, 255, 1)',
		border: 'solid 4px black',
		borderRadius: '8px',
		height: '400px',
		width: '400px',
		position: 'absolute',
		left: '50%',
		top: '42.5%',
		transform: 'translate(-50%, -50%)',
		textAlign: 'center',
	},
	section_container: {
		display: 'flex',
		flexFlow: 'column',
		margin: 'auto 0',
		height: '360px',
		overflow: 'auto',
		'&::-webkit-scrollbar': {
			width: '0.4em',
			height: '10px !important'
		},
		'&::-webkit-scrollbar-track': {
			padding: '0 16px'
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'black',
			borderRadius: '8px',
			border: 'solid 2px white',
			marginLeft: '10px'
		}
	},
	sectionHeaders_container: {},
	sectionHeaders: {
	},
	button: {
		backgroundColor: 'cyan',
		border: 'solid 4px black',
		outline: 'solid 4px white',
		borderRadius: '5px',
		cursor: 'pointer',
		fontFamily: 'Roboto Slab, serif',
		fontSize: '18px',
		minHeight: '48px',
		margin: '6px auto',
		width: '180px'
	},
	heading_buttons_container: {
		marginBottom: '16px'
	},
	heading_button: {
		fontSize: '15px',
		fontFamily: 'Roboto Slab, serif',
		border: 'none',
		backgroundColor: 'white',
		opacity: 0.7,
		cursor: 'pointer'
	},
	mint_button: {
		border: 'solid 4px white',
		outline: 'solid 4px black'
	},
	heading_button_active: {
		opacity: 1
	},
	text: {
		margin: '14px'
	},
	mint_quantity_button: {
		margin: '16px',
		minHeight: '42px',
		width: '42px',
		backgroundColor: '#b8b8b8'
	},
	mint_buttons_container: {
		display: 'flex',
		flexFlow: 'row',
		justifyContent: 'center'
	}
});

interface IProps {
	open: boolean;
	closeModal(): void;
}

enum Sections {
	About = 0,
	Team = 1,
	Roadmap = 2,
	Faq = 3,
	DontClick = 4
}

const Modal = ({ open, closeModal }: IProps) => {
	const [section, setSection] = React.useState<number>(0);
	const [walletConnected, setWalletConnected] = React.useState<boolean>(false);
	const [mintWindowOpen, setMintWindowOpen] = React.useState<boolean>(false);
	const [numberOfMints, setNumberOfMints] = React.useState<number>(0);

	const classes = useStyles();

	const connectWallet = () => {
		if ((window as any).ethereum) {
			(window as any).ethereum
				.request({ method: 'eth_requestAccounts' })
				.then((accounts: Array<string>) => {
					console.log('connected')
					const [account] = accounts;
					(window as any).userWalletAddress = account;
					setWalletConnected(true);
				});
		} else {
			alert('No Web3 Wallet Extension Detected');
		}
	};

	const about = () => {
		return (
			<>
				<button
					className={`${classes.button} ${walletConnected ? classes.mint_button : ''}`}
					onClick={walletConnected ?
						() => setMintWindowOpen(true) : () => connectWallet()
					}>
					{walletConnected ? 'Go To Mint' : 'Connect Wallet'}
				</button>
				<p className={classes.text}>
					pxplots are 10,000, tiny, hyper-realistic plots of land, living on the Ethereum blockchain.
				</p>
				<p className={classes.text}>
					You can see each plot of land on the screen and if you hover over / press on a plot, you'll be able to see who owns it.
				</p>
				<p className={classes.text}>
					The first 2,000 plots will be free to mint, with the remaining 8,000 costing 0.02eth per plot.
				</p>
				<p className={classes.text}>
					Each plot takes up an equal sized / randomly generated px on the screen and each will have 2 traits - a colour and a number.
					These traits combined will determine the plots rarity.
				</p>
				<p className={classes.text}>
					Simple. Sm0l. Something.
				</p>



			</>
		)
	}

	const roadmap = () => {
		return (
			<>
				<h2>
					2000 minted 🌱
				</h2>
				<p className={classes.text}>
					First 2000 are free to mint. Enjoy!
				</p>
				<h2>
					4000 minted
				</h2>
				<p className={classes.text}>
					1eth giveaway to a random holder!
				</p>
				<h2>
					6000 minted
				</h2>
				<p className={classes.text}>
					2eth giveaway to a random holder!
				</p>
				<h2>
					8000 minted
				</h2>
				<p className={classes.text}>
					3eth giveaway to a random holder!
				</p>
				<h2>
					10000 minted 🚀
				</h2>
				<p className={classes.text}>
					5eth giveaway to a random holder!
				</p>
				<p className={classes.text}>
					10% stored to fund community initiatives
				</p>
				<p className={classes.text}>
					10% stored in a community wallet to donate to charity
				</p>
				<p className={classes.text}>
					Community discussions for directions they
					would like to see the project go in
				</p>
			</>
		)
	}

	const team = () => {
		return (
			<>
				<p className={classes.text}>
					Hello frens 🖖
				</p>
				<p className={classes.text}>
					It's just me. My names Frompy and I'm a web developer and kind of an artist? Idk. What my code produces is my art,
					but you could say that about anything really. So maybe i'm not, who knows?
				</p>
				<p className={classes.text}>
					But anyway,
				</p>
				<p className={classes.text}>
					I became hooked by the internet as a 5 year old kid sometime around
					1997 when my dad first showed me his new computer - A machine
					running Windows 95' and the revolutionary new web browser: Internet
					Explorer. It was incredible.
				</p>
				<p className={classes.text}>
					At this point the world wide web was just a year older than I was. And man, have things changed in that time. Now more than ever.
				</p>
				<p className={classes.text}>
					Like so many of you, I'm ridiculously excited for what the future holds, but just before that, I want to
					create a small tribute to the simpler times.
				</p>
				<p className={classes.text}>
					Thankyou and Enjoy!
				</p>
				<p className={classes.text}>
					Frompy 🙏
				</p>
			</>
		)
	}

	const faq = () => {
		return (
			<>
				<h2>
					When mint
				</h2>
				<p className={classes.text}>
					Mint will begin April 1st 2022 at 12:00 UTC. Please double check what 12:00 UTC is in your own timezone.
				</p>
				<h2>
					How much
				</h2>
				<p className={classes.text}>
					The first 2,000 plots are free to mint, with the remaining 8,000 costing 0.02eth. Plus gas, of course.
				</p>
				<h2>
					White list
				</h2>
				<p className={classes.text}>
					There will be a whitelist of 500 people, who can each mint 1 plot. Further details will be released soon!
				</p>
				<h2>
					Are pxplots the smallest pieces of land in web3?
				</h2>
				<p className={classes.text}>
					Maybe. They're pretty small, that's for sure.
				</p>
				<h2>
					What is 100% on chain
				</h2>
				<p className={classes.text}>
					This means everything pxplots is, lives on the the ethereum blockchain. The data, the images, the website. Everything.
					Many projects store their data elsewhere, so they're not really decentralised.
					This isn't a bad thing, but it means the only thing that can break the project is for the Ethereum network to stop existing
				</p>
			</>
		)
	}

	const dontClick = () => {
		return (
			<>
				<p className={classes.text}>You just lost The Game</p>
				👻
			</>
		)
	}

	const renderSection = () => {
		switch (section) {
			case Sections.About:
				return about();
			case Sections.Roadmap:
				return roadmap();
			case Sections.Team:
				return team();
			case Sections.Faq:
				return faq();
			case Sections.DontClick:
				return dontClick();
			default:
				return;
		}
	}

	const headings = ['About', 'Team', 'Roadmap', 'Faq', 'Dont Click']

	const renderHeadings = () => {
		return headings.map((heading, i) => {
			const active = i === section;
			return (
				<button
					className={`${classes.heading_button} ${active ? classes.heading_button_active : ''}`}
					onClick={() => setSection(i)}

				>
					{heading}
				</button>
			)
		})
	}

	const renderMintWindow = () => {
		return (
			<>
				<p className={classes.text}>Select the number of pxplots you would like to mint</p>
				<div className={classes.mint_buttons_container}>
					<button className={`${classes.button} ${classes.mint_quantity_button}`} onClick={() => setNumberOfMints(1)}>1</button>
					<button className={`${classes.button} ${classes.mint_quantity_button}`} onClick={() => setNumberOfMints(3)}>3</button>
					<button className={`${classes.button} ${classes.mint_quantity_button}`} onClick={() => setNumberOfMints(5)}>5</button>
				</div>
				<p className={classes.text} style={{ marginBottom: '2px', fontSize: '14px' }}>The first 2,000 mints are free.</p>
				<p className={classes.text} style={{ marginTop: '2px', fontSize: '14px' }}>After that 1 plot = 0.02eth</p>
				<div>
					<button
						className={classes.button}
						onClick={() => console.log(`minting ${numberOfMints} plots`)}
						style={{ marginTop: '24px', backgroundColor: 'yellow' }}
					>
						Mint your plot(s)!
					</button>
				</div>
			</>
		)
	}

	return (
		open ? <div className={classes.overlay}>
			<div className={classes.modal_container}>
				<div className={classes.heading_buttons_container}>
					{renderHeadings()}
				</div>
				<div className={classes.section_container}>
					{mintWindowOpen ? renderMintWindow() : renderSection()}
				</div>
			</div>
		</div> : null
	);
};

export default Modal;
