import Login from "./Login";
import SignUp from "./SignUp";

function SignUpLogIn({login}){
    return(
        <div className=''>
            <div className='d-flex flex-row align-items-center justify-content-center border'>
                <div className='p-4'>
                    <SignUp
                    login={login}
                    />
                </div>
                <div className='p-4'>
                    <Login
                    login={login}
                    />
                </div>
            </div>
        </div>
    )
}

export default SignUpLogIn