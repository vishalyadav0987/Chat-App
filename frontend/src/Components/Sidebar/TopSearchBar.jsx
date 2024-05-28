import React, { useState } from 'react'
import toast from 'react-hot-toast';
import useConversation from '../../Store/userConversation';
import useGetConversation from '../../Hooks/useGetConversation'

const TopSearchBar = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversation()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error("Search have contain atleast 3 character");
        }
        const conversation = conversations.find((c) =>
            c.fullname.toLowerCase().includes(search.toLowerCase()));
        if(conversation){
            setSelectedConversation(conversation);
            setSearch('');
        }
        else{
            toast.error("No such User Found!")
        }
    }
    return (
        <>
            <form className="flex items-center gap-2 mt-2 justify-center" onSubmit={handleSubmit}>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type='submit'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </button>
                </label>
            </form>
            <div className="divider"></div>
        </>
    )
}

export default TopSearchBar
