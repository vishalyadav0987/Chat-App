import { createContext, useContext, useEffect, useState } from "react";
import io from 'socket.io-client';
import { useAuthContext } from '../Context/AuthContext';

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUser, setOnlineUser] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const newSocket = io("https://chat-app-yad.onrender.com", {
                query: {
                    userId: authUser.resData._id,
                }
            });

            setSocket(newSocket);

            newSocket.on("getOnlineUsers", (users) => {
                setOnlineUser(users);
                console.log(users);
            });

            return () => {
                newSocket.close();
                setSocket(null);
            };
        } else if (socket) {
            socket.close();
            setSocket(null);
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUser }}>
            {children}
        </SocketContext.Provider>
    );
}
