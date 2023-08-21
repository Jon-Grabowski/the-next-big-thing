import Login from "./Login";
import SignUp from "./SignUp";

function SignUpLogIn(){
    return(
        <div className=''>
            <div className='d-flex flex-row align-items-center justify-content-center border'>
                <div className='p-4'>
                    <SignUp/>
                </div>
                <div className='p-4'>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default SignUpLogIn