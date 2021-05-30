import React, { useState } from 'react';
import { Button, makeStyles, useTheme, useMediaQuery, unstable_createMuiStrictModeTheme } from '@material-ui/core';

export default function Main(props) {

    const { cartItem, setCartItem } = props;
    const classes = mainStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
        defaultMatches: true
    });

    const [selectedSizesValue, setSelectedSizesValue] = useState("");

    const onClickButton = (value) => () => {
        setSelectedSizesValue(value);

    };

    const addItemToCart = () => {
        if(selectedSizesValue === "") {
            // alert message
        } else if (selectedSizesValue === "S") {
            setCartItem({...cartItem, small: cartItem.small + 1});
        } else if (selectedSizesValue === "M") {
            setCartItem({...cartItem, medium: cartItem.medium + 1});
        } else if (selectedSizesValue === "L") {
            setCartItem({...cartItem, large: cartItem.large + 1});
        }
    }

    return (
        <div className={isMobile ? classes.containerMobile : classes.container}>
            <div>
                <img className={isMobile ? classes.itemImageMobile : classes.itemImage} src={process.env.PUBLIC_URL + '/classic-tee.jpg'} />
            </div>
            <div className={isMobile ? classes.itemDetailMobile : classes.itemDetail}>
                <div className={isMobile ? classes.itemTitleMobile : classes.itemTitle}>
                    Classic Tee
                </div>
                <div className={isMobile ? classes.itemPriceMobile : classes.itemPrice}>
                    $75.00
                </div>
                <div className={isMobile ? classes.itemDescMobile : classes.itemDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident 
                </div>
                <div className={classes.itemSize}>
                    SIZE<span className={classes.sizeStar}>*</span> <span className={classes.selectedSizes}>{selectedSizesValue}</span>
                </div>
                <div className={classes.sizeButtons}>
                    <Button 
                        className={isMobile ? classes.sizeButtonsMobile : classes.sizeButton} 
                        onClick={onClickButton("S")}
                        style={ selectedSizesValue === "S" ? { border: '2px solid #222222', color: '#222222'} : {} }
                    >S</Button>
                    <Button className={isMobile ? classes.sizeButtonsMobile : classes.sizeButton}
                        onClick={onClickButton("M")}
                        style={ selectedSizesValue === "M" ? { border: '2px solid #222222', color: '#222222'} : {} }>M</Button>
                    <Button className={isMobile ? classes.sizeButtonsMobile : classes.sizeButton}
                        onClick={onClickButton("L")}
                        style={ selectedSizesValue === "L" ? { border: '2px solid #222222', color: '#222222'} : {} }>L</Button>
                </div>
                <Button className={isMobile ? classes.addToCartMobile : classes.addToCart}  onClick={addItemToCart}>ADD TO CART</Button>
            </div>
        </div>
    )
}



const mainStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'flex-end',    
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(20),
        width: '70%',
        color: '#222222',
    },
    containerMobile: {
        display: 'flex',
        flexDirection: 'column',    
        width: '100%',
        color: '#222222',
    },
    itemImage: {
        width: '400px',
        height: '600px',
    },
    itemImageMobile: {
        width: '350px',
        height: '550px',
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
    },
    itemTitle: {
        fontSize: '20px',
        marginBottom: theme.spacing(2),
        color: '#222222',
    },
    itemTitleMobile: {
        fontSize: '24px',
        marginBottom: theme.spacing(2),
        color: '#222222',
    },
    itemDetail: {
        marginLeft: theme.spacing(18),     
    },
    itemDetailMobile: {
        padding: theme.spacing(2),
    },
    itemPrice: {
        fontWeight: 'bold',
        borderTop: '1px #f3f3f3 solid',
        borderBottom: '1px #f3f3f3 solid',
        marginBottom: theme.spacing(2),
    },
    itemPriceMobile: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
    },
    itemDesc: {
        color: '#888888',
        fontSize: '14px',
    },
    itemDescMobile: {
        color: '#888888',
        fontSize: '16px',
    },
    itemSize: {
        marginTop: theme.spacing(5),
        fontWeight: 'bold',
        color: '#888888',
        fontSize: '14px',
        marginBottom: theme.spacing(2),
    },
    sizeStar: {
        color: '#C90000',
    },
    selectedSizes: {
        fontWeight: 'bold',
        color: '#222222',
    },
    sizeButton: {
        border: '1px solid #CCCCCC',
        borderRadius: '0',
        padding: '5px',
        minWidth: '40px',
        color: '#CCCCCC',
        marginRight: '3px',
        marginBottom: theme.spacing(3),
    },
    sizeButtonsMobile : {
        border: '1px solid #CCCCCC',
        borderRadius: '0',
        padding: '10px',
        minWidth: '50px',
        color: '#CCCCCC',
        marginRight: '3px',
        fontSize: '16px',
        marginBottom: theme.spacing(3),
    },
    addToCart: {
        fontWeight: 'bold',
        border: '2px solid #222222',
        borderRadius: '0',
        paddingRight: '20px',
        paddingLeft: '20px',
    },
    addToCartMobile: {
        fontSize: '16px',
        fontWeight: 'bold',
        border: '2px solid #222222',
        borderRadius: '0',
        paddingRight: '30px',
        paddingLeft: '30px',
    }
}));