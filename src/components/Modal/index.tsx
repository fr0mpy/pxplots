import * as React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	overlay: {
		background: 'rgba(0, 0, 0, 0.75)',
		height: '100vh',
		width: '100vw',
		position: 'absolute',
		animation: 'fade-in 2s'
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
		'@media screen and (max-width: 600px)': {
			width: '75%'
		}
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
		backgroundColor: '#5141f1',
		color: 'white',
		border: 'solid 4px black',
		outline: 'solid 4px white',
		borderRadius: '5px',
		cursor: 'pointer',
		fontFamily: 'Roboto Slab, serif',
		fontSize: '18px',
		minHeight: '48px',
		margin: '6px auto',
		width: '180px',
		'&:hover': {
			backgroundColor: '#fefd78',
			color: 'black'
		},
		'&:active': {
			backgroundColor: '#fffd00',
			boxShadow: 'inset 0 0 16px #000000'
		}
	},
	heading_buttons_container: {
		margin: '16px'
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
		outline: 'dotted 4px black',
		backgroundColor: '#3effdb',
		color: 'black',
		'&:hover': {
			color: 'white',
			backgroundColor: '#ff5ddc',
		}
	},
	heading_button_active: {
		opacity: 1
	},
	text: {
		margin: '14px'
	},
	mint_quantity_button: {
		color: 'black',
		margin: '12px',
		minHeight: '42px',
		width: '42px',
		backgroundColor: '#b8b8b8'
	},
	active_mint_amount: {
		backgroundColor: '#5141f1',
		color: 'white'
	},
	mint_buttons_container: {
		display: 'flex',
		flexFlow: 'row',
		justifyContent: 'center'
	},
	closeButton: {
		backgroundColor: 'transparent',
		border: 'none',
		cursor: 'pointer',
		fontFamily: 'Roboto Slab, serif',
		fontSize: '28px',
		fontWeight: 900,
		marginRight: '5px',
		outline: 'none',
		position: 'absolute',
		top: '5px',
		right: '5px',
		zIndex: 2,
		'&:hover': {
			opacity: .6
		}
	},
	button_container: {
		display: 'flex',
		flexFlow: 'row',
		width: '70%',
		alignItems: 'center',
		margin: '0 auto',
	},
	mint_window_container: {
		marginTop: '45px'
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
				<div className={classes.button_container}>
					{walletConnected && <span>
						{'>'}
					</span>}
					<button
						className={`${classes.button} ${walletConnected ? classes.mint_button : ''}`}
						onClick={walletConnected ?
							() => setMintWindowOpen(true) : () => connectWallet()
						}>
						{walletConnected ? 'Go To Mint' : 'Connect Wallet'}
					</button>
					{walletConnected && <span>
						{'<'}
					</span>}
				</div>
				<p className={classes.text}>
					pxplots are an NFT, for NFT artists.
				</p>
				<p className={classes.text}>
					10,000, tiny, hyper-realistic plots of land, living on the Ethereum blockchain.
				</p>

				<div style={{ display: 'flex', justifyContent: 'center' }}>

					<div style={{ zIndex: 2, marginRight: '8px' }}>
						<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="48" height="48" fill="white" />
							<rect width="48" height="48" fill="#5FCFFF" />
							<path d="M6.25455 6.25455H41.8909V41.8909H6.25455V6.25455Z" fill="white" />
							<path d="M12.8 12.8H35.3455V35.3455H12.8V12.8Z" fill="#5FCFFF" />
						</svg>

					</div>
					<div style={{ zIndex: 2, marginRight: '8px' }}>
						<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="48" height="48" fill="white" />
							<rect width="48" height="48" fill="#FF5FB5" />
							<path d="M6.25455 6.25455H41.8909V41.8909H6.25455V6.25455Z" fill="white" />
							<path d="M12.8 12.8H35.3455V35.3455H12.8V12.8Z" fill="#FF5FB5" />
						</svg>

					</div>
					<div style={{ zIndex: 2, marginRight: '8px' }}>
						<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="48" height="48" fill="white" />
							<rect width="48" height="48" fill="#2E70F0" />
							<path d="M6.25455 6.25455H41.8909V41.8909H6.25455V6.25455Z" fill="white" />
							<path d="M12.8 12.8H35.3455V35.3455H12.8V12.8Z" fill="#2E70F0" />
						</svg>

					</div>
				</div>

				<p className={classes.text}>
					Each pxplot will soon become it's own personalised market page, owned by the holder - Ideal for NFT artists
					who want to add their own artistic flare to the platform they sell their work from - rather than having a page which looks the same as every other artists.
				</p>
				<p className={classes.text}>
					Think LooksRare/Opensea crossed with SquareSpace.
				</p>
				<p className={classes.text}>
					You'll have your own page e.g. pxplots.xyz/yourname, with a range of pre made layouts to choose from or be able to create your own.
					So you have a personalised space from which you can introduce yourself & sell your artwork, without having to code anything yourself.
				</p>
				<p className={classes.text}>
					And all you'll need to access your plot, is to hold your pxplot in your wallet. Like a key.
				</p>
				<p className={classes.text}>
					You can even sell your plot onwards, if you want to. With the page being wiped on transfer and the new holder being able to again customise the page however they wish to.
				</p>
				<p className={classes.text}>
					For a small NFT, we have big plans.
				</p>
				<p className={classes.text}>
					However for now, whilst we complete our funding round, pxplots is pretty simple - Each plot takes up an equal sized part of the screen, with the position and colour of each plot being randomly
					generated during minting. And if you press on a plot, you'll be able to see who currently owns it.
				</p>
				<p className={classes.text}>
					The first 1,000 plots will be free to mint, with the remaining 9,000 costing 0.05eth per plot. Check our our FAQ for more info.
				</p>
				<p className={classes.text}>
					Thank you for reading!
				</p>
				<p className={classes.text}>
					pxplots
				</p>
				<p className={classes.text}>
					Land for the little guy.
				</p>
			</>
		)
	}

	const roadmap = () => {
		return (
			<>
				<p className={classes.text}>
					Our roadmap is set into 4 sections: minting, research, design & development. Please read all the way down for the full picture.
				</p>
				<h2>
					1000 minted
				</h2>
				<p className={classes.text}>
					First 1000 are free to mint. Enjoy!
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
					It begins... 🌱
				</p>
				<h2>
					Phase 1: Research & Community
				</h2>
				<p className={classes.text}>
					The first phase will involve discussions with a number of web3 consultants and NFT artists, to ensure we do this the right way.
					At this point  a community manager will also be brought on board to help us keep a close relationship with our holders, whilst continuing  to market the platform.
				</p>
				<p className={classes.text}>
					Following the creation of these solid foundations on how pxplots will operate, we will release our whitepaper. Outlining everything.
				</p>
				<h2>
					Phase 2: Design & User Experience
				</h2>
				<p className={classes.text}>
					We will bring onboard UX & UI experts, to take the requirements created in phase one and turn them into working designs.
					This phase will likely be iterated over multiple times, to ensure the designs we begin with have both our users best interests in mind
					and are possible from a development perspective.
				</p>
				<p className={classes.text}>
					Although we are likely to revisit the designs during phase 3, to make any necessary changes that may arise.
				</p>
				<h2>
					Phase 3: Development & Launch
				</h2>
				<p className={classes.text}>
					We will expand the development team to begin building out the designed product from phase 2.
					Regular updates will be provided on our features and at this point a solid timeline will have been established, so we will have a clearer picture on a delivery date.
				</p>
				<p className={classes.text}>
					These 3 phases will likely be iterated over again and again to ensure the pxplots platform is constantly evolving with the needs of our holders and will never become stale.
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
					For now, it's just me. My names Frompy and I'm a web developer and kind of an artist? Idk. What my code produces is my art,
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
					About a year ago I read an article referencing Kevin Kelly's (also my grandads name, oddly) idea of "A Thousand True Fans".
					And since then, I've not been able to stop thinking about it.
				</p>
				<p className={classes.text}>
					It's such a powerful idea and the inspiration behind pxplots -
					To support artists starting out, in growing their personal brand and their fan base.
				</p>
				<p className={classes.text}>
					Like so many of you, I'm ridiculously excited for what the future holds for web3 and I truly hope pxplots can become an integral part of it.
				</p>
				<p className={classes.text}>
					Thankyou for reading about the start of this journey. Your time is greatly appreciated 🙏
				</p>
				<p className={classes.text}>
					Peace, love & gm's
				</p>
				<p className={classes.text}>
					Frompy
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
					The first 1,000 plots are free to mint, with the remaining 8,000 costing 0.05eth. Plus gas, of course.
				</p>
				<h2>
					White list
				</h2>
				<p className={classes.text}>
					There will be a whitelist of 500 people, who can each mint 1 plot for free. Ideally these plots should go to NFT artists
					- Those who are noticably involved with the project from the start and those who have been recommended by the wider NFT community. Of course we will run some small competitions too.
					But there will absolutely be no discord grinding or any ridiculous requirements to be eligible.
				</p>
				<h2>
					Number of pxplots
				</h2>
				<p className={classes.text}>
					There will only ever be 10,000. We want to build a space for the most dedicated independent artists.
					As the NFT space grows, so will the amount of artists. However, we do not want to dilute our platform.
					We want having a place to sell your art here something to be proud of owning.
					Not something anyone can have.
				</p>
				<h2>
					Product release date
				</h2>
				<p className={classes.text}>
					Until our designs are completed in phase 2 of the roadmap, it's hard to judge.
					We are taking an agile project management perspective of this and not waterfall - because waterfall in a space like web3 will lead to broken promises and product behind the times.
					However, it would be no later than 8-12 months to get our initial iteration of the product live. We are still early and a rushed product is never a good thing.
				</p>
				<h2>
					When Discord
				</h2>
				<p className={classes.text}>
					The discord will come close to the minting date. pxplots twitter is the only place to find information about the project right now.
				</p>

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
			default:
				return;
		}
	}

	const headings = ['About', 'Team', 'Roadmap', 'Faq']

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

	const renderMintAmountButtons = () => {
		const amounts = [1, 2, 3, 4, 5];
		return amounts.map((amount, i) => {
			const active = numberOfMints === amount;
			return (
				<button
					className={`${classes.button} ${classes.mint_quantity_button} ${active ? classes.active_mint_amount : ''}`}
					onClick={() => setNumberOfMints(amount)}
					key={`amount-${amount}`}
				>
					{amount}
				</button>)

		})
	}

	const renderMintWindow = () => {
		const plural = numberOfMints > 1;
		return (
			<div className={classes.mint_window_container}>
				<p className={classes.text}>How many pxplots would like to mint?</p>
				<div className={classes.mint_buttons_container}>
					{renderMintAmountButtons()}
				</div>
				<p className={classes.text} style={{ marginBottom: '2px', fontSize: '14px' }}>The first 1,000 mints are free.</p>
				<p className={classes.text} style={{ marginTop: '2px', fontSize: '14px' }}>After that 1 plot = 0.02eth</p>
				<div>
					<button
						className={`${classes.button} ${classes.mint_button}`}
						onClick={() => console.log(`minting ${numberOfMints} plots`)}
						style={{ marginTop: '24px' }}
					>
						{`Mint your plot${plural ? 's' : ''}!`}
					</button>
				</div>
			</div>
		)
	}

	return (
		open ? <div className={classes.overlay}>
			<div className={classes.modal_container}>
				<button className={classes.closeButton} onClick={() => {
					closeModal();
					setMintWindowOpen(false);
					setNumberOfMints(0);
				}}
				>
					<span>
						X
					</span>
				</button>
				{!mintWindowOpen && <div className={classes.heading_buttons_container}>
					{renderHeadings()}
				</div>}
				<div className={classes.section_container}>
					{mintWindowOpen ? renderMintWindow() : renderSection()}
				</div>
			</div>
		</div> : null
	);
};

export default Modal;
