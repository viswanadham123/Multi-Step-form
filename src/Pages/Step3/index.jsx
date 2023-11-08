
import "./index.css"

import { Link } from "react-router-dom";

const Step3=()=>{

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
                    <div className="round-box2">2</div>
                    <div>
                    <p>step2</p>
                    <p>Slect Plan</p>
                    </div>    
                </div>
                <div className="steps-container">
                    <div className="round-box">3</div>
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
                <h1>Pic ADD-ON</h1>
                <p>please provide your name and email and phone number</p>
            </div >
               
               <div className="step-3">
                <input  className="input2" type="checkbox"/>
                <div className="service2"> <p>online service</p><p>larger storage</p></div>
                <div>+$1.5/p\month</div>
               </div>
               <div className="step-3">
                <input  className="input2" type="checkbox"/>
                <div className="service2"> <p>larger storage</p><p>larger storage</p></div>
                <div>+$1.5/p\month</div>
               </div>
               <div className="step-3">
                <input  className="input2" type="checkbox"/>
                <div className="service2"> <p>customaization</p><p>larger storage</p></div>
                <div>+$1.5/p\month</div>
               </div>

               <div className="d-flex flex-row ">
                <Link to="/step2">    <button className="next-button">Previous Step</button></Link>
                <Link to="/step4">    <button className="next-button">Next Step</button></Link>
             
                </div>
        </div>
    </div>

    </>
)


}

export default Step3;