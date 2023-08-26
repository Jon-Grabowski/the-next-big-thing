import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";

function SignUpLogIn(){
    const [formTrigger, setFormTrigger] = useState(false)

    return(
        <div className=''>
            <div className='d-flex flex-row align-items-center justify-content-center'>
                {formTrigger? 
                <div className='p-4'>
                    <SignUp formTrigger={formTrigger} setFormTrigger={setFormTrigger}/>
                </div>
                :<div className='p-4'>
                    <Login formTrigger={formTrigger} setFormTrigger={setFormTrigger}/>
                </div>}
            </div>
        </div>
    )
}

export default SignUpLogIn