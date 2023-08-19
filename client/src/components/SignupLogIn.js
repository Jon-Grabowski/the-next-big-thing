import Login from "./Login";
import SignUp from "./SignUp";

function SignUpLogIn({login}){
    return(
        <div>
            <SignUp login={login}/>
            <Login login={login}/>
        </div>
    )
}

export default SignUpLogIn