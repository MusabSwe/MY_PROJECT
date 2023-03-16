import { useEffect, useState } from "react";
import Order from "../../../components/Order/Order";
import axios from "../../../axios-orders";
import withErrorHandler from "../../../withErrorHandler/withErrorHandler";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                // console.log(res.data);
                setLoading(false);
                setOrders(fetchedOrders)
            }).catch(err => {
                // console.log(err);
                setLoading(false);
            });

    }, []);

    return (
        <div>
            <Order />
            <Order />
        </div>
    );
}

// to display any netwok error in the screen
export default withErrorHandler(Orders, axios);