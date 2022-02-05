import * as React from 'react';
import { createUseStyles } from 'react-jss';
import About from './About/index.tsx';
import Roadmap from './Roadmap/index.tsx';
import Team from './Team/index.tsx';
import FAQ from './FAQ/index.tsx';
import SocialLinks from '../SocialLinks/index.tsx';

const useStyles = createUseStyles({
    root: {
        backgroundColor: 'white',
        borderRight: 'solid 5px #5141f1',
        borderTopRightRadius: '8px',
        borderBottomRightRadius: '8px',
        boxShadow: 'rgb(0 0 0) 8px 12px 34px 0px',
        fontFamily: 'Roboto Slab, serif',
        height: '100%',
        padding: '16px',
        boxSizing: 'border-box',
        width: '550px',
        zIndex: 1
    },
    button_container: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    button: {
        backgroundColor: '#5141f1',
        border: 'solid 4px black',
        borderRadius: '5px',
        color: 'white',
        cursor: 'pointer',
        fontFamily: 'Roboto Slab, serif',
        fontSize: '18px',
        outline: 'solid 4px white',
        marginBottom: '30px',
        minHeight: '48px',
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
    mint_button: {
        border: 'solid 4px black',
        // outline: 'solid 4px black',
        backgroundColor: '#3effdb',
        color: 'black',
        '&:hover': {
            color: 'white',
            backgroundColor: '#ff5ddc',
        }
    },
    text: {
        color: 'black',
        textAlign: 'center'
    },
    nav_title: {
        margin: '0',
        fontSize: '28px',

    },
    nav_caption: {
        margin: '8px 0 26px 0',
        fontSize: '18px',
    },
    heading_button: {
        backgroundColor: 'white',
        border: 'none',
        color: 'grey',
        cursor: 'pointer',
        fontSize: '20px',
        fontFamily: 'Roboto Slab, serif',
        borderBottom: 'solid 3px transparent',

        '&:hover': {
            borderBottom: 'solid 3px #5141f1'
        }
    },
    heading_button_active: {
        color: '#5141f1',
        opacity: 1,
        '&:hover': {
            borderBottom: 'solid 3px transparent'
        }
    },
    section_container: {
        height: '55vh',
        overflow: 'auto',
        textAlign: 'center',
        padding: '0 16px',
        boxSizing: 'border-box',
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
            border: 'solid 2px white',
            marginLeft: '10px'
        }
    }
});

enum Sections {
    About = 0,
    Roadmap = 1,
    Team = 2,
    Faq = 3,
    DontClick = 4
}



const Navigation = () => {
    const classes = useStyles();
    const [walletConnected, setWalletConnected] = React.useState<boolean>(false);
    const [section, setSection] = React.useState<number>(0);
    const [mintOpen, setMintOpen] = React.useState<boolean>(false);
    const headings = ['About', 'RoadMap', 'Team', 'FAQ'];
    const sectionRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (sectionRef) {
            sectionRef.current.scrollTop = 0;
        }
    }, [section])

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


    const renderSection = () => {
        switch (section) {
            case Sections.About:
                return <About />;
            case Sections.Roadmap:
                return <Roadmap />;
            case Sections.Team:
                return <Team />;
            case Sections.Faq:
                return <FAQ />;
            default:
                return;
        }
    }

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

    const setMintWindowOpen = () => {

    }


    return (
        <div className={classes.root}>
            <div className={classes.button_container}>
                <button
                    className={`${classes.button} ${walletConnected ? classes.mint_button : ''}`}
                    onClick={() => walletConnected ? setMintOpen(true) : connectWallet()}>
                    {walletConnected ? 'Go To Mint' : 'Connect Wallet'}
                </button>
            </div>
            <div>
                <p className={`${classes.text} ${classes.nav_title}`}>🏝️ Welcome To pxplots! 🏝️</p>
                <p className={`${classes.text} ${classes.nav_caption}`}>
                    10,000 sm0l plots of land, living on the ethereum blockchain 🧱⛓️
                </p>
            </div>
            <div style={{ borderBottom: 'dotted 5px black', width: '80%', margin: '0 auto 18px auto' }} />
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                {renderHeadings()}
            </div>
            <div className={classes.section_container} ref={sectionRef}>
                {renderSection()}
            </div>
            <div style={{ height: '60px' }} >

                <SocialLinks />
            </div>
        </div>
    );
};

export default Navigation;
