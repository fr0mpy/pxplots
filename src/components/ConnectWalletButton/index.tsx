
import * as React from 'react';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
    button: {
        height: '48px',
        width: '180px',
        border: 'solid 4px black',
        // border: 'solid 4px white',

        borderRadius: '2px',
        fontFamily: 'Roboto Slab, serif',
        fontSize: '18px',
        cursor: 'pointer',
        backgroundColor: 'cyan',
        marginTop: '8px'
    },
});

interface IProps {
    setWallet(): any
}

const ConnectWalletButton = ({ setWallet }: IProps) => {
    const [walletConnected, setWalletConnected] = React.useState<boolean>(false);
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

    return (
        <button
            className={classes.button}
            onClick={() => connectWallet()}
        >
            Connect Wallet
        </button>
    );
};

export default ConnectWalletButton;