
      


    import React from 'react'
    import './Navbar.css';



    const Navbar = () => {
      return (
        <div className='firstPortion'>
     
        <div className='1no' style={{backgroundColor:"black", color:"#3BDC93" , padding:"10px" , borderRadius:"25px"}}>CK</div>
        
        <div className='2no'  style={{backgroundColor:"none", border:"1px solid black" , borderRadius:"15px", padding:"5px"}}>
        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" width={"45px"} style={{marginBottom:"-7px" , borderRadius:"15px"}} />

       <input type="value" style={{borderRadius:"15px", height:"25px",border:"none", width:"150px"}} ></input>
        <select name="" id="" style={{borderRadius:"15px" , height:"22px", border:"none"}}>
            <option value="Kuntal Kumar"></option>

        </select>

           
        </div>

        <div className='3no'>
            <button style={{backgroundColor:"#3BDC93", padding:"8px",borderRadius:"15px"}}>Karma</button>
            <button style={{backgroundColor:"#3BDC93", padding:"8px",borderRadius:"15px"}}>Credit</button>
            <button style={{backgroundColor:"#3BDC93", padding:"8px",borderRadius:"15px"}}>Money</button>
        </div>

        <div className='4no'>
            <button style={{backgroundColor:"white  ", padding:"8px",borderRadius:"15px"}}>kk</button>
        </div>

    </div>


      )
    }
    
    export default Navbar
    