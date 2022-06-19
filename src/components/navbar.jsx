import React from "react";


const Navbar=()=>{
    return(
        <nav className="navbar" id="header">
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
      
        <div style={{margin:'0px 15px'}}>
<div className="box animate" style={{backgroundColor:'#fffaff'}}></div>
<div  className="box animate" style={{backgroundColor:"#303036",transform: 'rotate(-45deg)',position:'absolute',marginTop:'-30px'}}></div>

</div>

<h2>Where in the world ? </h2>
</div>       
 </nav>
    )
}

export default Navbar;