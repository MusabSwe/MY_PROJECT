import { useEffect, useState } from "react";
import Order from "../../../components/Order/Order";
import axios from "../../../axios-orders";
import withErrorHandler from "../../../withErrorHandler/withErrorHandler";

const Orders = () => {
    // orders is async state since it is used to fetch data
    // so we do not inlude it in the sync redux
    // and in advane redux in async redux we will use
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
                console.log(fetchedOrders);
                setOrders(fetchedOrders)
            }).catch(err => {
                // console.log(err);
                // console.log(err);
                setLoading(false);
            });

    }, []);

    return (
        <div>
            {orders.map((order) => {
                console.log(order);
                return <Order 
                key={order.id}
                price={order.price}
                ingredients={order.ingredients}
                />;
            })
            }

        </div>
    );
}

// to display any netwok error in the screen
export default withErrorHandler(Orders, axios);