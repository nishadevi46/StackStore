import { useSelector } from 'react-redux';
import {Grid,Typography,Box, styled, Button} from '@mui/material'
import CartItem from './CartItem'
import TotalView from './TotalView'
const Container = styled(Grid)`
padding:30px 135px;

`
const Header = styled(Box)`
  padding: 15px 24px;
 background:#fff;
`
const ButtonWrapper = styled(Box)`
padding:16px 22px;
background:#fff;
box-shadow: 0 -2px 10px 0 rgb(0 0 0/10%)
`
const Cart = ()=>{
  const {cartItems} = useSelector(state => state.cart)
  return (
    <>
       {
        cartItems.length ?
        <Container container>
        <Grid item lg={9} md={9} sm={12} xs={12}>
          <Header>
            <Typography>
              My Cart({cartItems.length})
            </Typography>
          </Header>{
            cartItems.map(item => (
              <CartItem item={item}/>
            ) )
          }
          <ButtonWrapper>
            <Button  variant='contained'>Place Order
            </Button>
          </ButtonWrapper>
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <TotalView/>
        </Grid>
        </Container>
        :
        <div>Empty</div>
       }
    </>
  )
}
export default Cart;
