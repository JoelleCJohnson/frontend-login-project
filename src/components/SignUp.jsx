import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function SignUp({ signedUp, setSignedUp }) {
    const nav = useNavigate()


    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        //get information from database
        fetch("http://localhost:8080/")
            .then(res => res.json())
            .then((users) => {
                users.some((user) => user.email === formData.email) ?
                    console.log('An account already exists with this email. Please log in or sign up with a different eamil.')
                    :
                    //add user to db 
                    fetch("http://localhost:8080/", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData),
                    })
                        .then(res => res.json())
                        .then(() => {
                            setSignedUp(true)
                            nav("/login")
                        })
                        .catch(console.error)
            })
            .catch(console.error)
        }

    
        



const goToLogIn = () => {
    nav("/login")
}

return (
    <>
        <h2>Sign Up:</h2>
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
            <button type="submit">Sign up</button>
            <br />
            <hr />
            <h3>Already have an account?</h3>
            <button onClick={goToLogIn}>Log In</button>

        </form>
    </>
)
}