import mongoose from "mongoose";

export const Connection = async(URL)=>{

    try {
          await mongoose.connect(URL)
          console.log('database connected successfully')
    } catch (error) {
        console.log('errror while connecting database', error.message)
    }
}
export default Connection;