import React from "react";
import Brightness2Icon from '@mui/icons-material/Brightness2';


const Navbar=({changeTheme})=>{
    return(
        <nav className="navbar" id="header">
<h4 style={{marginLeft:'10px'}}>Where in the world ? </h4>
<div style={{display:'flex',alignItems:'center',marginRight:'20px'}}>
<Brightness2Icon fontSize='small'/>

</div>

 </nav>
    )
}

export default Navbar;