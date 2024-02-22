import { Box, Typography, styled } from "@mui/material";
import Image from '../../images/empty.png'
const EmptyCart = ()=>{
return(
   <Box>
       <Box>
       <img src={Image} alt="empty" srcset="" />
       <Typography>Your StackStore Cart is empty.</Typography>
       <Typography>Add items.</Typography>
       </Box>
   </Box>
)
}
export default EmptyCart;