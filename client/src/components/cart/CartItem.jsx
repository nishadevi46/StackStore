import styled from "@emotion/styled";
import { Box, Typography,Button } from "@mui/material";
import { addEllipis } from "../../utlis/common-utlis";
import {removeFromCart} from '../../redux/actions/cartAction'
import {useDispatch} from 'react-redux'
import GroupedButton from "./ButtonGroup";
const Container = styled(Box)`
border-top: 1px solid black;
display:flex;
background:#fff;
`
const LeftComponent = styled(Box)`
margin:20px;
display:flex;
flex-direction:column;
`
const Remove = styled(Button)`
margin-top:20px;
font-size:16px;

`
const SmallText = styled(Typography)`
color:#878787;
font-size:14px;
margin-top:10px;

`
const   CartItem = ({item})=>{
  const dispatch = useDispatch()
  const removeItemFromCart =(id)=>{
    dispatch(removeFromCart(id))
  }
    return(
    <Container>
        <LeftComponent>
          <img src={item.url} alt="productimage" style={{height:110, width:110}}/>
          <GroupedButton/>
        </LeftComponent>
        <Box style={{margin:20}}>
            <Typography>{addEllipis(item.title.longTitle)}</Typography>
            <SmallText>Seller: Owago Limited</SmallText>
            <Typography style={{margin:'20px 0'}}>
              <Box component="span" style={{ fontWeight: 600,fontSize:16 }}> ₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
              <Box component="span" style={{ color: '#F72798' }}><strike> ₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
              <Box component="span" style={{ color: '#0D9276' }}> {item.price.discount}</Box>
              </Typography>
              <Remove variant="contained" onClick={()=>removeItemFromCart(item.id)}>Remove</Remove>
        </Box>
    </Container>
    )
  }
  export default CartItem;