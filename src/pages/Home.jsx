import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Landing from "./Landing";

export default function Home({ loggedIn, setLoggedIn, signedUp, setSignedUp }){

    return(
        <>
        {!loggedIn ?
        <>
            {/* <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> */}
            {/* <SignUp signedUp={signedUp} setSignedUp={setSignedUp}/> */}
        </>
        :
        <Landing />
        }
        </>
    )
}