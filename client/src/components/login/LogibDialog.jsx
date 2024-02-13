import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material'
import { useState, useContext } from 'react'
import { authenticateSignup,authenticateLogin } from '../../service/api'
import { DataContext } from '../../context/DataProvider'
const Componenet = styled(Box)`
  height:80vh;
  width:60vh;
  display:flex;
  background:#B2A59B;
`
const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
& >div, & > button, & >p{
    margin-top:20px;
}
`
const LoginButton = styled(Button)`
 text-transform:none;
 background:#304D30;
 color:#fff;
 height:48px;
 border-radius:2px;

`
const RequestOtp = styled(Button)`
 text-transform:none;
 background:#EEF0E5;
 color:#304D30;
 height:48px;
 border-radius:2px;
 box-shadow: 0 2px 4px 0 rgb(0 0 0/20%)
`
const Text = styled(Typography)`
  font-size:16px;
  color:#163020;
`
const CreateAccount = styled(Typography)`
font-size:14px;
text-align:center;
color:#163020;
font-weight:600;
cursor:pointer;
`
const accountInitialValues = {
    login: {
        view: 'login'
    },
    signup: {
        view: 'sign-up'
    }
}

const signupIntialValue = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}
const loginIntialValue ={
    username:'',
    password:''
}
const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountInitialValues.login)
    const [login,setLogin]=useState(loginIntialValue)
    const [signup, setSignup] = useState(signupIntialValue)
    const { setAccount } = useContext(DataContext)

    const handleClose = () => {
        setOpen(false)
        toggleAccount(accountInitialValues.login)
    }
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup)
    }
    const onInputchange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
    }
    const signupUser = async () => {
        let response = await authenticateSignup(signup)
        if (!response) return;
        handleClose()
        setAccount(signup.firstname)
    }
    const onValuechange =(e)=>{
        setLogin({...login, [e.target.name]:e.target.value})
    }
    const loginUser =async()=>{
    let response = await authenticateLogin(login)
    console.log(response)
    if(response.status === 200){
        handleClose();
        setAccount(response.data.data.firstname)
    }
    }
    return (<>
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxwidth: 'unset' } }}>
            <Componenet>
                {account.view === 'login' ? <Wrapper>
                    <Typography>Welcome to access account</Typography>
                    <TextField variant='standard' label='Enter Email/Mobile number' onChange={(e) => onValuechange(e)} name='username' />
                    <TextField variant='standard' label='Enter Password'
                        onChange={(e) => onValuechange(e)} name='password'
                    />
                    <Text>By continuing, I agree to the Terms of Use & Privacy Policy</Text>
                    <LoginButton onClick={()=>loginUser()}>
                        Login
                    </LoginButton>
                    <Typography style={{ textAlign: 'center' }}>OR</Typography>
                    <RequestOtp>Request OTP</RequestOtp>
                    <CreateAccount onClick={() => toggleSignup()}>New to StackStore? Create your account</CreateAccount>
                </Wrapper>
                    :
                    <Wrapper>
                        <Typography>Welcome to access account</Typography>
                        <TextField variant='standard' label='Enter FirstName' name='firstname' onChange={(e) => onInputchange(e)} />
                        <TextField variant='standard' label='Enter LastNmae' name='lastname' onChange={(e) => onInputchange(e)} />
                        <TextField variant='standard' label='Enter UserName' name='username' onChange={(e) => onInputchange(e)} />
                        <TextField variant='standard' label='Enter Email'
                            name='email' onChange={(e) => onInputchange(e)} />
                        <TextField variant='standard' label='Enter Password' name='password' onChange={(e) => onInputchange(e)} />
                        <TextField variant='standard' label='Enter Phone'
                            name='phone' onChange={(e) => onInputchange(e)} />
                        <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                    </Wrapper>
                }
            </Componenet>
        </Dialog>
    </>)
}
export default LoginDialog;