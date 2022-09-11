import React, { useContext, useEffect, useState } from "react"
import "./Payment.css"
import BasketContext from "../../Context/Basket"
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct"
import { Link } from "react-router-dom"
import CurrencyFormat from "react-currency-format"

const Payment = () => {
	const { basket, handleOrder, subtotal } = useContext(BasketContext)

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to="/checkout">{basket.items?.length} items</Link>)
				</h1>

				{/* Payment section - deliver address */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{basket.user?.email}</p>
						<p>123 React Avenue</p>
						<p>HS3 6DG</p>
						<p>London, United Kingdom</p>
					</div>
				</div>
				{/* Payment section - Review Items */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review Items and delivery</h3>
					</div>
					<div className="payment__items">
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
				{/* Payment section - Payment method */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						{/* Stripe */}

						<div className="payment__priceContainer">
							<CurrencyFormat
								renderText={(value) => (
									<>
										<h3>Order Total: {value}</h3>
									</>
								)}
								decimalScale={2}
								value={subtotal}
								displayType="text"
								thousandSeparator={true}
								prefix={"£"}
							/>
							<Link to="/orders">
								<button className="payment__btn" onClick={handleOrder}>
									Buy Now
								</button>
							</Link>

							<Link to="/checkout">
								<button className="payment__btn">Cancel</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Payment
