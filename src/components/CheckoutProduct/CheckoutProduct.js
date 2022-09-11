import React, { useContext } from "react"
import "./CheckoutProduct.css"
import BasketContext from "../../Context/Basket"

const Product = ({ id, title, image, price, rating }) => {
	const { updateBasket } = useContext(BasketContext)
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt="" />

			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>£</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
				<button
					onClick={() =>
						updateBasket(
							{ id, title, image, price, rating },
							"REMOVE_FROM_BASKET"
						)
					}
				>
					Remove from basket
				</button>
			</div>
		</div>
	)
}

export default Product
