import React, { useContext } from "react"
import "./Product.css"
import BasketContext from "../../Context/Basket"

const Product = ({ id, title, image, price, rating }) => {
	const { updateBasket } = useContext(BasketContext)
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>£</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
			</div>
			<img src={image} alt="" />

			<button
				onClick={() =>
					updateBasket({ id, title, image, price, rating }, "ADD_TO_BASKET")
				}
			>
				Add to Basket
			</button>
		</div>
	)
}

export default Product
