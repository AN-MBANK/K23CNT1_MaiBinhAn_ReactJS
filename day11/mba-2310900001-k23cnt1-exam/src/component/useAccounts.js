import { useState } from "react";

function useAccounts() {
    const [accounts, setAccounts] = useState([]);

    const addAccount = (account) => {
        setAccounts((prevAccounts) => [...prevAccounts, account]);
    };

    return { accounts, addAccount };
}

export default useAccounts;
