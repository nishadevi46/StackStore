import { Box, Typography, styled } from "@mui/material";
import Image from '../../images/empty.png'
const Component = styled(Box)`
height:65vh;
width:80%;
margin:80px 140px;
background:#fff;
`
const Container = styled(Box)`
text-align:center;
padding-top:70px;
`
const EmptyCart = ()=>{
return(
   <Component>
       <Container>
       <img src={Image} alt="empty" srcset=""/>
       <Typography>Your StackStore Cart is empty.</Typography>
       <Typography>Add items.</Typography>
       </Container>
   </Component>
)
}
export default EmptyCart;