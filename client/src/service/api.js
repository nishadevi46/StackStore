import { Try } from '@mui/icons-material'
import axios from 'axios'
const URL='http://localhost:8000'
export const authenticateSignUp = async(data)=>{
  try {
    axios.post(`${URL}/signup`,data)
  } catch (error) {
    console.log('error whike calling signup api', error)
  }
}