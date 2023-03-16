import { useState } from "react";
import Button from "../../../UI/Button/Button";
import classes from './ContactData.module.css';

const ContactData = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState({
        street: '',
        postalCode: '',
    });

    return (
        <div className={classes.ContactData}>
            <h4>Enter your Contact Data</h4>
            <form>
                <input className={classes.Input} type="text" name="name" id="" placeholder="Your name" />
                <input className={classes.Input} type="email" name="email" id="" placeholder="Your email" />
                <input className={classes.Input} type="text" name="street" id="" placeholder="Your street" />
                <input className={classes.Input} type="text" name="postal" id="" placeholder="Your postal code" />
                <Button btnType='Success'>ORDER</Button>
            </form>
        </div>
    );
}

export default ContactData;