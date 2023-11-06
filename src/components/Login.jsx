import { useNavigate } from "react-router-dom"

export default function Login({ loggedIn, setLoggedIn }) {
    const nav = useNavigate()

    const getUsers = () => {
        fetch('http://localhost:8080')
                    .then(res => res.json())
                    .then(users => {
                        console.log(users)
                        })
                    .catch(console.error)
    }



    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        fetch('http://localhost:8080', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then((login) => {
                fetch('http://localhost:8080')
                    .then(res => res.json())
                    .then(users => {
                        if (JSON.stringify(users) === JSON.stringify(formData)) {
                            setLoggedIn(true)
                            nav('/landing')
                        }
                        else { nav("/") }
                        }
                    )
                    .catch(console.error)
            })
            .catch(console.error)
    }


    return (
        <>
            <h2>Log in:</h2>
            <form onSubmit={handleFormSubmit} action="">

                <label htmlFor="email">
                    Email:
                    <input type="email" name="email" />
                </label>

                <br />

                <label htmlFor="password">
                    Password:
                    <input type="password" name="password" />
                </label>

                <br />

                <button type="submit">Log in</button>

            </form>
        </>
    )
}
