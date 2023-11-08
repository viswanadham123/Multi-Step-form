


import { Link } from "react-router-dom";
import "./index.css"

const Step1=()=>{
    

    const handleFormSubmit = () => {

    }

return(
    <>
    <div  className="main-container">
        <div className="sub-conatainer1">
                <div className="steps-container">
                    <div className="round-box">1</div>
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
                    <div className=" round-box2">3</div>
                    <div>
                    <p>step 3</p>
                    <p>Add-on</p>
                    </div>    
                </div>
                <div className="steps-container">
                    <div className=" round-box2">4</div>
                    <div>
                    <p>step 4</p>
                    <p>Summery</p>
                    </div>    
                </div>
        </div>

<form onSubmit={handleFormSubmit}>
<div className="sub-conatainer3">
            <div className="top-div">
                <h1>Personal  Info</h1>
                <p>please provide your name and email and phone number</p>
            </div>
               
                <div className="input-div">
                      <label htmlFor="id1">Name</label>
                        <input placeholder="viswanadham" id="id1" type="text" />
                </div>
                <div className="input-div ">
                      <label  htmlFor="id2">Email Adress</label>
                        <input placeholder="viswanadham.andala@gmail.com" id="id2" type="email" />
                </div>
                <div className="input-div ">
                      <label  htmlFor="id3">Phone Number</label>
                        <input placeholder="9676189866" type="number" id="id3"/>
                </div>
                

              <Link to="/step2"><button type="submit" className="next-button">Next Step</button></Link> 
        </div>
</form>
        
    </div>

    </>
)


}

export default Step1;