import { InputBase, Box, styled } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
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
const Search = ()=>{
    return (
 
        <SearchContainer>
        <InputSearchBase placeholder="Search for products, brand and more"/>
        <Seacrhiconwrapper>
            <SearchIcon/>
        </Seacrhiconwrapper>
        </SearchContainer>

    )
}
export default Search