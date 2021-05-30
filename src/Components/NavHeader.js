import React, { useState } from 'react';
import { Toolbar, Button,  makeStyles, List, ListItem, Popper, useTheme, useMediaQuery, IconButton, Paper } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function NavHeader (cartItem, setCartItem) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
        defaultMatches: true
    });
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    




    const handleMenu = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);        
    };

    return(
           <Toolbar className={isMobile ? classes.toolBarMobile : classes.toolBar}>
               {isMobile ?
                    <IconButton
                        className={classes.toolBarButton}
                        edge="end"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        
                    >
                        <ShoppingCartIcon styles={open === true ? { color: '#222222'} : {}}/>(4)
                    </IconButton>
                    :
                    <Button 
                        className={classes.toolBarButton}
                        edge="end"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        styles={open === true ? { color: '#222222'} : {}}
                        >
                            My Cart(4)</Button>
                }
               
               <Popper
                    open={open}
                    anchorEl={anchorEl}
                    placement='bottom-end'
               ><Paper>
                   <List>
                       {cartItem.map((item) => (
                            <ListItem className={classes.cartItem}>
                                <img className={classes.cartImage} src={process.env.PUBLIC_URL + '/classic-tee.jpg'} />
                                <div className={classes.cartDetail}>
                                    <div className={classes.cartItemTitle}>{item.tile}</div>
                                    <div className={classes.cartItemPriceQuantity}>
                                        <span>{item.quantity}x</span>
                                        <span className={classes.cartItemPrice}>${item.price}</span>
                                    </div>
                                    <div className={classes.cartItemSize}>
                                        Size: {item.size}
                                    </div>
                                </div>
                                
                            </ListItem>
                       ))}
                   </List>
                   </Paper>
               </Popper>
           </Toolbar>
    )
}


const useStyles = makeStyles((theme) => ({
    toolBar: {
        justifyContent: 'flex-end',
        minHeight: '10px',
        marginTop: theme.spacing(2),
        maxHeight: '30px',
        backgroundColor: '#F6F6F7',
        width: '100%',
    },
    toolBarMobile: {
        justifyContent: 'flex-end',
        minHeight: '10px',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(5),
        maxHeight: '30px',
        backgroundColor: '#F6F6F7',
        width: '100%',
    },
    toolBarButton: {
      marginRight: theme.spacing(2),
      color: '#888888',
      fontSize: '10px',
    },
    cartItem: {
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'flex-start',
    },
    cartImage: {
        width: '5rem',
    },
    cartItemTitle: {
        marginBottom: theme.spacing(1),
    },
    cartItemPrice: {
        fontWeight:'bold',
    },
    cartItemSize: {
        marginTop: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));