import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import Countdown from 'react-countdown'
import { Box, Typography, Button, Divider, styled} from '@mui/material';
import { Link } from 'react-router-dom';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const Image = styled('img')({
    width:'auto',
    height:150,

  })
  const Componenet = styled(Box)`
  margin-top:10px;
background-color:#191717;
  `
  const Deal = styled(Box)`
  padding:15px 20px;
    display:flex;
    color:#fff;
  `
  const Timer = styled(Box)`
  display:flex;
  margin-left:10px;
  align-items:center;
  color:#FAF0E6;
  `
  const DealText = styled(Typography)`
  font-size:22px;
  font-weight:600;
  margin-right:25px;
  line-height:32px;

  `
  const Text = styled(Typography)`
  font-size:14px;
  color:#F9F5F6;
  margin-top:5px;
  `
  const ViewButton = styled(Button)`
  margin-left:auto;
  background-color:#50577A;
  border-radius:2px;
  font-size:13px;
  font-weight:600;
  `
const Slide = ({products, title, timer})=>{
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds}) => {
        return <Box variant='span'>{hours} : {minutes} : {seconds}Left</Box>
      };
      
    return (
        <Componenet>
        <Deal><DealText>{title}</DealText>
        {timer && <Timer> <img src={timerURL} alt="timer" style={{width:24}}/>
        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} /></Timer>}
        <ViewButton variant='contained' color='primary'>View all</ViewButton>
        </Deal>
        <Divider style={{ backgroundColor: '#fff' }}/>
        <Carousel
        responsive={responsive}
        swipeable={false}
  draggable={false}
  autoPlay={ true }
  infinite={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  centerMode={true}
  dotListClass="custom-dot-list-style"
     itemClass="carousel-item-padding-40-px"
     containerClass="carousel-container">
       { products.map(product => (
        <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
        <Box textAlign="center" style={{padding:'25px 15px'}}>
            <Image src={product.url} alt="product" />
            <Text style={{fontWeight:'bold'}}>{product.title.shortTitle}</Text>
            <Text style={{color:'#14C38E'}}>{product.discount}</Text>
            <Text style={{color:'#DFD3C3'}}>{product.tagline}</Text>
            </Box>
        </Link>
        ))}
        </Carousel>
        </Componenet>
    )
}
export default Slide