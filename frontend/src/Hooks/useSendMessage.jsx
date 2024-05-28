import { useState } from "react"
import useConversation from "../Store/userConversation";
import { toast } from 'react-hot-toast'


const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message })
            });
            const data = await res.json();
            if (res.ok) {
                setMessages([...messages, data]);
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
    return { sendMessage, loading };
}

export default useSendMessage
