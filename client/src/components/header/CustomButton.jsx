import { useState, useContext } from "react";
import { Box, Button, Typography, styled} from "@mui/material"
import {ShoppingCart} from '@mui/icons-material';
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import LoginDialog from "../login/LogibDialog";

const Wrapper = styled(Box)(({theme})=>({
display:"flex",
margin:'0 3% 0 auto',
'& >*':{
    marginRight:40,
    fontSize:16,
    alignItems:'center'
},
[theme.breakpoints.down('md')]:{
    display:'block'
}
}))
const Container = styled(Box)(({theme})=>({
    display:'flex',
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

    return (
        <Wrapper>
        {
            account ? <Profile account={account} setAccount={setAccount} />:
            <LoginButton variant="contained" onClick={()=>{openDialog()}}>login</LoginButton>
        }
            <Typography style={{marginTop:3, width:135 }}>become a seller</Typography>
            <Typography style={{marginTop:3}}>more</Typography>
            <Container>
            <ShoppingCart/>
             <Typography>cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
        </Wrapper>
    )
}
export default CustomButton