import React from "react";

import { Input } from "@mui/material";
import './index.css'
import SearchIcon from '@mui/icons-material/Search';
import DropdownMenuVer1 from "../../dropdownmenu/dropver1";

const SearchBar = () => {
    return<div className="searchBar-wrapper rounded-md bg-grey relative flex items-center w-9/12">
        <DropdownMenuVer1 />
        <Input type="text" disableUnderline={true} placeholder="Bất động sản" className="type"/>
        <div className="search-button absolute rounded-md flex py-0.5 items-center w-7 justify-center bg-orange right-1 ">
            <SearchIcon className="text-white"/>
        </div>
    </div>
}
export default SearchBar