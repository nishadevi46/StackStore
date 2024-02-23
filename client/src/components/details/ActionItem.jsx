
import { Box, Button, styled} from "@mui/material";
import { useState } from "react";
import {ShoppingCart as Cart, FlashOn as Flash} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart} from '../../redux/actions/cartAction'

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity,setQuantity] = useState(1);
  const {id} = product;
  const addItemToCart =()=>{
    dispatch(addToCart(id, quantity))
   navigate('/cart');
  }
  const buyNow = ()=>{
   navigate('/payment')
  }
  return(
  <LeftContainer>
  <Box style={{  padding:'15px 20px',border:'1px solid black', width:'90%'}}>
    <Image src={product.detailUrl} alt="full image of product" />
 </Box>
    <StyledButton variant="contained" style={{marginRight:10, background:'#720455'}} onClick={()=>addItemToCart()}> <Cart/>Add to Cart</StyledButton>
    <StyledButton variant="contained" style={{background:'#294B29'}} onClick={()=>buyNow()}><Flash/>Buy Now</StyledButton>
  </LeftContainer>
  )
}
export default ActionItem;