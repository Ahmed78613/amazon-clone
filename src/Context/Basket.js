import React, { useState, createContext } from "react"
const BasketContext = createContext()

export const BasketProvider = ({ children }) => {
	const [basket, setBasket] = useState({
		username: "Guest",
		user: null,
		prime: false,
		items: [],
		order: [],
	})

	if (
		basket.user &&
		basket.username !== basket.user.email.match(/^[^@]*/)[0].toUpperCase()
	) {
		setBasket((prevState) => ({
			...prevState,
			username: basket.user.email.match(/^[^@]*/)[0].toUpperCase(),
		}))
	}

	const updatePrime = () => {
		setBasket((prevState) => ({
			...prevState,
			prime: prevState.prime === true ? false : true,
		}))
	}

	const updateBasket = (newItem, type) => {
		if (type === "ADD_TO_BASKET") {
			setBasket((prevState) => ({
				...prevState,
				items: [...prevState.items, newItem],
			}))
		} else if (type === "REMOVE_FROM_BASKET") {
			const index = basket.items.findIndex((item) => item.id === newItem.id)
			let newBasket = [...basket.items]
			newBasket.splice(index, 1)
			setBasket((prevState) => ({ ...prevState, items: newBasket }))
		} else if (type === "EMPTY_BASKET") {
			setBasket((prevState) => ({
				...prevState,
				items: [],
			}))
		} else if (type === "RETURN_ITEM") {
			const index = basket.order.findIndex((item) => item.id === newItem.id)
			let newOrders = [...basket.order]
			newOrders.splice(index, 1)
			setBasket((prevState) => ({ ...prevState, order: newOrders }))
		}
	}

	const updateUser = (authUser, type) => {
		if (type === "USER_LOGIN") {
			setBasket((prevState) => ({
				...prevState,
				user: authUser,
			}))
		} else if (type === "USER_LOGOUT") {
			setBasket((prevState) => ({
				...prevState,
				username: "Guest",
				user: null,
			}))
		}
	}

	const handleOrder = () => {
		// update orders
		setBasket((prevState) => ({
			...prevState,
			order: [...prevState.order, ...prevState.items],
		}))
		// Empty basket
		updateBasket("", "EMPTY_BASKET")
		console.log(basket)
	}

	const subtotal = basket.items?.reduce(
		(amount, item) => amount + item.price,
		0
	)
	return (
		<BasketContext.Provider
			value={{
				basket,
				updateBasket,
				updateUser,
				handleOrder,
				subtotal,
				updatePrime,
			}}
		>
			{children}
		</BasketContext.Provider>
	)
}

export default BasketContext
