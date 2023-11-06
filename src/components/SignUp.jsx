import { useNavigate } from "react-router-dom"

export default function SignUp({ signedUp, setSignedUp }) {
    const nav = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault()

            //get information from database
            fetch("http://localhost:8080/")
                .then(res => res.json())
                //with users data from database, turn it and formData into JSON formatting
                .then((users) => postReq())
                .catch(console.error)
        }
    

    const postReq = (users, e) => {
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        JSON.stringify(users)
        JSON.stringify(formData)
        //find the user in the database by formData.email
        if (users.id === formData.email) {
            //if already signed up, setSignedUp to true
            setSignedUp(true)
        } else {

            //else, add user to db with POST request
            fetch("http://localhost:8080/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            })
                .then(res => res.json())
                .then(() => {
                    //once POST has completed, prompt the user to log in. 
                    nav("/login")
                })
                .catch(console.error)
        }
    }

    const goToLogIn = () => {
        nav("/login")
    }

    return (
        <>
            <h2 className={signedUp ? { color: 'red' } : {}}>Sign Up:</h2>
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