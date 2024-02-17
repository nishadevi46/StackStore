import { useState } from 'react'
import {AppBar, Toolbar, styled,Box, Drawer,  IconButton} from '@mui/material'
import Search from './Search'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import { Menu } from '@mui/icons-material';
const StyledHeader=styled(AppBar)`
background:#000;
height:55px;
`
const Buttonwrapper=styled(Box)(({theme})=>({
margin:'0 5% 0 auto',
[theme.breakpoints.down('md')]:{
    display:'none'
}
}))
const MenuButton = styled(IconButton)(({theme}) =>({
display:'none',
[theme.breakpoints.down('md')]:{
    display:'block'
}
}))

const Header = ()=>{
    const logoUrl=`${logo}`
    const [open, setOpen] = useState(false);
    const handleOpen = ()=>{
     
    }
    const handleClose = ()=>{
     
    }
    return (
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
            <MenuButton style={{color:'#FFF8E3'}} onClick={handleOpen}>
                <Menu/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose}></Drawer>
               <Link to='/' style={{textDecoration:'none'}}>
              <img src={logoUrl} alt="logo" srcset=""  style={{width:100, borderRadius:10}}/>
               </Link>
               <Search/>
               <Buttonwrapper>
                <CustomButton/>
               </Buttonwrapper>
            </Toolbar>
        </StyledHeader>
    )
}
export default Header