import { InputBase, Box, styled,ListItem,List } from "@mui/material"
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';
import {getProducts} from '../../redux/actions/productActions'
const SearchContainer = styled(Box)`
background:#fff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`
const InputSearchBase = styled(InputBase)`
width:100%;
padding-left:10px;
font-size:unset;
`
const Seacrhiconwrapper=styled(SearchIcon)`
color:blue;
padding:5px;
display:flex;
`

const ListWrapper = styled(List)`
position:absolute;
background:#fff;
color:#000;
margin-top:36px;

`
const Search = ()=>{
    const [text,setText] = useState('')
    const{ products} = useSelector(state => state.getProducts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    const getText =(text)=>{
        setText(text)
    }
    return (
        <SearchContainer>
        <InputSearchBase placeholder="Search for products, brand and more" onChange={(e)=>getText(e.target.value)}
            value={text}
        />
        <Seacrhiconwrapper>
            <SearchIcon/>
        </Seacrhiconwrapper>
        {
            text && <ListWrapper>
                {
                    products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                        <ListItem>
                        <Link
                        to={`/product/${product.id}`}
                        onClick={()=> setText('')}
                        style={{textDecoration:'none', color:'inherit'}}>
                        {product.title.longTitle}
                        </Link>
                        </ListItem>
                    ))
                    }
            </ListWrapper>
        }
        </SearchContainer>

    )
}
export default Search