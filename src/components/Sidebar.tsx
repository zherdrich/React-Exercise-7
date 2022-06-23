import { useContext } from "react"
import OrderContext from "../context/OrderContext"
import "./Sidebar.css"

export default function Sidebar() {
    const {order} = useContext(OrderContext);

    let total = 0;
    // Alternative Total Function
    
    // for (let i = 0; i<order.length; i++) { 
    //     total += order[i].price;
    // }

    order.map((item) => {
        total += item.price
    })

    return (
        <div className="sidebar">
            <ol>
            {order.map(item => <li key= {item.id}>{item.name} - ${item.price}</li> )}
            </ol>
            <p>Total: ${total}</p>
        </div>
    )
}