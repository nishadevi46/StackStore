
import { Box, Button, styled} from "@mui/material";

import {ShoppingCart as Cart, FlashOn as Flash} from '@mui/icons-material';
const LeftContainer = styled(Box)`
min-width:40%;
padding:40px 0 0 80px;

`

const Image = styled('img')({
    padding:'15px'
})

const StyledButton = styled(Button)`
width:48%;
height:50px;
border-radius:5px;
`

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