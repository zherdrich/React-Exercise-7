import { ReactNode, useState } from "react";
import Item from "../models/item-model";
import OrderContext from "./OrderContext";

interface Props {
	children: ReactNode;
}


                   //boilerplate
const OrderContextProvider = ({ children }: Props) => {
	const [order, setOrder] = useState<Item[]>([]);

	function addItem (item: Item): void {
        // copy then modify
        let copiedOrder = [...order];
        copiedOrder.push(item);
        setOrder(copiedOrder);

        // // OR
        // let copiedOrder = [...order, item];
        // setOrder(copiedOrder);

        // // OR
		// setOrder((prev) => [...prev, item]);
	};
	function removeItem(id: string): void {
		const index: number = order.findIndex((item) => item.id === id);
        // copy then modify
        let copiedOrder = [...order];
        copiedOrder.splice(index, 1);
        setOrder(copiedOrder);

        // // OR
		// setOrder((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
	};
	return (
		<OrderContext.Provider value={{ order, addItem, removeItem }}>
			{children}
		</OrderContext.Provider>
	);
};

export default OrderContextProvider;