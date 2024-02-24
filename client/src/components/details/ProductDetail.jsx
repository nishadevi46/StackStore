import { Typography, Box, styled, Table, TableBody, TableRow, TableCell } from "@mui/material";
import {Verified as Badge} from '@mui/icons-material';
const SmallText =styled(Box)`
font-size:14px;
& >p{
    font-size:14px;
    margin-top:10px;
}
`
const StyledBadge = styled(Badge)`
margin-right:10px;
vertical-align:baseline;
color:#3652AD;
font-size:20px;

`
const ColumnText = styled(TableRow)`
font-size:14px;
vertical-align:baseline;
& > td{
    font-size:14px;
    margin-top:10px;
    border:none;
}
`
const ProductDetail = ({product})=>{
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    return(
        <>
         <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#211951', fontSize: 14 }}>8 Ratings & 1 review</Typography>
            <Typography>
              <Box component="span" style={{ fontSize: 28 }}> ₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
              <Box component="span" style={{ color: '#F72798' }}><strike> ₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
              <Box component="span" style={{ color: '#0D9276' }}> {product.price.discount}</Box>
              </Typography>
              <Typography>Available Offers</Typography>
               <SmallText>
                <Typography><StyledBadge/>10% Instant Discount up to INR 1250 on Citibank Credit Card EMI Trxn. Minimum purchase value ₹5,000d</Typography>
                <Typography><StyledBadge/>10% Instant Discount on ICICI Bank Credit and Debit Card</Typography>
                <Typography><StyledBadge/>Coupon Discount: Rs. 200 off (check cart for final savings)</Typography>
                <Typography><StyledBadge/>Get GST invoice and save up to 28% on business purchases. </Typography>
                <Typography><StyledBadge/>Sign up for StackStore get 10% discount on first buy </Typography>
               </SmallText>
           <Table>
            <TableBody>
                <ColumnText>
                    <TableCell style ={{color:'#071952'}}>Delivery</TableCell>
                    <TableCell style={{fontWeight:600, color:'#071952'}}>Delivery by {date.toDateString()} | ₹50</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style ={{color:'#071952'}}>Warranty</TableCell>
                    <TableCell style={{color:'#071952'}}>No Warranty</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style ={{color:'#071952'}}>Seller</TableCell>
                    <TableCell style={{fontWeight:600, color:'#071952'}}>
                        <Box component='span' style={{color:'#280274'}}>
                        Owago Limited
                        </Box>
                        <Typography>GST invoice available</Typography>
                        <Typography>View more seller starting from ₹{product.price.mrp}</Typography>
                    </TableCell>
                </ColumnText>

                <ColumnText>
                    <TableCell style ={{color:'#071952'}}>Description</TableCell>
                    <TableCell style={{fontWeight:600, color:'#071952'}}>{product.description}</TableCell>
                </ColumnText>
            </TableBody>
           </Table>
        </>
    )
}
export default ProductDetail;