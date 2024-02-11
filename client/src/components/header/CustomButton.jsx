import { useState, useContext } from "react";
import { Box, Button, Typography, styled} from "@mui/material"
import {ShoppingCart} from '@mui/icons-material';
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import LoginDialog from "../login/LogibDialog";

const Wrapper = styled(Box)`
display:flex;
margin:0 3% 0 auto;
& > button, & >p, & > div{
    margin-right:40px;
    font-size:16px;
}
align-items:center;
`
const Container = styled(Box)`
display:flex;
`
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
    const {account} = useContext(DataContext)
   const openDialog = ()=>{
        setOpen(true)
    }

    return (
        <Wrapper>
        {
            account ? <Profile account={account}/>:
            <LoginButton variant="contained" onClick={()=>{openDialog()}}>login</LoginButton>
        }
            <Typography style={{marginTop:3, width:135 }}>become a seller</Typography>
            <Typography style={{marginTop:3}}>more</Typography>
            <Container>
            <ShoppingCart/>
             <Typography>cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}
export default CustomButton