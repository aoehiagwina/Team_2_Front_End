



export const Update = ({user_name, user_email, update_Handler, set_Username, set_Email}) => {

    const updateHandler = async (e) => {
        e.preventDefault();
        const update_details = await updateUserFetch(username, email);
        setUsername(update_details.username);
        setEmail(update_details.email);
    }

    return (
        <div>
            <form onSubmit={update_Handler}>
            <input
                onChange={(e) => set_Username(e.target.value)}
                placeholder={user_name}
            />
            <input
                onChange={(e) => set_Email(e.target.value)}
                placeholder={user_email}
            />
            <button type="submit">Update</button>
            </form>
        </div>
    )
};