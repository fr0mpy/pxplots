import { createUseStyles } from 'react-jss';
import { IThemeState } from '../../Redux/slices/themeSlice'
import { useSelector } from 'react-redux';
import { Theme } from '../../enums/themes';


const useStyles = createUseStyles({
	container: {
		alignItems: 'center',
		flexFlow: 'column',
		display: 'flex',
		height: '60px',
		justifyContent: 'center',
		margin: '8px 0 0 0 ',
		'@media screen and (max-width: 1024px)': {
			alignItems: 'center',
			display: 'flex',
			justifyContent: 'center',
			margin: '0'
		}
	},
	img: {
		width: '38px',
		height: '38px',
		cursor: 'pointer',
		margin: '0 4px',
		'&:hover': {
			opacity: '0.8'
		},

		'@media screen and (max-width: 1024px)': {
			height: '48px',
			margin: '0 8px',
			width: '48px'
		},
		'@media screen and (max-width: 600px)': {
			height: '38px',
			margin: '0 6px',
			width: '38px'
		},
	}
});


const SocialLinks = () => {
	const classes = useStyles();
	const { theme = {} } = useSelector((state: IThemeState): IThemeState => state.theme)
	const lightMode = theme === Theme.Light;

	return (
		<div className={classes.container}>
			<div>
				<a
					className={classes.img}
					href="https://twitter.com/pxplots"
					target="_blank"
					rel="noreferrer"
				>
					<img src="/images/twitter.png" alt="" className={classes.img} />
				</a>
				{/* <a className={classes.img} href="/" target="_blank" rel="noreferrer">
				<img src="/images/looksrare.png" alt="" className={classes.img} />
			</a> */}
				<a className={classes.img} href="https://opensea.io/collection/pxplots" target="_blank" rel="noreferrer">
					<img src="/images/opensea.png" alt="" className={classes.img} />
				</a>
				<a
					className={classes.img}
					href="https://discord.gg/f4FpuWhPkW"
					target="_blank"
					rel="noreferrer"
					style={{ opacity: .5 }}
				>
					<img src="/images/discord.png" alt="" className={classes.img} />
				</a>
			</div>
			<p style={{
				color: `${lightMode ? 'black' : 'white'}`,
				fontSize: '10px',
				fontWeight: 'bold',
				textAlign: 'center',
				margin: '8px 0 0',
				transition: 'color .4s ease-in-out'
			}}>
				(Discord open soon)
			</p>
		</div>
	);
};

export default SocialLinks;