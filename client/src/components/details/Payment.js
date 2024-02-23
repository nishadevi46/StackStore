import { Box, styled} from "@mui/material"

const Container = styled(Box)`
display:flex;
text-align:center;
justify-content:center;
flex-direction:column;
min-height:100vh;
background:#fff;
`


const Payment = ()=>{
    return(
<Container>
hey there this was a dummy Payment thankyou for buying
</Container>

    )
}
export default Payment;