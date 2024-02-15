import { Box, styled } from "@mui/material"
import Slide from './Slide'
const MidSlide = ({products, title,timer})=>{
    const URL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
        <Box>
            <Box> <Slide
             products={products} 
             title="Deal of the Day" 
             timer = {true}/>
            </Box>
            <Box><img src={URL} style={{width: 217}}/></Box>
        </Box>
    )
}
export default MidSlide