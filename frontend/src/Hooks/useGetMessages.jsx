import React, { useEffect ,useState} from 'react'
import useConversation from '../Store/userConversation';
import { toast } from 'react-hot-toast'

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessage = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/message/${selectedConversation._id}`);
                const data = await res.json();
                if(data.error) throw new Error(data.error);
                console.log(data);
                setMessages(data)
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        if (selectedConversation?._id) getMessage();
    }, [selectedConversation?._id, setMessages]);

    return { messages, loading };
}

export default useGetMessages
