import React from "react";
import { TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';




 const Searchbar=({searchValue,filterValue,onChangeRegion,onChangeSearch}) => {

  return (
    <div className="Searchbar">

    <div className="searchdiv">
      <TextField 
      fullWidth
      id="outlined-basic" 
      placeholder="Search for a country ..." 
      variant="outlined"
       size="small"
       value={searchValue}
       onChange={onChangeSearch}
       InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon/>
          </InputAdornment>
        ),
      }}
     />

     </div>

     <div className="filterdiv">
     <FormControl fullWidth>
  <InputLabel>Search by Region</InputLabel>
  <Select
size="small"
    value={filterValue}
    label=" Search by Region"
    onChange={onChangeRegion}
  >
   <MenuItem value='All regions'>All regions </MenuItem>
<MenuItem value="Africa">Africa</MenuItem>
<MenuItem  value="America">America</MenuItem>
<MenuItem value="Asia">Asia</MenuItem>
<MenuItem  value="Europe">Europe</MenuItem>
<MenuItem value="Oceania">Oceania</MenuItem>
  </Select>
</FormControl>
  </div>

  </div>
  );
}


export default Searchbar;

