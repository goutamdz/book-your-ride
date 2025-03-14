import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Null means loading state
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate("/login", { replace: true });
            return;
        }

        const verifyUser = async () => {
            try {
                await axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setIsAuthenticated(true); // User is authenticated
            } catch (error) {
                localStorage.removeItem("token"); // Remove invalid token
                setIsAuthenticated(false); // Authentication failed
                navigate("/login", { replace: true }); // Redirect to login
            }
        };

        verifyUser();
    }, [navigate, token]);

    if (isAuthenticated === null) return <p>Loading...</p>; // Show loading state
    if (isAuthenticated === false) return null; // Prevent rendering protected components

    return <>{children}</>;
};

export default UserProtectWrapper;
