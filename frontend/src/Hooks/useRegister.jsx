import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useAuthContext } from '../Context/AuthContext';

const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext()
    const register = async ({ fullname, username, password, confirmPassword, gender }) => {
        const success = handleInputError({ fullname, username, password, confirmPassword, gender })
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch('api/auth/register', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullname, username, password, confirmPassword, gender })
            });
            const data = await res.json();
            if (res.ok) {
                // console.log(data);
                localStorage.setItem("chat-user", JSON.stringify(data));
                setAuthUser(data)
                toast.success(data.msg);
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
    return { loading, register }
}

export default useRegister;


const handleInputError = ({ fullname, username, password, confirmPassword, gender }) => {
    if (!fullname || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill in all details');
        return false;
    }
    if (password !== confirmPassword) {
        toast.error('Password do not match');
        return false;
    }
    if (password.length < 6) {
        toast.error('Password contains alteast 6 character');
        return false;
    }
    return true;
}
