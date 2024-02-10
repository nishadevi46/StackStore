import {AppBar, Toolbar, styled,Box} from '@mui/material'
import Search from './Search'
import CustomButton from './CustomButton'

import logo from '../../images/logo.png'

const StyledHeader=styled(AppBar)`
background:#000;
height:55px;
`
const Buttonwrapper=styled(Box)`
margin:0 5% 0 auto;
`
const Header = ()=>{
    const logoUrl=`${logo}`
    return (
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
               <Box>
              <img src={logoUrl} alt="logo" srcset=""  style={{width:100, borderRadius:10}}/>
               </Box>
               <Search/>
               <Buttonwrapper>
                <CustomButton/>
               </Buttonwrapper>
            </Toolbar>
        </StyledHeader>
    )
}
export default Header