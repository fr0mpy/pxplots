import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { Theme } from '../../../enums/themes';
import { IThemeState } from '../../../Redux/slices/themeSlice';
const useStyles = createUseStyles({
    overlay: {
        height: '100%',
        width: ' 100%',
        position: 'absolute',

    },
    container: {
        display: 'flex',
        flexFlow: 'column',
        fontFamily: 'Roboto Slab, serif',
        padding: '12px',
        opacity: 0.25,
        backgroundColor: 'black',
        transition: 'opacity .2s ease-in-out',

        '&:hover': {
            transition: 'opacity .2s ease-in-out',
            opacity: 1
        }
    },
    header_text: {
        color: 'white',
        textAlign: 'center',
        margin: '6px 0',

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
        height: '200px',
        flexGrow: '1',
        backgroundColor: '#89c0ff',
        margin: '4px',
        display: 'flex',
        alignItems: 'flex-end',
    },
    text: {
        color: 'white',
        height: '100%',
        textAlign: 'center',
        fontSize: '12px',
        margin: '32px 16px'
    },
    small_text: {
        fontSize: '10px',
        color: 'white',
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
        margin: '4px'
    },
    cube: {
        height: '80px',
        width: '80px',
        backgroundColor: '#8dc2ff',
        cursor: 'pointer',
        transition: 'opacity .2s ease-in-out',

        '&:hover': {
            transition: 'opacity .2s ease-in-out',
            opacity: .6
        }
    },
    last_cubes_container: {
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'center',
        height: '120px'
    },
    last_cubes: {
        height: '160x',
        flex: 1,
        backgroundColor: '#ffeea7',
        margin: '6px'
    },
    textHoverText: {
        fontSize: '10px',
        margin: '12px',
        opacity: 0,
        position: 'relative',
        top: '32px',
        transition: 'all .6s ease-in-out',
    },
    textHoverText_hover: {
        fontSize: '10px',
        margin: '12px',
        opacity: 1,
        position: 'relative',
        top: '0',
        transition: 'all .6s ease-in-out',

    }
});

const ExampleMarketPageA = () => {
    const classes = useStyles();
    const [expandedBox, setExpandedBox] = React.useState<number | false>(false);

    const [activeBox, setActiveBox] = React.useState<number>(0);

    const { theme = {} } = useSelector((state: IThemeState): IThemeState => state.theme)
    const lightMode = theme === Theme.Light;

    const renderFirstSubBlocks = () => {
        const bgColours = ['#6cfff5', '#eb67b3', '#6cfff5'];

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
                            You can write small bits of info about your images
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
                            Small sample of info text about the image
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
        <div className={classes.container}>
            <p className={classes.text} style={{ margin: '4px' }}>
                Create your own gallery.
            </p>

            <p className={classes.text} style={{ margin: '4px 0 12px' }}>
                Showcase your art. Set prices for it. Sell & Mint it.
            </p>
            <div className={classes.last_cubes_container}>
                <div
                    className={classes.last_cubes}
                    style={{ backgroundColor: '#b187fa' }}
                    onMouseOver={() => setActiveBox(1)}
                    onMouseLeave={() => setActiveBox(0)}
                >
                    <p className={` ${activeBox === 1 ? classes.textHoverText_hover : classes.textHoverText}`}>
                        And add transition effects
                    </p>
                </div>
                <div
                    className={classes.last_cubes}
                    style={{ backgroundColor: '#faaf87' }}
                    onMouseOver={() => setActiveBox(2)}
                    onMouseLeave={() => setActiveBox(0)}
                >
                    <p className={` ${activeBox === 2 ? classes.textHoverText_hover : classes.textHoverText}`}>
                        And add transition effects
                    </p>
                </div>
                <div
                    className={classes.last_cubes}
                    style={{ backgroundColor: '#eb5959' }}
                    onMouseOver={() => setActiveBox(3)}
                    onMouseLeave={() => setActiveBox(0)}
                >
                    <p className={` ${activeBox === 3 ? classes.textHoverText_hover : classes.textHoverText}`}>
                        And add transition effects
                    </p>
                </div>
            </div>
            <div style={{ display: 'flex', flexFlow: 'row' }}>
                {renderFirstSubBlocks()}
            </div>
            <div className={classes.cubes_container}>
                {renderItems(12, 15)}
            </div>
            <div className={classes.cubes_container}>
                {renderItems(8, 11)}
            </div>
            <div className={classes.cubes_container}>
                {renderItems(4, 7)}
            </div>
            <div className={classes.cubes_container}>
                {renderItems(0, 3)}
            </div>
            <p className={classes.text}>
                You will be able to choose different sizes for your images too
            </p>
            {/* <div className={classes.last_cubes_container}>
                <div
                    className={classes.last_cubes}
                    style={{ backgroundColor: '#b187fa' }}
                    onMouseOver={() => setActiveBox(1)}
                    onMouseLeave={() => setActiveBox(0)}
                >
                    <p className={` ${activeBox === 1 ? classes.textHoverText_hover : classes.textHoverText}`}>
                        And add transition effects
                    </p>
                </div>
                <div
                    className={classes.last_cubes}
                    style={{ backgroundColor: '#faaf87' }}
                    onMouseOver={() => setActiveBox(2)}
                    onMouseLeave={() => setActiveBox(0)}
                >
                    <p className={` ${activeBox === 2 ? classes.textHoverText_hover : classes.textHoverText}`}>
                        And add transition effects
                    </p>
                </div>
                <div
                    className={classes.last_cubes}
                    style={{ backgroundColor: '#eb5959' }}
                    onMouseOver={() => setActiveBox(3)}
                    onMouseLeave={() => setActiveBox(0)}
                >
                    <p className={` ${activeBox === 3 ? classes.textHoverText_hover : classes.textHoverText}`}>
                        And add transition effects
                    </p>
                </div>
            </div>
            <div style={{ display: 'flex', flexFlow: 'row' }}>
                {renderFirstSubBlocks()}
            </div> */}
            <p className={classes.text} >
                And you can change your page as many times as you want.
            </p>
        </div>
    )
}

export default ExampleMarketPageA;

