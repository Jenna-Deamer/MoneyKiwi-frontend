import { useState } from "react";
import { useAuth } from "./AuthProvider.jsx";


function RegisterPage() {
    const { signUpAction, error } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUpAction(email, password);
     };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        minLength="8"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </fieldset>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Create Account</button>
            </form>

        </div>
    );
}
export default RegisterPage;