import { Link } from "react-router-dom";
const Contact = () => {

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Contact us Page</h1>
            <h2>Here we have some other business</h2>

            <Link style={{ margin: "10px", }} to='company'>Company</Link>
            <Link style={{ margin: "10px", }} to='channel'>Channel</Link>
            <Link style={{ margin: "10px", }} to='other'>Other</Link>
        </div >
    );
}

export default Contact;