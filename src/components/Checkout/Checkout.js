import React, { useContext } from "react"
import "./Checkout.css"
import Subtotal from "../Subtotal/Subtotal"
import BasketContext from "../../Context/Basket"
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct"

const Checkout = () => {
	const { basket } = useContext(BasketContext)
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt="Amazon ocean credit card offer"
					className="checkout__ad"
				/>
				<div className="checkout__basket">
					<h2 className="checkout__title">Shopping Basket</h2>
					{basket.items?.map((item, index) => (
						<CheckoutProduct
							key={index}
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	)
}

export default Checkout
