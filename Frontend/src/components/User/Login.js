import { useState } from "react";
import "./style.css";



function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add code to handle the form submission, e.g., send the data to a server for validation.
        console.log("Form data:", formData);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                <label className="signup-label">Don't have account ?</label>
                <button type="button" onClick={()=>{navigator()}}>Registration</button>
            </form>
        </div>
    );
}

export default Login;