import { Typography,Box, Menu, MenuItem, styled } from "@mui/material"
import { useState } from "react"
const Component = styled(Menu)`
margin-top:5px;

`
const Profile = ({account})=>{
    const [open,setOpen] = useState(false)
    const handleClick=(event)=>{
        setOpen(event.currentTarget)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    return(
        <>
        <Box onClick={handleClick}>
            <Typography style={{marginTop:2}}>
                {account}
            </Typography>
        </Box>
        <Component
        id="basic-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Typography>Logout</Typography></MenuItem>
      </Component>
        </>
    )
}
export default Profile;