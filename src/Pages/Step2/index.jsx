
import "./index.css"

import { Link } from "react-router-dom";

const Step2=()=>{

return(
    <>
    <div  className="main-container">

   
        <div className="sub-conatainer1">
                <div className="steps-container">
                    <div className="round-box2">1</div>
                    <div>
                    <p>step1</p>
                    <p>your information</p>
                    </div>    
                </div>
                <div className="steps-container">
                    <div className="round-box">2</div>
                    <div>
                    <p>step2</p>
                    <p>Slect Plan</p>
                    </div>    
                </div>
                <div className="steps-container">
                    <div className="round-box2">3</div>
                    <div>
                    <p>step 3</p>
                    <p>Add-on</p>
                    </div>    
                </div>
                <div className="steps-container">
                    <div className="round-box2">4</div>
                    <div>
                    <p>step 4</p>
                    <p>Summery</p>
                    </div>    
                </div>
        </div>


        <div className="sub-conatainer3">
            <div className="top-div">
                <h1>Select your plan</h1>
                <p>please provide your name and email and phone number</p>
            </div>
               
                <div className="box-main">
                    <div className="box"> 
                    <img alt="image"/>
                        <h1>
                            Arcade
                        </h1>
                        <p>$55</p>
                    </div>
                    <div className="box"> 
                    <img alt="image"/>
                        <h1>
                            Adavanced
                        </h1>
                        <p>$55</p>
                    </div>
                    <div className="box"> 
                        <img alt="image"/>
                        <h1>
                            Pro
                        </h1>
                        <p>$55</p>
                    </div>
                    
             </div>
               
                

             <div className="d-flex flex-row ">
                <Link to="/step1">    <button className="next-button">Previous Step</button></Link>
                <Link to="/step3">    <button className="next-button">Next Step</button></Link>
             
                </div>
        </div>
    </div>

    </>
)


}

export default Step2;