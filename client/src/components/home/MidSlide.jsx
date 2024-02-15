import { Box, styled } from "@mui/material"
import {ImageURL} from '../constants/data'
import Slide from './Slide'
const MidSlide = ({products, title,timer})=>{
    return(
        <Box>
            <Box> <Slide
             products={products} 
             title="Deal of the Day" 
             timer = {true}/>
            </Box>
        </Box>
    )
}
export default MidSlide