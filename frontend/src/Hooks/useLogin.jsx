import React, { useState } from 'react'
import { toast } from 'react-hot-toast' 
import { useAuthContext } from '../Context/AuthContext';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const login = async (username, password) => {
        const success = handleInputError(username, password);
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            const data = await res.json();
            if (res.ok) {
                // console.log(data);
                localStorage.setItem("chat-user", JSON.stringify(data));
                toast.success("User Succesfully logged in");
                setAuthUser(data);
            }
            else {
                toast.error(data.msg);
            }
        } catch (error) {
            toast.error(error.message);

        } finally {
            setLoading(false);
        }
    }

    return { loading, login }
}

export default useLogin


const handleInputError = (username, password) => {
    if (!username || !password) {
        toast.error('Please fill in all details');
        return false;
    }
    return true;
}
