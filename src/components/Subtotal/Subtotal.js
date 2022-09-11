import React, { useContext } from "react"
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import BasketContext from "../../Context/Basket"
import { useNavigate } from "react-router-dom"

const Subtotal = () => {
	const navigate = useNavigate()
	const { basket, subtotal } = useContext(BasketContext)

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket.items.length} items):
							<strong>{` ${value}`}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={subtotal}
				displayType="text"
				thousandSeparator={true}
				prefix={"£"}
			/>

			<button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
		</div>
	)
}

export default Subtotal
