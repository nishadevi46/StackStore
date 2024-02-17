  import { useEffect } from "react"
  import {useDispatch}  from 'react-redux'
  import {useParams} from 'react-router-dom'
  import { getproductDetails } from "../../redux/actions/productActions"
const DetailView = ()=>{
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(()=>{
     dispatch(getproductDetails(id));
    },[dispatch, id])
    return (
        <>
            hello
        </>
    )
}
export default DetailView