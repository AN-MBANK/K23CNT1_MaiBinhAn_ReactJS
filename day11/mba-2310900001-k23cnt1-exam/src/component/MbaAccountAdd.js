import { useState } from "react";
import useAccounts from "./useAccounts";

function MbaAccountAdd() {
    const { addAccount } = useAccounts();


    const [newAccount, setNewAccount] = useState({ id: "", name: "", email: "", amount: 0 });
    
    const handleChange = (e) => {
        setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addAccount({ ...newAccount, amount: Number(newAccount.amount) });
        setNewAccount({ id: "", name: "", email: "", amount: 0 });
    };

    return (
        <div>
            <h2>Add Account</h2>
            <form onSubmit={handleSubmit}>
                <input name="id" placeholder="ID" onChange={handleChange} value={newAccount.id} required />
                <input name="name" placeholder="NAME" onChange={handleChange} value={newAccount.name} required />
                <input name="email" placeholder="EMAIL" onChange={handleChange} value={newAccount.email} required />
                <input name="amount" placeholder="AMOUNT" type="number" onChange={handleChange} value={newAccount.amount} required />
                <button type="Submit">Add</button>
            </form>
        </div>
    );
}

export default MbaAccountAdd;
