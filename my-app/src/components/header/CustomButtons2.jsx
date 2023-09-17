import { useState, useContext } from 'react';

import { Box, Button, Typography, Badge, styled } from "@mui/material";
import { ShoppingCart } from '@mui/icons-material/';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { DataContext } from '../../context/DataProvider';

//components
import LoginDialog from '../login/LoginDialog'


const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > *': {                              //button, & > p, & > div equal to *
        marginRight: '40 !important',
        fontSize: '16',
        alignItem: 'center'
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));    
    

const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #FFFFFF;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
    margin-right: 90px;
    
`

const CustomButtons = () => {
  
    const [open, setOpen] = useState(false);

    const { account, setAccount } = useContext(DataContext);

    const {cartItems} = useSelector(state => state.cart)

    const openDialog = () => {
        setOpen(true);
    }
  
    return(
        <Wrapper>
            {
               account ? <Typography>{account}</Typography> :
                   <LoginButton variant ="contained" onClick={() => openDialog()}>Login</LoginButton>
            }
    
            <Typography style={{ marginTop:3, width:135, marginRight:45 }}>Become a Seller</Typography>
            <Typography style={{ marginTop:3, marginRight:45 }}>More</Typography>

        
           <Container to="./cart">
               <Badge badgeContent={cartItems?.length} color="secondary">
                  <ShoppingCart />
                </Badge>  
               <Typography style={{ marginLeft:10, marginTop:3, marginRight:45 }}>Cart</Typography>
           </Container>
           <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Wrapper>
    )
}

export default CustomButtons;