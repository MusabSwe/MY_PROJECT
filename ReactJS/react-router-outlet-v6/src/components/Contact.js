import { Link, Outlet } from "react-router-dom";
const Contact = () => {

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Contact us Page</h1>
            <h2>Here we have some other business</h2>
            <Link to="company" style={{ margin: "10px", }} >Company</Link>
            <Link to="channel" style={{ margin: "10px", }} >Channel</Link>
            <Link to="other" style={{ margin: "10px", }} >Other</Link>
            <Outlet />
        </div >
    );
}

export default Contact;