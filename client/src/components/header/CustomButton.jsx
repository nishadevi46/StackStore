import { useState, useContext } from "react";
import {Box, Button, Typography, styled, Badge} from "@mui/material"
import {ShoppingCart} from '@mui/icons-material';
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { UseSelector, useSelector } from "react-redux";
import LoginDialog from "../login/LogibDialog";
import { Link } from "react-router-dom"
const Wrapper = styled(Box)(({theme})=>({
display:"flex",
margin:'0 3% 0 auto',
'& >*':{
    marginRight:'40px !important',
    fontSize:16,
    alignItems:'center'
},
[theme.breakpoints.down('md')]:{
    display:'block'
}
}))
const Container = styled(Link)(({theme})=>({
    display:'flex',
    textDecoration:'none',
    color:'inherit',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))


const LoginButton=styled(Button)`
color:#000;
background:#fff;
text-tranform:none;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px;
`
const CustomButton =()=>{
    const [open, setOpen] = useState(false);
    const {account,setAccount} = useContext(DataContext)
   const openDialog = ()=>{
        setOpen(true)
    }
    
    const {cartItems} = useSelector(state => state.cart)

    return (
        <Wrapper>
        {
            account ? <Profile account={account} setAccount={setAccount} />:
            <LoginButton variant="contained" onClick={()=>{openDialog()}}>login</LoginButton>
        }
            <Typography style={{marginTop:3, width:135 }}>become a seller</Typography>
            <Typography style={{marginTop:3}}>more</Typography>
            <Container to='/cart'>
            <Badge badgeContent={cartItems?.length} color="secondary" >
            <ShoppingCart/>
            </Badge>
             <Typography style={{marginLeft:10}}>cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
        </Wrapper>
    )
}
export default CustomButton