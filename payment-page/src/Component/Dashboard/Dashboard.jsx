import React from 'react'
import "./Dashboard.css"
import Navbar from '../Navbar/Navbar'


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
    <h1>Health Karma</h1>
    <div>
        <button>Equifax</button>
        <button>TransUnion</button>
    </div>
</div>
<div className='sndleftsecond'>
    <h1>832</h1>
    <div>
        <img src="" alt="" />
    </div>
</div>
<div className='trdleftsecond'>
    <div>net worth</div>
    <div>total dept</div>
</div>

</div>


{/* right second portion */}
<div className='rightSecond'>

        <div className='fstrightsecond'>
           
                <div>
                    <img src="" alt="" />
                    <button>..</button>
                    </div>

                    <h1> Credit Card use </h1>
                    <div>
                        <h1>10</h1>
                        <div>
                    <h1>  ***</h1>
                    <div></div>
                        </div>

                </div>
       
        </div>


        <div className='sndrightsecond'>
                <div>
                    <img src="" alt="" />
                    <button>..</button>
                    </div>

                    <h1>  Payment History</h1>
                    <div>
                        <h1>10</h1>
                        <div>
                    <h1>  ***</h1>
                    <div></div>
                        </div>

                </div>
       
       
        </div>
        <div className='trdrightsecond'>
                <div>
                    <img src="" alt="" />
                    <button>..</button>
                    </div>

                    <h1>Credit Age</h1>
                    <div>
                        <h1>10</h1>
                        <div>
                    <h1>  ***</h1>
                    <div></div>
                        </div>

                </div>
        </div>
        <div className='fthrightsecond'>

                 <div>
                    <img src="" alt="" />
                    <button>...</button>
                    </div>

                    <h1> Total Accounts</h1>
                    <div>
                        <h1>10</h1>
                        <div>
                    <h1>  ***</h1>
                    <div></div>
                        </div>

                </div>
           
        </div>


</div>

</div>


{/* *****************************third portion*****************************  */}

<div className='lastPortion'>

</div>


    </div>
  )
}

export default Dashboard
