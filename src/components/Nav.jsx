import { useNavigate } from "react-router-dom"

export default function Nav({loggedIn, setLoggedIn}){
const nav = useNavigate()
    const handleLogout = () => {
        setLoggedIn(false)

    }

    return (
        <>
            <button onClick={() => nav("/")}>Sign up</button>
            <button onClick={() => nav("/login")}>Log in</button>
            <button onClick={handleLogout}>Log out</button>

        </>
    )
}