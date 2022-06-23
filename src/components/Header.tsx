import "./Header.css"
import OrderContext from "../context/OrderContext"
import { useContext } from "react";

export default function Header() {
    const {order}= useContext(OrderContext);
    return(
        <header>
            <h1>Sunny Side Up</h1>
            <p>Order Count: {order.length}</p>
        </header>
    )
}