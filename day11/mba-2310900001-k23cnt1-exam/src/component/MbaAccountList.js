import useAccounts from "./useAccounts";
function MbaAccountList() {
    const {accounts} =useAccounts();
    return(
        <div>
            <h2>Account List</h2>
            <ul>
                {accounts.map((acc)=>(
                    <li key={acc.id}>
                        {acc.name} - {acc.email} - ${acc.amount}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default MbaAccountList;