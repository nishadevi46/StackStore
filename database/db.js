import mongoose from "mongoose";

export const Connection = async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-awssnjf-shard-00-00.httd4nz.mongodb.net:27017,ac-awssnjf-shard-00-01.httd4nz.mongodb.net:27017,ac-awssnjf-shard-00-02.httd4nz.mongodb.net:27017/?ssl=true&replicaSet=atlas-k9wys6-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
          await mongoose.connect(URL)
          console.log('database connected successfully')
    } catch (error) {
        console.log('errror while connecting database', error.message)
    }
}
export default Connection;