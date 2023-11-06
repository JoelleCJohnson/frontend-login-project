import Nav from "./Nav";

export default function Header({loggedIn, setLoggedIn}){
    return(
        <header>
            <h1>Welcome!</h1>
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

        </header>
    )
}