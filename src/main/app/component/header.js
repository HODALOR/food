import React from 'react'

function Header() {
    
    return(
        <div>
          <div   style={{display:"flex", alignItems:"center", backgroundColor:"orange", height: "4rem"}}> 
            <img src="/assets/logo1.png" style={{width:"8rem", height:"8rem"}}/>
            <h2>FoodApp</h2>
            <i class="fa fa-cart-plus" style={{marginLeft:"79%", }}></i>
            </div>
        

        </div>
    )
}


export default Header;