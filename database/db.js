import mongoose from "mongoose";

export const Connection = async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-gt01rzh-shard-00-00.f62bx9y.mongodb.net:27017,ac-gt01rzh-shard-00-01.f62bx9y.mongodb.net:27017,ac-gt01rzh-shard-00-02.f62bx9y.mongodb.net:27017/?ssl=true&replicaSet=atlas-12b8zs-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
          await mongoose.connect(URL)
          console.log('database connected successfully')
    } catch (error) {
        console.log('errror while connecting database', error.message)
    }
}
export default Connection;