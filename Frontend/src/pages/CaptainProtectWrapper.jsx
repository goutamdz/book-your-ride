import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Null means loading state
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate("/captainlogin", { replace: true });
            return;
        }

        const verifyCaptain = async () => {
            try {
                await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setIsAuthenticated(true); // User is authenticated
            } catch (error) {
                localStorage.removeItem("token"); // Remove invalid token
                setIsAuthenticated(false); // Authentication failed
                navigate("/captainlogin", { replace: true }); // Redirect to login
            }
        };

        verifyCaptain();
    }, [navigate]);

    if (isAuthenticated === null) return <p>Loading...</p>; // Show loading state
    if (isAuthenticated === false) return null; // Prevent rendering protected components

    return <>{children}</>;
};

export default CaptainProtectWrapper;
