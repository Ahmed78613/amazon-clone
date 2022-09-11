import React, { useContext } from "react"
import "./Orders.css"
import CurrencyFormat from "react-currency-format"
import BasketContext from "../../Context/Basket"
import { v4 as uuidv4 } from "uuid"

const Orders = () => {
	const { basket, updateBasket } = useContext(BasketContext)
	// date
	const today = new Date()
	const newDate = `${today.getDay()}/${today.getMonth()}/${today.getFullYear()}`

	return (
		<div className="orders">
			<div className="orders__container">
				<h1 className="orders__title">Your Orders</h1>
				<h4 className="orders__title">
					{basket.order?.length} orders placed in past 12 months
				</h4>
				{basket.order.length ? (
					basket.order.map((item) => (
						<>
							<div className="orders__section" key={item.title}>
								{/* Top */}
								<div className="orders__top">
									<div className="orders__topItem">
										<p className="orders__details">ORDER PLACED</p>
										<p>{newDate}</p>
									</div>
									<div className="orders__topItem">
										<p className="orders__details">TOTAL</p>

										<CurrencyFormat
											renderText={(value) => <p>{value}</p>}
											decimalScale={2}
											value={item.price}
											displayType="text"
											thousandSeparator={true}
											prefix={"£"}
										/>
									</div>
									<div className="orders__topItem">
										<p className="orders__details">DISPATCH TO</p>
										<p>{basket.username}</p>
									</div>
									<div className="orders__topItem">
										<p className="orders__details">ORDER # {uuidv4()}</p>
									</div>
								</div>
								{/* Bottom */}
								<div className="orders__bottom">
									<h3>Delivery Eexpected Tomorrow</h3>
									<p>Parcel will be handed to resident.</p>
									<div className="orders__item">
										<img className="orders__image" src={item.image} alt="" />
										<div className="orders__itemRight">
											<h4>{item.title}</h4>
											<p>Eligible for return until 30 Sep 2022</p>
											<button
												className="orders__buyBtn"
												onClick={() => updateBasket(item, "ADD_TO_BASKET")}
											>
												Buy it again
											</button>
											<button
												className="orders__returnBtn"
												onClick={() => updateBasket(item, "RETURN_ITEM")}
											>
												Return your item
											</button>
										</div>
									</div>
								</div>
							</div>
						</>
					))
				) : (
					<div className="orders__empty">
						<p>Looks like you haven't ordered anything yet</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default Orders
