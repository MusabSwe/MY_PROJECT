import { useState } from "react";
import Button from "../../../UI/Button/Button";
const ContactData = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState({
        street: '',
        postalCode: '',
    });


    return (
        <div>
            <h4>Enter your Contact Data</h4>
            <form>
                <input type="text" name="name" id="" placeholder="Your name" />
                <input type="email" name="email" id="" placeholder="Your email" />
                <input type="text" name="street" id="" placeholder="Your street" />
                <input type="text" name="postal" id="" placeholder="Your postal code" />
                <Button btnType='Success'>ORDER</Button>
            </form>

        </div>
    );
}

export default ContactData;