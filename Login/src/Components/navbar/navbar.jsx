import './navbar.css';
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide, faCircleRadiation,  faCoins, faCreditCard, faEllipsisVertical, faHouseChimney,   faWallet } from '@fortawesome/free-solid-svg-icons'



const Navbar = (props) => {
 const navigate = useNavigate();
  const handleLogin = () =>{
    navigate('/login')
  }
  return (
    <div className='firstPortion'>
    <div className='1no' style={{backgroundColor:"black",marginLeft:"20px",marginTop:"10px", color:"#3BDC93" , padding:"10px" , borderRadius:"25px"}}>CK</div>
    
    <div className='2no'  style={{backgroundColor:"none", border:"1px solid black" , borderRadius:"15px", padding:"5px"}}>
    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" width={"45px"} style={{marginBottom:"-7px" , borderRadius:"15px"}} />

   {/* <input type="value" style={{borderRadius:"15px", height:"25px",border:"none", width:"150px"}} ></input> */}
   <button  style={{borderRadius:"14px",padding:"1px",border:"none",width:"150px", marginRight:"px"}}>{props.name ? ` ${props.name}` : "Login please"}    
    <button onClick={handleLogin} name="" id="" style={{borderRadius:"10px" , backgroundColor:"black",marginLeft:"10px",color:"white",padding:"2px"}}>
    Login</button></button>
    </div>

    <div className='thirdNo'>
        <button className='categoryBtn'>Karma</button>
        <button className='categoryBtn' >Credit</button>
        <button className='categoryBtn'>Money</button>
    </div>

    <div className='fourno'>

    <FontAwesomeIcon icon={faCircleRadiation} size="lg" />
    <FontAwesomeIcon icon={faWallet} size="lg" /> 
    <FontAwesomeIcon icon={faCreditCard} size="lg" />
    <FontAwesomeIcon icon={faCoins} size="lg" />
    <FontAwesomeIcon icon={faCarSide} size="lg" />
    <FontAwesomeIcon icon={faHouseChimney} size="lg" />
    <FontAwesomeIcon icon={faEllipsisVertical} size="lg" />
                {/* <button style={{backgroundColor:"white  ", padding:"8px",borderRadius:"15px"}}>kk</button> */}
    </div>
</div>


  )
}

export default Navbar
