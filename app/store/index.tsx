import { create } from "zustand";

export type OrderItem =
{
	id: string;
	type: string;
	oldPrice?: string;
	newPrice: string;
	size42?: string;
	selectedSize: number;
	quantity?: number;
	price?:string | {pricePizza:string, price:number, volume:string};
	volume: string;
	selectedToppings?: {price:string}[]
};

type OrderState =
{
	orders: OrderItem[];

	setOrders: (orderItem: OrderItem) => void;
	removeOrder: (orderItem: OrderItem) => void;
	clearOrders: () => void;
	confirmOrder?: () => void;

	increaseQuantity: (orderItem: OrderItem) => void;
	decreaseQuantity: (orderItem: OrderItem) => void;

	totalItems: () => void;
	getPriceForSize: (item: OrderItem) => {pricePizza: string; price: number; volume:string},
}

export const useOrderStore = create<OrderState>
(
	(set, get) =>
	(
		{
			orders: [],
			setOrders: (orderItem) =>
			(
				set
				(
					(state) =>
					{
						const exisitngOrder = state.orders.find
						(
							(item) => item.id === orderItem.id && item.selectedSize === orderItem.selectedSize && item.volume === orderItem.volume
						);

						if (exisitngOrder)
						{
							return {
								orders: state.orders.map
								(
									(item) =>
									(
										item.id == orderItem.id && item.selectedSize === orderItem.selectedSize && item.volume === orderItem.volume
										? { ...item, quantity: (item.quantity || 1) + 1 }
										: item
									)
								)
							}
						}

						return { orders: [...state.orders, { ...orderItem, quantity: 1 }] };
					}
				)
			),
			removeOrder: (orderItem) =>
			{
				set
				(
					(state) =>
					(
						{
							orders: state.orders.filter
							(
								(item) => !(item.id === orderItem.id && item.selectedSize === orderItem.selectedSize && item.volume === orderItem.volume)
							)
						}
					)
				);
			},
			clearOrders: () =>
			{
				set({ orders: [] });
			},
			confirmOrder: () =>
			{
				set({ orders: [] });
			},
			increaseQuantity: (orderItem) =>
			{
				set
				(
					(state) =>
					(
						{
							orders: state.orders.map
							(
								(item) =>
								(
									item.id == orderItem.id && item.selectedSize === orderItem.selectedSize && item.volume === orderItem.volume
									? { ...item, quantity: (item.quantity || 1) + 1 }
									: item
								)
							)
						}
					)
				)
			},
			decreaseQuantity: (orderItem) =>
			{
				set
				(
					(state) =>
					(
						{
							orders: state.orders.map
							(
								(item) =>
								{
									if (item.id == orderItem.id && item.selectedSize === orderItem.selectedSize && item.volume === orderItem.volume)
									{
										const newQuantity = (item.quantity || 1) - 1;
										return { ...item, quantity: newQuantity > 0 ? newQuantity : 0 };
									}
									return item;
								}
							)
						}
					)
				)
			},
			calculateTotal: () =>
			{
				// return { totalAmount: "0", totalDiscount: "0" };
			},
			totalItems: () =>
			{
				get().orders.reduce((total, item) => total + (item.quantity || 0), 0);
			},
            getPriceForSize: (item) =>
            {
                const basePrice = item.selectedSize === 42 ? item.size42 || "0" : item.newPrice;
                const pricePizza = parseFloat(basePrice.replace("$", ""));
                const priceString = typeof item.price === "string" ? item.price : item.price?.price || 0;
                const volume = item.volume || "";

                return {
                    pricePizza: basePrice, // возвращаем строку с форматом "$X"
                    price: pricePizza,     // возвращаем число
                    volume: volume         // возвращаем объем
                };
            }
		}
	)
)