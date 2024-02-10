import { Box, Button, Typography, styled} from "@mui/material"
import {ShoppingCart} from '@mui/icons-material';
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
    return (
        <Wrapper>
            <LoginButton variant="contained">login</LoginButton>
            <Typography style={{marginTop:3, width:135 }}>become a seller</Typography>
            <Typography style={{marginTop:3}}>more</Typography>
            <Container>
            <ShoppingCart/>
             <Typography>cart</Typography>
            </Container>
        </Wrapper>
    )
}
export default CustomButton