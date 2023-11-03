import { useNavigate } from "react-router-dom"

export default function SignUp() {

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        useNavigate("/")
        
    }

    return (
        <form onSubmit={handleFormSubmit} action="">

            <label htmlFor="email">
                <input type="email" name="email" />
            </label>

            <label htmlFor="password">
                <input type="password" name="password" />
            </label>

            <button type="submit">Sign up</button>

        </form>
    )
}