import Login from "./Login";
import SignUp from "./SignUp";

function SignUpLogIn({login}){
    return(
        <div className='container-lg'>
            <SignUp login={login}/>
            <Login login={login}/>
        </div>
    )
}

export default SignUpLogIn