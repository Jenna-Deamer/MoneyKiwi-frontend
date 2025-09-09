import { useState } from "react";
const API_URL = import.meta.env.VITE_BACKEND_API_URL; 

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
             const response = await fetch(`${API_URL}/auth/register`, { 
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Account created')
            } else {
                setError(data.message || "Registration failed");
            }
        } catch (err) {
            console.error(err);
            setError("An error occurred. Please try again.");
        }
    }

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