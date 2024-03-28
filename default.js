import { products } from "./constants/data.js"
import Product from "./model/product-schema.js"
const DefaultData = async()=>{
try {
await Product.deleteMany({});
   await Product.insertMany(products);
    console.log('data loaded successfully')
} catch (error) {
    console.log('error while inserting default data',error.message)
}
}
export default DefaultData;