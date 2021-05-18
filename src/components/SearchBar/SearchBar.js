import React from 'react'

const SearchBar = ({
    input:searchBar,
    onChange:setSearchBar}) => {
    return (
        <>
        <input 
        style={{width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"}}
        placeholder="Search a product"
        value={searchBar}
        onChange={(e)=>setSearchBar(e.target.value)}
        />           
        </>
    )
}

export default SearchBar
