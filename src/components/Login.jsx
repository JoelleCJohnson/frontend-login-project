import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login({loggedIn, setLoggedIn}) {
    const nav = useNavigate()

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
            .then(login => setLoggedIn(true))
            .catch(console.error)
        nav('/landing')
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
