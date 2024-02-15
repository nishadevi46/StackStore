import { useEffect } from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide'
import { Box, styled } from '@mui/material';
import { getProducts } from '../../redux/actions/productActions';
import {useDispatch, useSelector} from 'react-redux'
const Component = styled(Box)`
padding:10px 10px;
background:#0F0F0F;
`
const Home = ()=>{
  const {products}=useSelector(state=>state.getProducts)
  console.log(products)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch]
  )
return(
    <>
  <NavBar/>
  <Component>
    <Banner/>
    <MidSlide products={products} title="Deal of the Day" timer={true}/>
    <Slide products={products} title="Discounts for you" timer = {false}/>
    <Slide products={products} title="Suggesting Items" timer={false}/>
    <Slide products={products} title="Top Selection" timer={false}/>
    <Slide products={products} title="Recommended Items" timer={false}/>
    <Slide products={products} title="Trending Offers" timer={false}/>
    <Slide products={products} title="Season top picks" timer={false}/>
    <Slide products={products} title="Top Deals on Accessories" timer={false}/>
  </Component>
    </>
)
}
export default Home;