import React, { useState } from "react";
import "./style-registration.css";

const Registration = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        phone_no: "",
        email: "",
        password: "",
        role: "customer",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add code to handle the form submission, e.g., send the data to a server for registration.
        console.log("Form data:", formData);
    };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Registration</h2>
                <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone_no">Phone Number</label>
                    <input
                        type="tel"
                        id="phone_no"
                        name="phone_no"
                        value={formData.phone_no}
                        onChange={handleInputChange}
                        required
                    />
                </div>
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
                <div className="form-group">
                    <label>Role</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="admin"
                                checked={formData.role === "admin"}
                                onChange={handleInputChange}
                            />
                            Admin
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="customer"
                                checked={formData.role === "customer"}
                                onChange={handleInputChange}
                            />
                            Customer
                        </label>
                    </div>
                </div>
                <div className="button-group">
                    <button type="submit">Register</button>
                    <button type="submit">Back</button>
                </div>
            </form>
        </div>
    );
};

export default Registration;
