import React from 'react'
import "./Dashboard.css"
import Navbar from '../Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight, faCarSide,   faCoins, faCreditCard, faEllipsis, faEllipsisVertical, faHouseChimney,   faRefresh,   faSms,   faUser,   faWallet, faWarning } from '@fortawesome/free-solid-svg-icons'
import graph from "../Assets/graph.jpeg";



const Dashboard = () => {
  return (
    <div className='parent'>
      {/* <h1>Dashboard</h1> */}
      {/* ****************************first portion***********************  */}
<Navbar/>

            {/* *********************second portion**********************  */}


<div className='secondPortion'>

{/* left second portion  */}

<div className='leftSecond'>
<div className='fstleftSecond'>

<div>
<div className='healthKarma'>Health Karma</div>

</div>
    <div>
        <button className='equifax'>Equifax</button>
        <button className='equifax'>TransUnion</button>
    </div>
</div>



<div className='sndleftsecond'>
<div>

<div>-1 pts</div>
    <div style={{fontSize:"70px", fontWeight:"bold"}}>832</div>
</div>
       <div>

    {/* <HalfCircleWheel/> */}
    <img src="https://static.vecteezy.com/system/resources/previews/010/366/265/non_2x/meter-speedometer-transparent-free-png.png" width={"300px"}  alt="" />
{/* <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSkWwQcTCcXpc33olLVWgu-_j3eJ7plur5iUrBdSfiKC4rdRgV6"  style={{color:"black", backgroundImage:"none"}}alt="" /> */}
    </div>
</div>
<div className='trdleftsecond'>
<div className='smallBoxStyle'>
           
           <div  className='boxStyle'>
           <div>Net Worth</div>
           <FontAwesomeIcon icon={faArrowRight} size="lg" className='logoBgOnly' />
                   </div>

               <div  > $ <span style={{width:"120px",fontSize:"40px", textAlign:"left"}}>137</span> </div>

               <br /><br />
             
  
   </div>    
   <div className='smallBoxStyle'>
           
           <div  className='boxStyle'>
           <div>Total Dept</div>

               <FontAwesomeIcon icon={faArrowRight} size="lg" className='logoBgOnly' />
               </div>

               <div   > $ <span style={{width:"120px",fontSize:"40px", textAlign:"left"}}>64,</span>100 </div>

               <br /><br />
               
  
   </div>
</div>

</div>


{/* right second portion */}
<div className='rightSecond'>

        <div className='fstrightsecond'>
           
                <div  className='boxStyle'>
                <FontAwesomeIcon icon={faCreditCard} size="lg" className='logoBg' />
                    <FontAwesomeIcon icon={faEllipsisVertical} size="lg" className='logoBgOnly'/>
                    </div>

                    <div  style={{width:"120px",fontSize:"20px", textAlign:"left"}}> Credit Card use </div>

                    <br /><br />
                    <div className='boxStyle'>
                        <div > <span style={{fontSize:"35px",fontWeight:"bold"}}>10</span> %</div>
                        <div>
                        <FontAwesomeIcon icon={faEllipsis} size='2xl' />                   
                        <p style={{fontSize:"8px"}}>High Impact</p>
                        </div>

                </div>
       
        </div>



        <div className='fstrightsecond'>
           
           <div  className='boxStyle'>
           <FontAwesomeIcon icon={faWallet} size="lg" className='logoBg' />
               <FontAwesomeIcon icon={faEllipsisVertical} size="lg" className='logoBgOnly'/>
               </div>

               <div  style={{width:"120px",fontSize:"20px", textAlign:"left"}}>Payment History </div>

               <br /><br />
               <div className='boxStyle'>
                   <div > <span style={{fontSize:"35px",fontWeight:"bold"}}>100</span> %</div>
                   <div>
                   <FontAwesomeIcon icon={faEllipsis} size='2xl' />                   
                   <p style={{fontSize:"8px"}}>High Impact</p>
                   </div>

           </div>
  
   </div>



   <div className='fstrightsecond'>
           
           <div  className='boxStyle'>
           <FontAwesomeIcon icon={faWarning} size="lg" className='logoBg' />
               <FontAwesomeIcon icon={faEllipsisVertical} size="lg" className='logoBgOnly'/>
               </div>

               <div  style={{width:"120px",fontSize:"20px", textAlign:"left"}}> Derogatory Marks</div>

               <br /><br />
               <div className='boxStyle'>
                   <div > <span style={{fontSize:"35px",fontWeight:"bold"}}>0</span> </div>
                   <div>
                   <FontAwesomeIcon icon={faEllipsis} size='2xl' />                   
                   <p style={{fontSize:"8px"}}>High Impact</p>
                   </div>

           </div>
  
   </div>


        <div className='fstrightsecond'>
           
           <div  className='boxStyle'>
           <FontAwesomeIcon icon={faRefresh} size="lg" className='logoBg' />
               <FontAwesomeIcon icon={faEllipsisVertical} size="lg" className='logoBgOnly' />
               </div>

               <div  style={{width:"120px",fontSize:"20px", textAlign:"left"}}> Credit Age </div>

               <br /><br />
               <div className='boxStyle'>
               <div > <span style={{fontSize:"35px",fontWeight:"bold"}}>4</span> Years</div>
                   <div>
                   <FontAwesomeIcon icon={faEllipsis} size='2xl' />                   
                   <p style={{fontSize:"8px"}}>Medium Impact</p>
                   </div>

           </div>
  
   </div>
   <div className='fstrightsecond'>
           
           <div  className='boxStyle'>
           <FontAwesomeIcon icon={faUser} size="lg" className='logoBg'/>
               <FontAwesomeIcon icon={faEllipsisVertical} size="lg" className='logoBgOnly'/>
               </div>

               <div  style={{width:"120px",fontSize:"20px", textAlign:"left"}}> Total Account </div>

               <br /><br />
               <div className='boxStyle'>
               <div > <span style={{fontSize:"35px",fontWeight:"bold"}}>12</span> </div>
                   <div>
                   <FontAwesomeIcon icon={faEllipsis} size='2xl' />                   
                   <p style={{fontSize:"8px"}}>Low Impact</p>
                   </div>

           </div>
  
   </div>
   <div className='fstrightsecond'>
           
           <div  className='boxStyle'>
           <FontAwesomeIcon icon={faSms} size="lg" className='logoBg'/>
               <FontAwesomeIcon icon={faEllipsisVertical} size="lg" className='logoBgOnly' />
               </div>

               <div  style={{width:"120px",fontSize:"20px", textAlign:"left"}}> Hard Enquiries </div>

               <br /><br />
               <div className='boxStyle'>
               <div > <span style={{fontSize:"35px",fontWeight:"bold"}}>0</span> </div>
                   <div>
                   <FontAwesomeIcon icon={faEllipsis} size='2xl' />                   
                    <p style={{fontSize:"8px"}}>Low Impact</p>
                   </div>

           </div>
  
   </div>


</div>

</div>


{/* *****************************third portion*****************************  */}

<div className='lastPortion' >


<div className='LastNavbar'>
<div className='firstLastPortion'>
<div style={{fontSize:"27px"}}>Score History</div>
<div>
<button className='lowbtnStyle'>3 month</button>
<button className='lowbtnStyle'>6 month</button>
<button className='lowbtnStyle'>1 year</button>
</div>
<div style={{fontSize:"27px"}}>
    Credit Offers
</div>

</div>

<div className='scndLastNvr'>

    <div> <span style={{fontSize:"30px"}}>24</span>  offers for you  </div>
    <FontAwesomeIcon icon={faArrowRight} size="lg" className='roundCircle' />

</div>



</div>


<div className='lastBody'>
    <div className='fstlastBody' style={{color:"white"}} >
    <img src={graph} width={"500px"} alt="" />
    <img src="" alt="" />
     </div>
<div className='lastImageDiv'>
{/* <img src={divImage3} width={"250px"} height={"190px"} alt="" />

    <img src={divImage2} width={"250px"} height={"190px"} alt="" />
    <img src={divImage1} width={"250px"} height={"190px"} alt="" />

     */}
     <div className='lastDiv1'>
     <div style={{display:"flex", justifyContent:"space-around",padding:"20px"}}>
     <div style={{backgroundColor:"white" , padding:"15px", borderRadius:"25px"}}>    

    
     <FontAwesomeIcon icon={faHouseChimney} size='lg' />
    
    </div>
     <div style={{fontSize:"20px",fontWeight:"bold" ,width:"100px"}}>Goldman Sachs</div>
     </div>
     <div style={{display:"flex", justifyContent:"space-around"}}>
        <div>
            <div>Rate</div>
<div><span style={{fontSize:"30px",fontWeight:"bold" ,width:"100px"}}>14</span>%</div>
        </div>
        <div>
            <div>Period</div>
            <div><span style={{fontSize:"30px",fontWeight:"bold" ,width:"100px"}}>36</span> month</div>
        </div>

     </div>

     </div>
     <div className='lastDiv2'>
        <div style={{display:"flex", justifyContent:"space-around",padding:"20px"}}>
        <div style={{backgroundColor:"white" , padding:"15px", borderRadius:"25px"}}>    

      
        <FontAwesomeIcon icon={faCarSide} size='lg' />
        
        </div>
        <div style={{fontSize:"20px",fontWeight:"bold" ,width:"100px"}}>Bank Of America</div>
        </div>
        <div style={{display:"flex", justifyContent:"space-around"}}>
        <div>
            <div>Rate</div>
            <div><span style={{fontSize:"30px",fontWeight:"bold" ,width:"100px"}}>14</span>%</div>

        </div>
        <div>
            <div>Period</div>
            <div><span style={{fontSize:"30px",fontWeight:"bold" ,width:"100px"}}>36</span> month</div>
        </div>

     </div>     </div>
     <div className='lastDiv3'>
     <div style={{display:"flex", justifyContent:"space-around",padding:"20px"}}>
<div style={{backgroundColor:"white" , padding:"15px", borderRadius:"25px"}}>    
    <FontAwesomeIcon icon={faCoins} size='lg' />
</div>
        <div style={{fontSize:"20px",fontWeight:"bold" ,width:"100px"}}>JPMorgan Chase</div>
        </div>
        <div style={{display:"flex", justifyContent:"space-around"}}>
        <div>
            <div>Rate</div>
            <div><span style={{fontSize:"30px",fontWeight:"bold" ,width:"100px"}}>14</span>%</div>

        </div>
        <div>
            <div>Period</div>
            <div><span style={{fontSize:"30px",fontWeight:"bold" ,width:"100px"}}>36</span> month</div>
        </div>

     </div>     </div>
</div>
    <div className='sndlastBody'></div>

    <div></div>
</div>


</div>


    </div>
  )
}

export default Dashboard
