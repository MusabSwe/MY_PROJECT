const UserInput = (props) => {
    return (
        <div>
            <h1>User Iutput</h1>
            <input type="text" onChange={props.change} value={props.currentName} />
        </div>
    );
}

export default UserInput;