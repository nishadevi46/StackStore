
import { Box, Button, styled} from "@mui/material";

import {ShoppingCart as Cart, FlashOn as Flash} from '@mui/icons-material';
const LeftContainer = styled(Box)(({theme})=>({
  minWidth: '40%',
padding:'40px 0 0 80px',
[theme.breakpoints.down('lg')]:{
  padding: '20px 40px'

}
}))



const Image = styled('img')({
  width:'95%',
    padding:'15px'
})

const StyledButton = styled(Button)(({theme})=>({
width:'48%',
height:50,
borderRadius:5,
[theme.breakpoints.down('lg')]:{
  width:'46%',

},
[theme.breakpoints.down('sm')]:{
  width:'48%'
}
}))

const ActionItem = ({ product })=>{
  return(
  <LeftContainer>
  <Box style={{  padding:'15px 20px',border:'1px solid black', width:'90%'}}>
    <Image src={product.detailUrl} alt="full image of product" />
 </Box>
    <StyledButton variant="contained" style={{marginRight:10, background:'#720455'}}><Cart/>Add to Cart</StyledButton>
    <StyledButton variant="contained" style={{background:'#294B29'}}><Flash/>Buy Now</StyledButton>
  </LeftContainer>
  )
}
export default ActionItem;